import SubscriptionDetailPage from './client';

export async function generateStaticParams() {
  return [{ biId: 'SUB-001' }];
}

export default async function Page({ params }) {
  const { biId } = await params;
  return <SubscriptionDetailPage biId={biId} />;
}
