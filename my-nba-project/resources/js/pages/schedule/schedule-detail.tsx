import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Schedule', href: '/schedule' },
    { title: 'Thunder vs. Lakers', href: '/schedule-detail' },
];

export default function ScheduleDetail() {
    const scheduleDetail = {
        date: "Oct 25, 2025 - 7:30 PM",
        broadcast: "ESPN",
        teams: "Thunder vs. Lakers",
        conference: "Western Conference",
        location: "Paycom Center, Oklahoma City",
        description: `
            The Oklahoma City Thunder will host the Los Angeles Lakers in a key Western Conference matchup. 
            This game pits rising star Shai Gilgeous-Alexander against the legendary LeBron James.
            Expect a high-paced showdown as both teams vie for playoff seeding early in the season.
        `
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule Detail" />
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* Matchup Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg text-center">
                    <h1 className="text-4xl font-extrabold mb-2">{scheduleDetail.teams}</h1>
                    <p className="text-lg">{scheduleDetail.date} &mdash; <strong>{scheduleDetail.broadcast}</strong></p>
                </div>

                {/* Detail Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h2 className="text-xl font-semibold mb-2">Match Info</h2>
                        <p><strong>Conference:</strong> {scheduleDetail.conference}</p>
                        <p><strong>Location:</strong> {scheduleDetail.location}</p>
                        <p><strong>Date & Time:</strong> {scheduleDetail.date}</p>
                        <p><strong>Broadcast:</strong> {scheduleDetail.broadcast}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h2 className="text-xl font-semibold mb-2">Tickets</h2>
                        <p>Get your seats for this must-see matchup!</p>
                        <Button className="mt-4" asChild>
                            <a
                                href="https://nbatickets.nba.com/tickets/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Tickets
                            </a>
                        </Button>
                    </div>
                </div>
                {/* Preview */}
                <div className="bg-white p-6 rounded-xl shadow border">
                    <h2 className="text-2xl font-semibold mb-2">Game Preview</h2>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                        {scheduleDetail.description}
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
