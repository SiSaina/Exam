import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types'
import { Head } from "@inertiajs/react"
import { Button } from "@/components/ui/button"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Schedule',
        href: '/schedule',
    },
]
const weeklySchedule = [
    {
        week: "Week 24",
        games: [
            {
                date: "Oct 25, 7:30 PM",
                broadcast: "ESPN",
                matchup: "Thunder vs. Lakers",
                conference: "Western Conference",
                location: "Paycom Center, OKC",
            },
            {
                date: "Oct 26, 6:00 PM",
                broadcast: "NBA TV",
                matchup: "Heat vs. Celtics",
                conference: "Eastern Conference",
                location: "Kaseya Center, Miami",
            },
        ]
    },
    {
        week: "Week 31",
        games: [
            {
                date: "Oct 28, 8:00 PM",
                broadcast: "TNT",
                matchup: "Thunder vs Nuggets",
                conference: "Western Conference",
                location: "Ball Arena, Denver",
            },
            {
                date: "Oct 29, 9:00 PM",
                broadcast: "ABC",
                matchup: "Warriors vs. Suns",
                conference: "Western Conference",
                location: "Chase Center, San Francisco",
            },
            {
                date: "Oct 30, 7:00 PM",
                broadcast: "NBC Sports",
                matchup: "76ers vs Knicks",
                conference: "Eastern Conference",
                location: "Madison Square Garden, NY",
            },
        ]
    },
]


export default function Schedule() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule" />
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                <h1 className="text-4xl font-bold text-center">Schedule</h1>

                {/* Filters would go here (omitted for brevity) */}

                {weeklySchedule.map((weekData, index) => (
                    <div key={index} className="space-y-2">
                        {/* Week Label */}
                        <h2 className="text-2xl font-semibold bg-blue-50 px-4 py-2 rounded shadow border border-blue-200">
                            {weekData.week}
                        </h2>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                                <thead className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3">Date & Broadcast</th>
                                        <th className="px-4 py-3">Matchup</th>
                                        <th className="px-4 py-3">Location</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {weekData.games.map((game, i) => (
                                        <tr key={i} className={`border-t ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-4 py-3">
                                                {game.date}<br />
                                                <span className="text-sm text-gray-500">{game.broadcast}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                {game.matchup}<br />
                                                <span className="text-sm text-gray-500">{game.conference}</span>
                                            </td>
                                            <td className="px-4 py-3">{game.location}</td>
                                            <td className="px-4 py-3">
                                                <Button size="sm" className="text-sm">View Details</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    )
}
