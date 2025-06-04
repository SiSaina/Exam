import AdminLayout from "@/layouts/admin-layout";
import { Player, type BreadcrumbItem } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/player',
    },
    {
        title: 'create player',
        href: '/admin/player/create',
    },
];

export default function Create() {
    const { data, setData, post, processing } = useForm<Omit<Player, 'id'>>({
        first_name: '',
        last_name: '',
        position: '',
        birth_date: '',
        nationality: '',
        height: 0,
        weight: 0,
        image_url: '',
        college: '',
        draftYear: 1901,
        status: 'Active',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        if (event.target.type === 'number') {
            setData(prev => ({ ...prev, [name]: Number(value) }));
        } else {
            setData(prev => ({ ...prev, [name]: value }));
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.player.store-player'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Player" />
                <div className="max-w-3xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Player</h1>
                    <form className="space-y-6" onSubmit={submit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">First Name</label>
                                <input
                                    name="first_name"
                                    type="text"
                                    value={data.first_name}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Last Name</label>
                                <input
                                    name="last_name"
                                    type="text"
                                    value={data.last_name}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Image URL</label>
                            <input
                                name="image_url"
                                type="url"
                                value={data.image_url || ''}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Position</label>
                                <input
                                    name="position"
                                    type="text"
                                    value={data.position}
                                    onChange={handleChange}
                                    placeholder="e.g. PG, SG, SF"
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Birth Date</label>
                                <input
                                    name="birth_date"
                                    type="date"
                                    value={data.birth_date || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Nationality</label>
                                <input
                                    name="nationality"
                                    type="text"
                                    value={data.nationality || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">College</label>
                                <input
                                    name="college"
                                    type="text"
                                    value={data.college || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Height (cm)</label>
                                <input
                                    name="height"
                                    type="number"
                                    value={data.height}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Weight (kg)</label>
                                <input
                                    name="weight"
                                    type="number"
                                    value={data.weight}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Draft Year</label>
                                <input
                                    name="draftYear"
                                    type="number"
                                    value={data.draftYear || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Status</label>
                                <select
                                    name="status"
                                    value={data.status}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Injured">Injured</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Create Player'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}

