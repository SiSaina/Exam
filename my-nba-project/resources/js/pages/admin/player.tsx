import AdminLayout from "@/layouts/admin-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/player',
    },
];

export default function Player() {
    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin dashboard" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Index player</h1>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-4">
                        <Link
                            href={route('admin.player.create')}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Create player
                        </Link>
                        <Link
                            href={route('admin.roster.create')}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Create roster
                        </Link>
                        <Link
                            href={route('admin.coach.create')}
                            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                        >
                            Create coach
                        </Link>
                        <Link
                            href={route('admin.team-coach.create')}
                            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                        >
                            Create team coach
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
