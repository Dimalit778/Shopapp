import { createContext, useEffect, useReducer } from 'react';
// ----------------------------- #שומר את הנתונים בלוקל סטורנג  #
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};
export const AuthContext = createContext(INITIAL_STATE);
// ----------------------------- #מפעיל בהתאם להתחברות ב LOGIN  #
const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
// ----------------------------- #מעביר את הנתונים שהתקבלו ל- STATE #
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  // ----------------------------- # שומר את נתונים המתמש - localStorage  #
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    // ----------------------------- # מעביר את הפרמטרים ב -CONTEXT  #
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
