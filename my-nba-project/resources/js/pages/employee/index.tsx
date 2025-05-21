import ConfirmationModal from "@/components/confirmationModal";
import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, router } from "@inertiajs/react";
import { useState } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Employee dashboard',
        href: '/employee.index',
    },
];

export default function Index() {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

    const handleDeleteClick = (id: number) => {
        setSelectedEmployee(id);
        setIsConfirmOpen(true);
    };
    const confirmDelete = () => {
        if (selectedEmployee !== null) {
            // Use the function here
        }
        setIsConfirmOpen(false);
        setSelectedEmployee(null);
    };

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Employee dashboard" />
                <div className="flex flex-col items-center justify-center h-full p-6">
                    <h1 className="text-4xl font-bold mb-6">Employee Page</h1>

                    <div className="w-full max-w-4xl overflow-x-auto shadow-md rounded-lg mb-6">
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4">dara</td>
                                    <td className="px-6 py-4">dara@gmail.com</td>
                                    <td className="px-6 py-4">admin</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded"
                                            onClick={() => router.get('/employee/1/edit')}
                                        >Edit</button>
                                        <button 
                                            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                                            onClick={() => handleDeleteClick(10)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow flex items-center gap-2"
                        onClick={() => router.get('/employee/create')}
                    >
                        Create Employee
                    </button>
                </div>
                <ConfirmationModal
                    isOpen={isConfirmOpen}
                    onConfirm={confirmDelete}
                    onCancel={() => setIsConfirmOpen(false)}
                    title="Delete Employee"
                    message="Are you sure you want to delete this employee?"
                />
            </AppLayout>
        </>
    )
}
