import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Game as Games } from '@/types';
import { Head, Link, usePage } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/game',
    },
];

export default function Game() {
    const { games } = usePage<{ games: Games[] }>().props;

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin dashboard" />
                <div className="max-w-4xl mx-auto mt-10">
                    <h1 className="text-4xl font-bold mb-4">Admin Game Page</h1>

                    <Link
                        href={route('admin.game.create')}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Create Game
                    </Link>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-4">Game List</h2>
                        <table className="w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Game</th>
                                    <th className="border p-2">Date</th>
                                    <th className="border p-2">Time</th>
                                    <th className="border p-2">Duration</th>
                                    <th className="border p-2">Teams</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {games.map(game => (
                                    <tr key={game.id} className="border">
                                        <td className="border p-2">{game.name}</td>
                                        <td className="border p-2">{game.date}</td>
                                        <td className="border p-2">{game.time}</td>
                                        <td className="border p-2">{game.duration} mins</td>
                                        <td className="border p-2">
                                            <b>{game.home_team.name}</b> vs <b>{game.away_team.name}</b>
                                        </td>
                                        <td className="border p-2 space-x-2">
                                            <Link 
                                                href={route('admin.game.start-game', { id: game.id })} 
                                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                            >
                                                Start
                                            </Link>
                                            <Link 
                                                href={route('admin.game.delete-game', { id: game.id })} 
                                                method="delete"
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
