import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Game",
        href: "/game",
    },
];

export default function Game() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Game" />
                <div className="space-y-8 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Game Schedule</h2>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <div>
                                    <input
                                        type="date"
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-lg font-medium text-gray-800 shadow-sm appearance-none"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <div className="flex items-center justify-center space-x-4">
                                    <button className="text-gray-600 hover:text-blue-600 text-2xl font-bold px-2">
                                        ←
                                    </button>
                                    <div className="flex space-x-2">
                                        {[
                                            { day: 'Sun', date: 'May 18' },
                                            { day: 'Mon', date: 'May 19' },
                                            { day: 'Tue', date: 'May 20' },
                                            { day: 'Wed', date: 'May 21' },
                                            { day: 'Thu', date: 'May 22' },
                                            { day: 'Fri', date: 'May 23' },
                                            { day: 'Sat', date: 'May 24' },
                                        ].map(({ day, date }) => (
                                            <button
                                                key={day}
                                                className="flex flex-col items-center bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 px-3 py-2 rounded-lg font-semibold transition-colors duration-200"
                                            >
                                                <span className="text-sm uppercase">{day}</span>
                                                <span className="text-xs">{date}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button className="text-gray-600 hover:text-blue-600 text-2xl font-bold px-2">
                                        →
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 rounded-md overflow-hidden">
                        <div className="p-3 flex flex-col text-center">
                            <div className="mb-3">
                                <h3 className="text-xl font-semibold text-gray-700">Regular Season</h3>
                            </div>
                            <div className="flex flex-grow min-h-[120px] mb-4 gap-4">
                                <div className="flex-[1.5] flex rounded items-center gap-4">
                                    <div className="flex-[2] flex flex-col justify-center items-center">
                                        <img
                                            src="https://laravel.com/img/logomark.min.svg"
                                            alt="Team Logo"
                                            className="w-8 h-8 object-contain mb-1"
                                        />
                                        <p className="text-base font-semibold text-gray-800">Team A</p>
                                    </div>
                                    <div className="justify-center text-xl font-bold text-blue-600">
                                        102
                                    </div>
                                </div>

                                <div className="flex-[1] flex flex-col justify-center">
                                    <h3 className="text-base font-bold text-gray-900">Regular Season</h3>
                                </div>

                                <div className="flex-[1.5] flex flex-row rounded items-center gap-4">
                                    <div className="justify-center text-xl font-bold text-blue-600">
                                        102
                                    </div>
                                    <div className="flex-[2] flex flex-col justify-center items-center">
                                        <img
                                            src="https://laravel.com/img/logomark.min.svg"
                                            alt="Team Logo"
                                            className="w-8 h-8 object-contain mb-1"
                                        />
                                        <p className="text-base font-semibold text-gray-800">Team A</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button 
                                    onClick={() => router.visit('/game/box-score')}
                                    className="border-2 border-black-600 rounded-full px-4 py-2 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out">
                                    Game Details
                                </button>
                            </div>
                        </div>
                        <div className="p-3 flex flex-col border-1 border-gray-300">
                            <h3 className="text-lg font-semibold mb-4">Game Leader</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="py-2 px-3 font-medium text-gray-700 w-1/2">Player</th>
                                            <th className="py-2 px-3 font-medium text-gray-700">PTS</th>
                                            <th className="py-2 px-3 font-medium text-gray-700">REB</th>
                                            <th className="py-2 px-3 font-medium text-gray-700">AST</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-2 px-3 w-1/2">
                                                <div className="font-semibold text-gray-800">John Doe</div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    35 MIN | #5 | SG
                                                </div>
                                            </td>
                                            <td className="py-2 px-3 font-bold text-blue-600 text-center">28</td>
                                            <td className="py-2 px-3 text-center">7</td>
                                            <td className="py-2 px-3 text-center">5</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-2 px-3 w-1/2">
                                                <div className="font-semibold text-gray-800">Jane Smith</div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    40 MIN | #11 | PF
                                                </div>
                                            </td>
                                            <td className="py-2 px-3 font-bold text-blue-600 text-center">22</td>
                                            <td className="py-2 px-3 text-center">10</td>
                                            <td className="py-2 px-3 text-center">3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="p-3 border-1 border-gray-300">
                            <h3 className="text-lg font-semibold mb-2">Game Recap</h3>
                            <article className="text-gray-700 text-sm">
                                In an intense battle, Team A outperformed Team B in the final quarter,
                                sealing a dramatic victory. John Doe dominated with an impressive 28 points.
                                <a href="#" className="block mt-2 text-blue-600 hover:underline">Read more →</a>
                            </article>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
