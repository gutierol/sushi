import { Translation } from 'types/Translation';
import en_US from './en-US';

const es_MX: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Crédito',
  DEBIT: 'Débito',
  RECENT_TRANSACTIONS: 'Transacciones Recientes',
  MY_ACCOUNTS: 'Mis Cuentas',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Agregar Cuenta',
  ACCOUNT_NAME: 'Nombre de Cuenta',
  INITIAL_AMOUNT: 'Monto Inicial',
  CREATE_ACCOUNT: 'Crear Cuenta',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Modificar Cuenta',
  UPDATE_ACCOUNT: 'Actualizar Cuenta',
  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Detalles de Cuenta',
  INITIAL_BALANCE: 'Balance Inicial',
  DELETE_ACCOUNT: '¿Borrar Cuenta?',
  DELETE_ACCOUNT_INFO:
    'Esto eliminara la cuenta {{accountName}} permanentemente, incluyendo {{transactionCount}} transacciones asociadas.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Transacción Nueva',
  CREATE_TRANSACTION: 'Crear Transacción',
  CATEGORY: 'Categoría',
  SOURCE_ACCOUNT: 'Cuenta Origen',
  DESTINATION_ACCOUNT: 'Cuenta Destino',
  TRANSFER: 'Transferir',
  SHORT_DESCRIPTION: 'Descripción Corta',
  AMOUNT: 'Monto',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Modificar Transacción',
  UPDATE_TRANSACTION: 'Actualizar Transacción',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Detalles de la Transacción',
  ACCOUNT: 'Cuenta',
  DATE_CREATED: 'Fecha Creada',
  DATE_UPDATED: 'Fecha Actualizada',
  DELETE_TRANSACTION: '¿Borrar Transacción?',
  DELETE_TRANSACTION_INFO:
    'Esto eliminara el registro de la transacción permanentemente.',
  KEEP: 'Guardar',
  DELETE: 'Borrar',

  // Transactions
  TRANSACTIONS: 'Transacciones',
  SEARCH: 'Buscar',
  DATE_RANGE: 'Período de Tiempo',
  SHOW_ALL: 'Mostrar Todo',
  EXPORT: 'Exportar',

  // SETTINGS
  SETTINGS: 'Ajustes',
  TRANSLATION_NAME: 'Español (MX)',
  CURRENCY: 'Moneda',
  LANGUAGE: 'Idioma',
  THEME: 'Tema',
  THEME_LIGHT: 'Claro',
  THEME_DARK: 'Oscuro',
};

export default es_MX;
