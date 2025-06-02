import AdminLayout from "@/layouts/admin-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/index',
    },
];

export default function Index() {
    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin dashboard" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Index player</h1>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-4">
                        <Link
                            href={route('admin.player.create-player')}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Create player
                        </Link>

                        <Link
                            href={route('admin.player.create-roster')}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Create roster
                        </Link>

                        <Link
                            href={route('admin.player.create-coach')}
                            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                        >
                            Create coach
                        </Link>

                        <Link
                            href={route('admin.player.create-team-coach')}
                            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                        >
                            Create team coach
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
