import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { type BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Game",
        href: "/game",
    },
    {
      title: "Box Score",
      href: "/box-score",
    }
];

export default function BoxScore() {
  return (
    <>
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Box Score" />
        <div className="px-6 py-6">

          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">Regular Season</h3>
            <div className="flex flex-grow min-h-[140px] gap-6 bg-white rounded-lg p-6 shadow">

              {/* Team A */}
              <div className="flex-[1.5] flex items-center gap-4">
                <div className="flex-[2] flex flex-col items-center">
                  <img src="https://laravel.com/img/logomark.min.svg" className="w-10 h-10 mb-1" />
                  <p className="text-lg font-semibold text-gray-800">Team A</p>
                </div>
                <div className="flex-1 text-3xl font-bold text-blue-600 text-center">102</div>
              </div>

              {/* Middle */}
              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-lg font-bold text-gray-700">Final</h3>
              </div>

              {/* Team B */}
              <div className="flex-[1.5] flex items-center gap-4 justify-end">
                <div className="flex-1 text-3xl font-bold text-blue-600 text-center">98</div>
                <div className="flex-[2] flex flex-col items-center">
                  <img src="https://laravel.com/img/logomark.min.svg" className="w-10 h-10 mb-1" />
                  <p className="text-lg font-semibold text-gray-800">Team B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team A Table */}
          <div className="mb-6 bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Team A</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2 px-3 w-1/3">Player</th>
                  <th className="py-2 px-3 text-center">MIN</th>
                  <th className="py-2 px-3 text-center">PTS</th>
                  <th className="py-2 px-3 text-center">REB</th>
                  <th className="py-2 px-3 text-center">AST</th>
                  <th className="py-2 px-3 text-center">BLK</th>
                  <th className="py-2 px-3 text-center">STL</th>
                  <th className="py-2 px-3 text-center">TOV</th>
                  <th className="py-2 px-3 text-center">FOUL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-3 font-medium text-gray-800">John Doe</td>
                  <td className="py-2 px-3 text-center">35</td>
                  <td className="py-2 px-3 text-center">28</td>
                  <td className="py-2 px-3 text-center">7</td>
                  <td className="py-2 px-3 text-center">5</td>
                  <td className="py-2 px-3 text-center">1</td>
                  <td className="py-2 px-3 text-center">2</td>
                  <td className="py-2 px-3 text-center">3</td>
                  <td className="py-2 px-3 text-center">2</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-3 font-medium text-gray-800">Jane Smith</td>
                  <td className="py-2 px-3 text-center">40</td>
                  <td className="py-2 px-3 text-center">22</td>
                  <td className="py-2 px-3 text-center">10</td>
                  <td className="py-2 px-3 text-center">3</td>
                  <td className="py-2 px-3 text-center">0</td>
                  <td className="py-2 px-3 text-center">1</td>
                  <td className="py-2 px-3 text-center">2</td>
                  <td className="py-2 px-3 text-center">4</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Team B Table */}
          <div className="mb-6 bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Team B</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2 px-3 w-1/3">Player</th>
                  <th className="py-2 px-3 text-center">MIN</th>
                  <th className="py-2 px-3 text-center">PTS</th>
                  <th className="py-2 px-3 text-center">REB</th>
                  <th className="py-2 px-3 text-center">AST</th>
                  <th className="py-2 px-3 text-center">BLK</th>
                  <th className="py-2 px-3 text-center">STL</th>
                  <th className="py-2 px-3 text-center">TOV</th>
                  <th className="py-2 px-3 text-center">FOUL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-3 font-medium text-gray-800">Mike Allen</td>
                  <td className="py-2 px-3 text-center">38</td>
                  <td className="py-2 px-3 text-center">24</td>
                  <td className="py-2 px-3 text-center">4</td>
                  <td className="py-2 px-3 text-center">8</td>
                  <td className="py-2 px-3 text-center">0</td>
                  <td className="py-2 px-3 text-center">3</td>
                  <td className="py-2 px-3 text-center">1</td>
                  <td className="py-2 px-3 text-center">2</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-3 font-medium text-gray-800">Sara Lee</td>
                  <td className="py-2 px-3 text-center">33</td>
                  <td className="py-2 px-3 text-center">18</td>
                  <td className="py-2 px-3 text-center">6</td>
                  <td className="py-2 px-3 text-center">2</td>
                  <td className="py-2 px-3 text-center">1</td>
                  <td className="py-2 px-3 text-center">1</td>
                  <td className="py-2 px-3 text-center">3</td>
                  <td className="py-2 px-3 text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </AppLayout>
    </>
  );
}
