import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/game/index',
    },
    {
        title: 'create',
        href: '/admin/game/create',
    },
];

export default function Create() {
    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Game" />
                <div className="max-w-3xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Game</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input type="date" className="w-full border rounded p-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Time</label>
                            <input type="time" className="w-full border rounded p-2 mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Home Team</label>
                            <select className="w-full border rounded p-2 mt-1">
                                {/* Replace with actual team options */}
                                <option value="">Select Home Team</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Away Team</label>
                            <select className="w-full border rounded p-2 mt-1">
                                {/* Replace with actual team options */}
                                <option value="">Select Away Team</option>
                            </select>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Home Team Points</label>
                                <input type="number" className="w-full border rounded p-2 mt-1" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Away Team Points</label>
                                <input type="number" className="w-full border rounded p-2 mt-1" />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Save Game
                            </button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
