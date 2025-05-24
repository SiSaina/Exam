import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'NBA Award',
        href: '/nba-award',
    },
];

export default function NbaAward() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="NBA Award" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

                    {/* Page Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">NBA Award Page</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Welcome to our NBA awards page! Explore player honors, season stats, and more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 p-4">

                        {/* Left Column: Featured Award Image */}
                        <div className="w-full md:col-span-2">
                            <a 
                                href="/news/news-detail"
                                className="block p-3 hover:shadow-md transition cursor-pointer">
                                <figure>
                                    <img
                                        src={awards[0].img}
                                        alt={awards[0].title}
                                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                                    />
                                </figure>

                                <h2 className="text-2xl font-bold mt-4 text-center md:text-left">{awards[0].title}</h2>
                                <p className="text-gray-700 mt-2 text-center md:text-left">{awards[0].description}</p>
                            </a>
                        </div>

                        {/* Right Column: List of Other Awards */}
                        <div className="md:col-span-1">
                            {awards.slice(0, 10).map((award, i) => (
                                <a
                                    key={i}
                                    href="newsDetail"
                                    className="block p-3 hover:shadow-md transition"
                                >
                                    <h3 className="text-sm font-semibold text-gray-800">{award.winner} — {award.title}</h3>
                                </a>
                            ))}

                        </div>
                    </div>



                    {/* Container 2: List of Other Awards */}
                    <div className="space-y-6 mt-10 border border-gray-200 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Other Award Winners</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {awards.map((award, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex overflow-hidden hover:shadow-lg transition"
                                >
                                    {/* Image */}
                                    <figure className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-32">
                                        <img
                                            src={award.img}
                                            alt={award.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>

                                    {/* Content */}
                                    <article className="p-3 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">{award.title}</h3>
                                            <p className="text-sm text-gray-600">{award.description}</p>
                                            <p className="text-xs text-gray-400">{award.time}</p>
                                        </div>
                                    </article>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </AppLayout>
        </>
    )
}
const awards = [
    {
        title: "24-25 Most Valuable Player",
        winner: "Shai Gilgeous-Alexander",
        description: "SGA led his team with MVP-caliber performance.",
        time: "Just now",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Coach of the Year",
        winner: "Cavs' Atkinson",
        description: "Guided the Cavs to an outstanding season.",
        time: "1 hour ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "claims Sportsmanship Award",
        winner: "Jrue Holiday",
        description: "Respected for his class on and off the court.",
        time: "2 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Most Improved Player",
        winner: "Hawks' Daniels",
        description: "Massive development and impact this season.",
        time: "3 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Rookie of the Year",
        winner: "Spurs' Castle",
        description: "A breakout rookie campaign with the Spurs.",
        time: "4 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Defensive Player",
        winner: "Mobley",
        description: "Locked down opponents night after night.",
        time: "5 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Sixth Man",
        winner: "Pritchard",
        description: "Spark plug off the bench with efficient scoring.",
        time: "6 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Clutch Player",
        winner: "Brunson",
        description: "Thrived under pressure in the closing minutes.",
        time: "7 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Hustle Award",
        winner: "Warriors' Green",
        description: "Never stopped grinding on the court.",
        time: "8 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    },
    {
        title: "24-25 Teammate of the Year",
        winner: "Warriors' Curry",
        description: "A true leader and uplifting presence.",
        time: "9 hours ago",
        img: "https://laravel.com/img/logomark.min.svg"
    }
];
