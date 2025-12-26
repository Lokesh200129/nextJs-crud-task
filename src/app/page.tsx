import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-12 text-center bg-white rounded-2xl shadow-xl max-w-2xl">
        <h1 className="mb-6 text-5xl font-extrabold text-gray-900 tracking-tight">Welcome to User Management</h1>
        <p className="mb-8 text-xl text-gray-600">Efficiently manage your users.</p>
        <Link href="/users" className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1">
          Go to Users
        </Link>
      </div>
    </div>
  );
}
