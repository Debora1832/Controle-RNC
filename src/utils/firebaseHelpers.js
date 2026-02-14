/**
 * Utilitários e helpers para Firebase
 */

/**
 * Formata erro do Firebase para mensagem amigável
 * @param {Error} error - Erro do Firebase
 * @returns {string} - Mensagem formatada
 */
export function formatFirebaseError(error) {
  const errorMessages = {
    'auth/invalid-email': 'Email inválido',
    'auth/user-disabled': 'Usuário desabilitado',
    'auth/user-not-found': 'Usuário não encontrado',
    'auth/wrong-password': 'Senha incorreta',
    'auth/email-already-in-use': 'Email já está em uso',
    'auth/weak-password': 'Senha muito fraca',
    'auth/network-request-failed': 'Erro de conexão',
    'permission-denied': 'Permissão negada',
    'unavailable': 'Serviço indisponível'
  };
  
  return errorMessages[error.code] || error.message || 'Erro desconhecido';
}

/**
 * Valida email
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida senha (mínimo 6 caracteres)
 * @param {string} password - Senha a validar
 * @returns {boolean}
 */
export function isValidPassword(password) {
  return password && password.length >= 6;
}

/**
 * Converte timestamp do Firebase para Date
 * @param {Timestamp} timestamp - Timestamp do Firebase
 * @returns {Date}
 */
export function timestampToDate(timestamp) {
  if (!timestamp) return null;
  return timestamp.toDate();
}

/**
 * Formata data para exibição
 * @param {Date|Timestamp} date - Data a formatar
 * @returns {string}
 */
export function formatDate(date) {
  if (!date) return '';
  
  const d = date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleDateString('pt-BR');
}

/**
 * Formata data e hora para exibição
 * @param {Date|Timestamp} date - Data a formatar
 * @returns {string}
 */
export function formatDateTime(date) {
  if (!date) return '';
  
  const d = date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleString('pt-BR');
}
