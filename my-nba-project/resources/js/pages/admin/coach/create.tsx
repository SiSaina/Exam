import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Coach } from '@/types';
import { Button } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'index',
        href: '/admin/player',
    },
    {
        title: 'create coach',
        href: '/admin/create/create',
    },
];

export default function Create() {
    const { data, setData, post, processing } = useForm<Omit<Coach, 'id'>>({
        first_name: '',
        last_name: '',
        birth_date: '',
        nationality: '',
        image_url: '',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.coach.store-coach'));
    };

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Create Coach" />
                <div className="max-w-2xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">Create New Coach</h1>
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
                                    required
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
                                    required
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
                                <label className="block text-sm font-medium">Birth Date</label>
                                <input
                                    name="birth_date"
                                    type="date"
                                    value={data.birth_date || ''}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 mt-1"
                                />
                            </div>
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
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Create Coach'}
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
}
