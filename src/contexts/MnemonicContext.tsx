// MnemonicContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MnemonicContextType {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
}

const MnemonicContext = createContext<MnemonicContextType | undefined>(undefined);

export const useMnemonic = () => {
  const context = useContext(MnemonicContext);
  if (!context) {
    throw new Error('useMnemonic must be used within a MnemonicProvider');
  }
  return context;
};

export const MnemonicProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [mnemonic, setMnemonic] = useState('');

  return (
    <MnemonicContext.Provider value={{ mnemonic, setMnemonic }}>
      {children}
    </MnemonicContext.Provider>
  );
};
