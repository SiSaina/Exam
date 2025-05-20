import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpenText, Calendar, LayoutGrid, Newspaper, PhoneCall, User, Users, Volleyball } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Game',
        href: '/game',
        icon: Volleyball
    },
    {
        title: 'Schedule',
        href: '/schedule',
        icon: Calendar
    },
    {
        title: 'New',
        href: '/new',
        icon: Newspaper
    },
    {
        title: 'Statistic',
        href: '/statistic',
        icon: Users
    },
    {
        title: 'About',
        href: '/about',
        icon: BookOpenText
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: PhoneCall
    },
    {
        title: 'Admin',
        href: '/admin',
        icon: User
    },
    {
        title: 'Employee',
        href: '/employee',
        icon: User
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
