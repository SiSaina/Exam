import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add employee',
        href: '/employee/create',
    },
];

export default function Create() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Employee dashboard" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Employee create page</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Welcome to our website! We are dedicated to providing you with the best experience possible.
                        Our team is passionate about what we do, and we strive to exceed your expectations.
                    </p>
                </div>
            </AppLayout>
        </>
    )
}
