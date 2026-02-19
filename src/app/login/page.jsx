'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';
import { useThemeStore } from '@/stores/theme-store';
import { Loader2 } from 'lucide-react';

const TEST_ACCOUNTS = [
  { email: 'distributor@medequip.com', label: 'Distributor', name: 'James Mitchell' },
  { email: 'salesrep@stryker.com', label: 'Sales Rep', name: 'Emily Rodriguez' },
  { email: 'purchaser@memorial.org', label: 'Hospital Group', name: 'Michael Thompson' },
  { email: 'dr.test@hospital.org', label: 'Medical Professional', name: 'Dr. Sarah Chen' },
];

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();
  const { logoUrl } = useThemeStore();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  };

  const handleQuickLogin = async (email) => {
    setUsername(email);
    setPassword('demo');
    await login(email, 'demo');
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8]">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#D4D4D4] bg-white p-8 shadow-lg">
          <div className="mb-8 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${logoUrl || '/stryker-logo.svg'}`}
              alt="Stryker"
              className="h-12 w-auto"
            />
          </div>

          <h1 className="mb-2 text-center text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
            Sign In
          </h1>
          <p className="mb-6 text-center text-sm text-[#545857]">
            Access your B2B portal account
          </p>

          {error && (
            <div className="mb-4 rounded-md bg-[#FFEBEE] p-3 text-sm text-[#C62828]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>
                Email Address
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="you@company.com"
                className="h-12 w-full rounded-md border border-[#D4D4D4] bg-white px-4 text-base text-black placeholder:text-[#D4D4D4] focus:border-[#4C7D7A] focus:outline-none focus:ring-2 focus:ring-[#4C7D7A]/20"
                style={{ fontFamily: 'var(--font-body)' }}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-12 w-full rounded-md border border-[#D4D4D4] bg-white px-4 text-base text-black placeholder:text-[#D4D4D4] focus:border-[#4C7D7A] focus:outline-none focus:ring-2 focus:ring-[#4C7D7A]/20"
                style={{ fontFamily: 'var(--font-body)' }}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-12 w-full items-center justify-center rounded-md bg-[#4C7D7A] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664] disabled:opacity-50"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 border-t border-[#D4D4D4] pt-6">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Access (Demo)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {TEST_ACCOUNTS.map((account) => (
                <button
                  key={account.email}
                  onClick={() => handleQuickLogin(account.email)}
                  disabled={isLoading}
                  className="rounded-md border border-[#D4D4D4] px-3 py-2 text-left transition-colors hover:border-[#FFB500] hover:bg-[#FFF8E1] disabled:opacity-50"
                >
                  <p className="text-xs font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{account.label}</p>
                  <p className="text-[10px] text-[#545857]">{account.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[#545857]">
          Powered by <span className="font-semibold">viax</span> Revenue Execution
        </p>
      </div>
    </div>
  );
}
