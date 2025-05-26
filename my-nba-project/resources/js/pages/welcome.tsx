import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between bg-[#FDFDFC] px-6 py-10 text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] lg:px-12">
                <header className="flex justify-end w-full max-w-6xl mx-auto mb-12">
                    <nav className="space-x-4 text-sm">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded border px-4 py-1.5 hover:border-gray-400 dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-1.5 hover:underline"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded border px-4 py-1.5 hover:border-gray-400 dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <main className="flex flex-col items-center text-center space-y-10 max-w-6xl mx-auto w-full">
                    <div className="flex flex-col gap-6 rounded-xl p-4 w-full">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-48 border border-sidebar-border/70 dark:border-sidebar-border rounded-xl overflow-hidden relative"
                                >
                                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                </div>
                            ))}
                        </div>
                        <div className="h-[500px] border border-sidebar-border/70 dark:border-sidebar-border rounded-xl overflow-hidden relative">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
