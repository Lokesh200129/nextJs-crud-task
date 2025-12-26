"use client"
import Link from "next/link";
import { useUserContext } from "../../../context/UserContext";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DetailedView() {
    const { id } = useParams();
    const { users, deleteUser, updateUser } = useUserContext();
    const router = useRouter();

    const user = users.find((u) => u.id.toString() === id);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user || {});

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    if (!user) return <div className="flex justify-center mt-10">User not found</div>;

    const handleDelete = () => {
        deleteUser(Number(id));
        router.push("/users");
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(formData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isEditing) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit User</h2>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-gray-900" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-gray-900" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-gray-900" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Website</label>
                            <input type="text" name="website" value={formData.website || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-gray-900" required />
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-150">
                                Save
                            </button>
                            <button type="button" onClick={() => setIsEditing(false)} className="flex-1 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-150">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-blue-600 p-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-blue-600 mb-3 shadow-sm">
                        {user.name.charAt(0)}
                    </div>
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    <p className="text-blue-100">@{user.username}</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="font-semibold w-20">Email:</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="font-semibold w-20">Phone:</span>
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="font-semibold w-20">Website:</span>
                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                            {user.website}
                        </a>
                    </div>
                    <div className="border-t border-gray-100 my-4 pt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600 text-sm">
                            {user.address.street}, {user.address.suite}<br />
                            {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                    <div className="border-t border-gray-100 my-4 pt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Company</h3>
                        <p className="text-gray-800 font-medium">{user.company.name}</p>
                        <p className="text-gray-500 text-sm italic">{user.company.catchPhrase}</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <div className="flex gap-3 mb-3">
                        <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-150">
                            Edit
                        </button>
                        <button onClick={handleDelete} className="flex-1 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-150">
                            Delete
                        </button>
                    </div>
                    <Link href="/users" className="block w-full text-center bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-150">
                        Back to Users
                    </Link>
                </div>
            </div>
        </div>
    );
}