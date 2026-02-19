'use client';

import { useAuthStore } from '@/stores/auth-store';
import { useThemeStore } from '@/stores/theme-store';
import { Bell, Search, LogOut, User, Settings, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function Topbar() {
  const { user, logout } = useAuthStore();
  const { logoUrl, portalName } = useThemeStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const initials = user
    ? (user.firstName?.[0] || '') + (user.lastName?.[0] || '')
    : 'U';

  return (
    <header className="flex h-14 items-center justify-between border-b border-[#D4D4D4] bg-white px-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${logoUrl || '/stryker-logo.svg'}`}
            alt={portalName || 'Stryker'}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-9 w-64 items-center gap-2 rounded-md border border-[#D4D4D4] bg-[#F5F5F5] px-3 text-sm text-[#545857] transition-colors hover:bg-white">
          <Search className="h-4 w-4" />
          <span>Search products, orders...</span>
        </button>

        <button className="relative rounded-md p-2 text-[#545857] transition-colors hover:bg-[#F5F5F5]">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#C62828]" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-[#F5F5F5]">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#FFB500] text-xs font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{user?.name}</p>
                <p className="text-xs text-[#545857]">{user?.organization}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-[#545857]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => router.push('/account')}>
              <User className="mr-2 h-4 w-4" /> My Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/admin/theme')}>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-[#C62828]">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
