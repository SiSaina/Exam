import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Schedule',
        href: '/schedule',
    },
];

export default function Schedule() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Schedule" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold mb-4">Schedule page</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Welcome to our website! We are dedicated to providing you with the best experience possible.
                        Our team is passionate about what we do, and we strive to exceed your expectations.
                    </p>
                </div>
            </AppLayout>
        </>
    )
}
