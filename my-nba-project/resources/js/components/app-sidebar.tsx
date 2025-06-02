import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, Ghost, Newspaper, User, Users, Volleyball } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Game',
        href: '/admin/game/index',
        icon: Volleyball
    },
    {
        title: 'Player',
        href: '/admin/player/index',
        icon: User
    },
    {
        title: 'Team',
        href: '/admin/team/index',
        icon: Users
    },
    {
        title: 'Schedule',
        href: '/admin/schedule/index',
        icon: Calendar
    },
    {
        title: 'News',
        href: '/admin/news/index',
        icon: Newspaper
    },
    {
        title: 'Statistic',
        href: '/admin/statistic/index',
        icon: Users
    },
    {
        title: 'User',
        href: '/admin/user/index',
        icon: User
    },
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Ghost
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
