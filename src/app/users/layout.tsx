import { UserProvider } from "../../context/UserContext";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return (
        <UserProvider initialUsers={users}>
            {children}
        </UserProvider>
    );
}
