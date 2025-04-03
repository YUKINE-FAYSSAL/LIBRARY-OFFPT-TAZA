import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Secure storage keys
  const STORAGE_KEY = 'ofppt_library_auth';
  const TOKEN_KEY = 'ofppt_library_token';

  const parseUserData = (rawData) => {
    try {
      const data = JSON.parse(rawData);
      return {
        ...data,
        // Ensure admin status is properly set
        isAdmin: data?.TypeEmployé === 'admin' || data?.role === 'admin'
      };
    } catch (error) {
      console.error('Failed to parse user data', error);
      return null;
    }
  };

  const checkAuth = useCallback(() => {
    const authData = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

    if (authData && token) {
      const parsedUser = parseUserData(authData);
      if (parsedUser) {
        setUser(parsedUser);
        // Attach token to user object for API calls
        parsedUser.token = token;
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = (userData, token, remember = false) => {
    const storage = remember ? localStorage : sessionStorage;
    const userWithAdminFlag = {
      ...userData,
      isAdmin: userData.TypeEmployé === 'admin',
      token // Include token in user object
    };

    storage.setItem(STORAGE_KEY, JSON.stringify(userData));
    storage.setItem(TOKEN_KEY, token);
    setUser(userWithAdminFlag);
  };

  const logout = useCallback(() => {
    [localStorage, sessionStorage].forEach(storage => {
      storage.removeItem(STORAGE_KEY);
      storage.removeItem(TOKEN_KEY);
    });
    setUser(null);
  }, []);

  // Add function to check specific permissions
  const hasPermission = (requiredRole) => {
    if (!user) return false;
    if (requiredRole === 'admin') return user.isAdmin;
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      isLoading,
      login,
      logout,
      hasPermission
    }}>
      {children}
    </AuthContext.Provider>
  );
};