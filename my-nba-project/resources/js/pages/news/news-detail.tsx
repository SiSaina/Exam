import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from '@/types'
import { Head } from "@inertiajs/react"

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'News', href: '/news' },
    { title: 'News Detail', href: '/news-detail' },
]

export default function NewsDetail() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="News Detail" />
                <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-center">Shai Gilgeous-Alexander’s MVP Case Strengthens</h1>

                    {/* Image or Video */}
                    <div className="w-full">
                        <img
                            src="https://laravel.com/img/logomark.min.svg"
                            alt="Highlight"
                            className="w-full h-96 object-cover rounded-lg shadow"
                        />
                    </div>

                    {/* Related Links */}
                    <div className="text-center">
                        <p className="text-lg font-medium mb-2">Related Topics:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a href="/player/sga" className="text-blue-600 hover:underline">SGA Profile</a>
                            <a href="/team/thunder" className="text-blue-600 hover:underline">Thunder Team Page</a>
                            <a href="/mvp-race" className="text-blue-600 hover:underline">MVP Race 2025</a>
                        </div>
                    </div>

                    {/* Main Article */}
                    <article className="text-lg leading-relaxed text-gray-800 space-y-4">
                        <p>
                            Shai Gilgeous-Alexander is no longer just a rising star — he’s a full-blown MVP contender.
                            In the 2025 season, SGA has consistently delivered elite performances, averaging over 30 points per game while leading the Oklahoma City Thunder to one of the best records in the league.
                        </p>
                        <p>
                            His ability to control the pace, break down defenses, and make timely plays has become a defining trait of OKC’s offensive identity.
                            More than just a scorer, Shai has embraced the role of a complete leader — often taking on the opponent’s toughest assignment while still facilitating for teammates.
                        </p>
                    </article>

                    {/* Image */}
                    <img
                        src="https://laravel.com/img/logomark.min.svg"
                        alt="SGA MVP"
                        className="w-full h-96 object-cover rounded-lg shadow"
                    />

                    {/* Sub-article */}
                    <article className="text-lg leading-relaxed text-gray-800 space-y-4">
                        <p>
                            “He’s got that calmness and killer instinct,” said Thunder coach Mark Daigneault.
                            “He leads in every category — not just statistically, but emotionally. That’s what makes an MVP.”
                        </p>
                        <p>
                            As the playoffs approach, Gilgeous-Alexander continues to cement his legacy as one of the league’s premier talents — and possibly its most valuable player.
                        </p>
                    </article>

                    {/* Table: Player Stats */}
                    <div className="overflow-x-auto mt-8">
                        <table className="w-full table-auto border border-gray-300 rounded-lg shadow">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left">Player</th>
                                    <th className="px-4 py-2 text-left">PTS</th>
                                    <th className="px-4 py-2 text-left">AST</th>
                                    <th className="px-4 py-2 text-left">REB</th>
                                    <th className="px-4 py-2 text-left">STL</th>
                                    <th className="px-4 py-2 text-left">BLK</th>
                                    <th className="px-4 py-2 text-left">TO</th>
                                    <th className="px-4 py-2 text-left">FOUL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Shai Gilgeous-Alexander</td>
                                    <td className="px-4 py-2">40.6</td>
                                    <td className="px-4 py-2">7.2</td>
                                    <td className="px-4 py-2">8.1</td>
                                    <td className="px-4 py-2">3.9</td>
                                    <td className="px-4 py-2">1.3</td>
                                    <td className="px-4 py-2">2.2</td>
                                    <td className="px-4 py-2">1.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
