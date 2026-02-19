import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5]">
      <h1 className="text-6xl font-bold text-[#FFB500]" style={{ fontFamily: 'var(--font-heading)' }}>404</h1>
      <p className="mt-4 text-lg text-[#545857]">Page not found</p>
      <Link
        href="/dashboard"
        className="mt-6 rounded-md bg-[#4C7D7A] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
