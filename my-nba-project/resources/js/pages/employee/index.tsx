import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head, router } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Employee dashboard',
        href: '/employee.index',
    },
];

export default function Index() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Employee dashboard" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Employee page</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Welcome to our website! We are dedicated to providing you with the best experience possible.
                        Our team is passionate about what we do, and we strive to exceed your expectations.
                    </p>
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow flex items-center gap-2"
                        onClick={() => router.get('/employee/create')}
                    >
                        Create Employee
                    </button>
                </div>
            </AppLayout>
        </>
    )
}
