import AdminLayout from "@/layouts/admin-layout";
import { Player, Team, type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from "@inertiajs/react";

interface Props {
    players: Player[];
    teams: Team[];
    positions: string[];
    filters: {
        team?: string;
        position?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/index',
    },
];

export default function Index({ players, teams, positions, filters }: Props) {
    
    // const { get } = useForm();
    // const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     get(route('admin.player.index'), {
    //         preserveState: true,
    //         preserveScroll: true,
    //         replace: true,
    //         data: {
    //             ...filters,
    //             [name]: value || undefined,
    //         },
    //     });
    // };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin dashboard" />

                <div className="max-w-6xl mx-auto mt-10">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Players</h1>
                        <Link
                            href={route('admin.player.create')}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Create Player
                        </Link>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium">Filter by Team</label>
                            {/* <select
                                name="team"
                                value={filters.team || ''}
                                onChange={handleFilterChange}
                                className="border rounded p-2 mt-1 w-48"
                            >
                                <option value="">All Teams</option>
                                {teams.map((team) => (
                                    <option key={team} value={team}>{team}</option>
                                ))}
                            </select> */}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Filter by Position</label>
                            {/* <select
                                name="position"
                                value={filters.position || ''}
                                onChange={handleFilterChange}
                                className="border rounded p-2 mt-1 w-48"
                            >
                                <option value="">All Positions</option>
                                {positions.map((pos) => (
                                    <option key={pos} value={pos}>{pos}</option>
                                ))}
                            </select> */}
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium">First Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Last Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Position</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Team</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {players.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-4 text-gray-500">
                                            No players found.
                                        </td>
                                    </tr>
                                ) : (
                                    players.map((player) => (
                                        <tr key={player.id}>
                                            <td className="px-6 py-4">{player.firstName}</td>
                                            <td className="px-6 py-4">{player.lastName}</td>
                                            <td className="px-6 py-4">{player.position}</td>
                                            <td className="px-6 py-4">{player.team.name}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
