import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Team, Season } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/game',
    },
    {
        title: 'create game',
        href: '/admin/game/create',
    },
];

export default function CreateGame({ teams, seasons }: { teams: Team[], seasons: Season[] }) {
    const { data, setData, post, processing } = useForm({
        name: '',
        date: '',
        time: '',
        home_team_id: 0,
        away_team_id: 0,
        home_team_score: 0,
        away_team_score: 0,
        season_id: 0,
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.game.store-game'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Game" />
                <div className="max-w-3xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Game</h1>
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <label className="block text-sm font-medium">Season</label>
                            <select
                                name="season_id"
                                value={data.season_id}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            >
                                <option value="">Select Season</option>
                                {seasons.map(season => (
                                    <option key={season.id} value={season.id}>
                                        {season.name} {season.type} 
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Game Name</label>
                            <input
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Date</label>
                                <input
                                    name="date"
                                    type="date"
                                    value={data.date}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Time</label>
                                <input
                                    name="time"
                                    type="time"
                                    value={data.time}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Home Team</label>
                                <select
                                    name="home_team_id"
                                    value={data.home_team_id}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                >
                                    <option value="">Select Home Team</option>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Away Team</label>
                                <select
                                    name="away_team_id"
                                    value={data.away_team_id}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                >
                                    <option value="">Select Away Team</option>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Home Team Points</label>
                                <input
                                    name="home_team_score"
                                    type="number"
                                    value={data.home_team_score}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                    min="0"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Away Team Points</label>
                                <input
                                    name="away_team_score"
                                    type="number"
                                    value={data.away_team_score}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                    min="0"
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                disabled={processing}
                            >
                                {processing ? 'Saving...' : 'Save Game & WeekGame'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}

