import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, saveUsers, initialUsers } from '../data';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = getUsers();
    if (storedUsers.length === 0) {
      saveUsers(initialUsers);
      return initialUsers;
    }
    return storedUsers;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
