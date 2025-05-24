import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "New",
        href: "/topNews",
    },
];

export default function TopNews() {
    
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Top News" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <header className="mb-2 text-center">
                        <h1 className="text-3xl font-bold text-gray-900">Top Stories</h1>
                        <p className="text-sm text-gray-600">Latest highlights and top news of the moment</p>
                    </header>
                    <section className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <a
                                key={i}
                                href="#"
                                className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Image - fixed width */}
                                <figure className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-32">
                                    <img
                                        src="https://laravel.com/img/logomark.min.svg"
                                        alt="News thumbnail"
                                        className="w-full h-full object-cover"
                                    />
                                </figure>

                                {/* Content - flex-grow to take remaining space */}
                                <article className="p-3 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            5 TAKEAWAYS: SGA, THUNDER ROLL TO 2-0 LEAD
                                        </h3>
                                        <p className="text-base text-gray-600">
                                            SGA displays MVP form, Julius Randle disappears and OKC dominates again in Game 2.
                                        </p>
                                        <p className="text-sm text-gray-400">14 minutes ago</p>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </section>
                    <div className="ml-9">
                        <div className="inline-flex space-x-2 text-sm text-gray-600">
                            <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
                            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded">1</span>
                            <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
