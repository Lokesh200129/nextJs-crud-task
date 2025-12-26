import Link from "next/link";

export default function Card({ user }: { user: any }) {
    return (
        <div className="w-[90%] lg:w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <ul className="mb-4 space-y-2">
                <li className="text-gray-700"><span className="font-semibold text-gray-900">Name:</span> {user.name}  </li>
                <li className="text-gray-700"><span className="font-semibold text-gray-900">Email:</span> {user.email}</li>
            </ul>
            <div className="flex">
                <Link href={`/users/${user.id}`}>
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-150 ease-in-out">View More</button>
                </Link>
            </div>
        </div>
    )
}