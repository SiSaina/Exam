import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Team, Player, Season } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/player',
    },
    {
        title: 'create roster',
        href: '/admin/roster/create',
    },
];

export default function Create({ teams, players, seasons }: { teams: Team[], players: Player[], seasons: Season[] }) {
    const { data, setData, post, processing } = useForm({
        team_id: '',
        player_id: '',
        season_id: '',
        position: '',
        jersey_number: '',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.player.store-roster'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Roster" />
                <div className="max-w-2xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Roster</h1>
                    <form className="space-y-6" onSubmit={submit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Team</label>
                                <select
                                    name="team_id"
                                    value={data.team_id}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                >
                                    <option value="">Select a team</option>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Player</label>
                                <select
                                    name="player_id"
                                    value={data.player_id}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                >
                                    <option value="">Select a player</option>
                                    {players.map(player => (
                                        <option key={player.id} value={player.id}>
                                            {player.first_name} {player.last_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Season</label>
                            <select
                                name="season_id"
                                value={data.season_id}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            >
                                <option value="">Select a season</option>
                                {seasons.map(season => (
                                    <option key={season.id} value={season.id}>
                                        {season.name} ({season.start_date} - {season.end_date})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Position</label>
                                <input
                                    name="position"
                                    type="text"
                                    value={data.position || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Jersey Number</label>
                                <input
                                    name="jersey_number"
                                    type="number"
                                    value={data.jersey_number || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                    min="0"
                                    max="99"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Create Roster'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
