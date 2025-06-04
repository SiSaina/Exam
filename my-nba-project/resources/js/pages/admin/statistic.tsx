import AdminLayout from "@/layouts/admin-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Statistic dashboard',
        href: '/statistic',
    },
];

export default function Statistic() {
    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin dashboard" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Statistic page</h1>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-4">
                        <Link
                            href={route('admin.season.create')}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Create season
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
