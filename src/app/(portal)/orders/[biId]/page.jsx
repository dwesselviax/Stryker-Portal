import OrderDetailPage from './client';

export async function generateStaticParams() {
  return [{ biId: 'ORD-2025-0001' }];
}

export default async function Page({ params }) {
  const { biId } = await params;
  return <OrderDetailPage biId={biId} />;
}
