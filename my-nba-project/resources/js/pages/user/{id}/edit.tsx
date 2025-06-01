import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit user',
        href: '/user/edit',
    },
];

// Props type example, adjust as needed based on your backend response
interface Employee {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface EditProps {
    employee: Employee;
    roles: string[]; // example roles list
}

export default function Edit({ employee, roles }: EditProps) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',  // optionally blank since you might not want to show existing password
        role: '',
    });

    // Populate form on mount or when employee changes
    useEffect(() => {
        if (employee) {
            setForm({
                name: employee.name,
                email: employee.email,
                password: '',
                role: employee.role,
            });
        }
    }, [employee]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send update request with Inertia (replace '/employee/{id}' with your route)
        router.put(`/employee/${employee.id}`, form);
    };

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Edit Employee" />
                <div className="flex flex-col items-center justify-center min-h-screen p-6">
                    <h1 className="text-4xl font-bold mb-6">Edit Employee</h1>

                    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password <small className="text-gray-400">(Leave blank to keep current password)</small>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300"
                            >
                                <option value="" disabled>Select a role</option>
                                {roles.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </AppLayout>
        </>
    );
}
