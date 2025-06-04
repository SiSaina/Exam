import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Team } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/team',
    },
    {
        title: 'create team',
        href: '/admin/team/create',
    },
];

export default function Create() {
    const { data, setData, post, processing } = useForm<Omit<Team, 'id'>>({
        name: '',
        slug: '',
        slug_two: '',
        logo_url: '',
        stadium: '',
        city: '',
        conference: '',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.team.store-team'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Team" />
                <div className="max-w-2xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Team</h1>
                    <form className="space-y-6" onSubmit={submit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Team Name</label>
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
                                <label className="block text-sm font-medium">Slug</label>
                                <input
                                    name="slug"
                                    type="text"
                                    value={data.slug}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Slug Two</label>
                                <input
                                    name="slug_two"
                                    type="text"
                                    value={data.slug_two}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Logo URL</label>
                                <input
                                    name="logo_url"
                                    type="url"
                                    value={data.logo_url || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Stadium</label>
                            <input
                                name="stadium"
                                type="text"
                                value={data.stadium || ''}
                                onChange={handleChange}
                                className="w-full border rounded p-2 mt-1"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">City</label>
                                <input
                                    name="city"
                                    type="text"
                                    value={data.city || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Conference</label>
                                <input
                                    name="conference"
                                    type="text"
                                    value={data.conference || ''}
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
                                {processing ? 'Creating...' : 'Create Team'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
