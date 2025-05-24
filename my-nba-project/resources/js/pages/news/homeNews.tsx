import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'New',
        href: '/homeNews',
    },
];

export default function HomeNews() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="New" />
                <div className="flex flex-col items-center justify-center h-full">
                    <section className="py-10 px-4">
                        <div className="max-w-5xl mx-auto space-y-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <a
                                    href="/news/newsDetail"
                                    className="lg:col-span-2 block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                                >
                                    <article className="flex flex-col h-96">
                                        <figure className="w-full h-68">
                                            <img
                                                src="https://laravel.com/img/logomark.min.svg"
                                                alt="SGA dominating"
                                                className="w-full h-full object-cover"
                                            />
                                        </figure>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-gray-800">
                                                5 TAKEAWAYS: SGA, THUNDER ROLL TO 2-0 LEAD
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Shai Gilgeous-Alexander displays MVP form, Julius Randle disappears and OKC's defense dominates again in Game 2.
                                            </p>
                                            <p className="text-sm text-gray-500">14 minutes ago</p>
                                        </div>
                                    </article>
                                </a>
                                <div className="lg:col-span-1 flex flex-col space-y-3">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="block shadow rounded-lg overflow-hidden hover:shadow-md transition"
                                        >
                                            <article className="flex">
                                                <figure className="w-1/3">
                                                    <img
                                                        src="https://laravel.com/img/logomark.min.svg"
                                                        alt="Thumbnail"
                                                        className="w-full h-full"
                                                    />
                                                </figure>
                                                <div className="w-2/3 p-2">
                                                    <h3 className="text-sm font-semibold text-gray-800">
                                                        5 TAKEAWAYS: SGA, THUNDER ROLL TO 2-0 LEAD
                                                    </h3>
                                                    <p className="text-xs text-gray-600">
                                                        SGA displays MVP form, Julius Randle disappears and OKC dominates.
                                                    </p>
                                                    <p className="text-xs text-gray-400">14 minutes ago</p>
                                                </div>
                                            </article>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
                                        >
                                            <article className="p-4">
                                                <h3 className="text-base font-semibold text-gray-800">
                                                    5 TAKEAWAYS: SGA, THUNDER ROLL TO 2-0 LEAD
                                                </h3>
                                                <p className="text-xs text-gray-600">
                                                    SGA displays MVP form, Julius Randle disappears and OKC dominates.
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">14 minutes ago</p>
                                            </article>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </AppLayout>
        </>
    )
}
