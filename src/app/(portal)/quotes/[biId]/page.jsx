import QuoteDetailPage from './client';

export async function generateStaticParams() {
  return [{ biId: 'QT-2025-0001' }];
}

export default async function Page({ params }) {
  const { biId } = await params;
  return <QuoteDetailPage biId={biId} />;
}
