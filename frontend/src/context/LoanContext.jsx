import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from './AuthContext';
import { getLoans } from '../services/loanService';

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLoans = useCallback(async () => {
    if (!user?.matricule) return;
    
    try {
      setLoading(true);
      const data = await getLoans(user.matricule);
      setLoans(data);
    } catch (error) {
      console.error("Error fetching loans:", error);
    } finally {
      setLoading(false);
    }
  }, [user?.matricule]); // Only recreate when matricule changes

  useEffect(() => {
    fetchLoans();
  }, [fetchLoans]); // Now safe to include in dependencies

  return (
    <LoanContext.Provider value={{ loans, loading, refreshLoans: fetchLoans }}>
      {children}
    </LoanContext.Provider>
  );
};