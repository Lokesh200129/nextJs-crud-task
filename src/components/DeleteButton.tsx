
"use client";
export default function DeleteButton({ id }) {
    const handleDelete = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            alert(`Post ${id} deleted!`)
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded"
        >
            Delete
        </button>
    );
}