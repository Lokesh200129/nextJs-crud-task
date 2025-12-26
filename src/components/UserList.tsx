"use client"

import Card from "./Card"
import { useUserContext } from "../context/UserContext"

export default function UserList() {
    const { users } = useUserContext()

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 my-10 mx-16">
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    )
}
