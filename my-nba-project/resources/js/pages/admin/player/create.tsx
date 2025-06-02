import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/index',
    },
    {
        title: 'create player',
        href: '/admin/player/create',
    },
];

export default function CreatePlayer() {
    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Player" />
                <div className="max-w-3xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Player</h1>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">First Name</label>
                                <input type="text" className="w-full border rounded p-2 mt-1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full border rounded p-2 mt-1" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Image URL</label>
                            <input type="url" className="w-full border rounded p-2 mt-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Position</label>
                                <input type="text" className="w-full border rounded p-2 mt-1" placeholder="e.g. PG, SG, SF" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Birth Date</label>
                                <input type="date" className="w-full border rounded p-2 mt-1" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Nationality</label>
                                <input type="text" className="w-full border rounded p-2 mt-1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">College</label>
                                <input type="text" className="w-full border rounded p-2 mt-1" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Height (cm)</label>
                                <input type="number" className="w-full border rounded p-2 mt-1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Weight (kg)</label>
                                <input type="number" className="w-full border rounded p-2 mt-1" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Draft Year</label>
                                <input type="number" className="w-full border rounded p-2 mt-1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Status</label>
                                <select className="w-full border rounded p-2 mt-1">
                                    <option value="Active">Active</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Injured">Injured</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Save Player
                            </button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
