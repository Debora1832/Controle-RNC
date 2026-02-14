import { 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword,
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../config/firebase.js";

/**
 * Login com email e senha
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<UserCredential>}
 */
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}

/**
 * Fazer logout
 * @returns {Promise<void>}
 */
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro no logout:", error);
    throw error;
  }
}

/**
 * Registrar novo usuário
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<UserCredential>}
 */
export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Erro no registro:", error);
    throw error;
  }
}

/**
 * Observar mudanças no estado de autenticação
 * @param {function} callback - Função callback chamada quando o estado muda
 * @returns {function} - Função para cancelar a observação
 */
export function observeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
