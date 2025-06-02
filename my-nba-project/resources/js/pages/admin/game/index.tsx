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
                    <h1 className="text-4xl font-bold mb-4">Admin game page</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Welcome to our website! We are dedicated to providing you with the best experience possible.
                        Our team is passionate about what we do, and we strive to exceed your expectations.
                    </p>
                    <Link
                        href={route('admin.game.create')}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Create game
                    </Link>
                </div>
            </AdminLayout>
        </>
    )
}
