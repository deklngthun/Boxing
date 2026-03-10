import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isAuthenticated: boolean;
  hasPurchased: boolean;
  login: () => void;
  logout: () => void;
  purchase: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setHasPurchased(false);
  };
  const purchase = () => setHasPurchased(true);

  return (
    <AppContext.Provider value={{ isAuthenticated, hasPurchased, login, logout, purchase }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
