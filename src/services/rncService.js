import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const RNCS_COLLECTION = "rncs";

/**
 * Criar nova RNC
 * @param {Object} rncData - Dados da RNC
 * @returns {Promise<string>} - ID da RNC criada
 */
export async function createRNC(rncData) {
  try {
    const docRef = await addDoc(collection(db, RNCS_COLLECTION), {
      ...rncData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar RNC:", error);
    throw error;
  }
}

/**
 * Buscar todas as RNCs
 * @returns {Promise<Array>} - Array de RNCs
 */
export async function getAllRNCs() {
  try {
    const querySnapshot = await getDocs(collection(db, RNCS_COLLECTION));
    const rncs = [];
    querySnapshot.forEach((doc) => {
      rncs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return rncs;
  } catch (error) {
    console.error("Erro ao buscar RNCs:", error);
    throw error;
  }
}

/**
 * Buscar RNC por ID
 * @param {string} id - ID da RNC
 * @returns {Promise<Object>} - Dados da RNC
 */
export async function getRNCById(id) {
  try {
    const docRef = doc(db, RNCS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error("RNC não encontrada");
    }
  } catch (error) {
    console.error("Erro ao buscar RNC:", error);
    throw error;
  }
}

/**
 * Atualizar RNC
 * @param {string} id - ID da RNC
 * @param {Object} updates - Dados a serem atualizados
 * @returns {Promise<void>}
 */
export async function updateRNC(id, updates) {
  try {
    const docRef = doc(db, RNCS_COLLECTION, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Erro ao atualizar RNC:", error);
    throw error;
  }
}

/**
 * Deletar RNC
 * @param {string} id - ID da RNC
 * @returns {Promise<void>}
 */
export async function deleteRNC(id) {
  try {
    const docRef = doc(db, RNCS_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar RNC:", error);
    throw error;
  }
}

/**
 * Filtrar RNCs por status
 * @param {string} status - Status da RNC (ON_TIME, AT_RISK, OVERDUE, COMPLETED)
 * @returns {Promise<Array>} - Array de RNCs filtradas
 */
export async function getRNCsByStatus(status) {
  try {
    const q = query(collection(db, RNCS_COLLECTION), where("status", "==", status));
    const querySnapshot = await getDocs(q);
    const rncs = [];
    querySnapshot.forEach((doc) => {
      rncs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return rncs;
  } catch (error) {
    console.error("Erro ao filtrar RNCs por status:", error);
    throw error;
  }
}

/**
 * Filtrar RNCs por responsável
 * @param {string} responsavel - Nome do responsável
 * @returns {Promise<Array>} - Array de RNCs filtradas
 */
export async function getRNCsByResponsavel(responsavel) {
  try {
    const q = query(collection(db, RNCS_COLLECTION), where("responsavel", "==", responsavel));
    const querySnapshot = await getDocs(q);
    const rncs = [];
    querySnapshot.forEach((doc) => {
      rncs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return rncs;
  } catch (error) {
    console.error("Erro ao filtrar RNCs por responsável:", error);
    throw error;
  }
}

/**
 * Atualizar fase específica da RNC
 * @param {string} id - ID da RNC
 * @param {string} phaseId - ID da fase (d1, d2, etc)
 * @param {Object} phaseData - Dados da fase
 * @returns {Promise<void>}
 */
export async function updateRNCPhase(id, phaseId, phaseData) {
  try {
    const docRef = doc(db, RNCS_COLLECTION, id);
    const updateData = {};
    updateData[phaseId] = phaseData;
    updateData.updatedAt = serverTimestamp();
    
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error("Erro ao atualizar fase da RNC:", error);
    throw error;
  }
}

/**
 * Solicitar reprazo para uma fase
 * @param {string} id - ID da RNC
 * @param {string} phaseId - ID da fase (d1, d2, etc)
 * @param {string} novaData - Nova data do prazo
 * @param {string} justificativa - Justificativa do reprazo
 * @param {number} numero - Número do reprazo (1 ou 2)
 * @returns {Promise<void>}
 */
export async function solicitarReprazo(id, phaseId, novaData, justificativa, numero) {
  try {
    const docRef = doc(db, RNCS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error("RNC não encontrada");
    }
    
    const rnc = docSnap.data();
    const prazos = rnc.prazos || {};
    const phasePrazos = prazos[phaseId] || {};
    
    phasePrazos[`reprazo${numero}`] = novaData;
    phasePrazos[`just${numero}`] = justificativa;
    
    prazos[phaseId] = phasePrazos;
    
    await updateDoc(docRef, {
      prazos: prazos,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Erro ao solicitar reprazo:", error);
    throw error;
  }
}
