import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Season } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/statistic',
    },
    {
        title: 'create season',
        href: '/admin/season/create',
    },
];

export default function CreateSeason() {
    const { data, setData, post, processing } = useForm<Omit<Season, 'id'>>({
        name: '',
        type: '',
        start_date: '',
        end_date: '',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.season.store-season'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Season" />
                <div className="max-w-2xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Season</h1>
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <label className="block text-sm font-medium">Season Name</label>
                            <input
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Type</label>
                            <select
                                name="type"
                                value={data.type}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            >
                                <option value="">Select a type</option>
                                <option value="regular">Regular</option>
                                <option value="pre">Pre-Season</option>
                                <option value="playoff">Playoff</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Start Date</label>
                                <input
                                    name="start_date"
                                    type="date"
                                    value={data.start_date || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">End Date</label>
                                <input
                                    name="end_date"
                                    type="date"
                                    value={data.end_date || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Create Season'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
