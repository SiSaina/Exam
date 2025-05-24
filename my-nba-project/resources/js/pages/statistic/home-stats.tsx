import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home statistic',
        href: '/statistic/home-stats',
    },
];

export default function HomeStat() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Home statistic" />
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold mb-6">Home Stats</h1>
                    <div className="mb-6 flex justify-center space-x-4">
                        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Daily</button>
                        <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Season</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {['Points', 'Assists', 'Rebounds', 'Block', 'Steal', 'Turnover'].map((stat) => (
                            <div key={stat} className="bg-white shadow rounded-lg p-4">
                                <h2 className="text-xl font-semibold text-center mb-4">{stat}</h2>
                                <div className="w-full">
                                    <table className="w-full text-sm text-left">
                                        <thead>
                                            <tr className="text-gray-500">
                                                <th className="py-2 px-3">No</th>
                                                <th className="py-2 px-3">Name</th>
                                                <th className="py-2 px-3 text-right">{stat}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3, 4, 5].map((no, index) => (
                                                <tr key={index} className={index === 0 ? 'font-bold' : ''}>
                                                    <td className="py-1 px-3">{no}</td>
                                                    <td className="py-1 px-3">Player {no}</td>
                                                    <td className="py-1 px-3 text-right">0</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
