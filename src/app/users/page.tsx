import UserList from "../../components/UserList";

export default function Home() {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl mt-8">All User&apos;s</h1>
            <UserList />
        </div>
    );
}
