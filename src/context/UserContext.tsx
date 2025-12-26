"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
    users: any[];
    deleteUser: (id: number) => void;
    updateUser: (user: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children, initialUsers }: { children: ReactNode, initialUsers: any[] }) {
    const [users, setUsers] = useState<any[]>(initialUsers);

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    const updateUser = (updatedUser: any) => {
        setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    };

    return (
        <UserContext.Provider value={{ users, deleteUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
}
