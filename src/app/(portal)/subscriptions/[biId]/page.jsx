import SubscriptionDetailPage from './client';

export async function generateStaticParams() {
  return [
    { biId: 'SUB-001' }, { biId: 'SUB-002' }, { biId: 'SUB-003' },
    { biId: 'SUB-004' }, { biId: 'SUB-005' }, { biId: 'SUB-006' },
  ];
}

export default async function Page({ params }) {
  const { biId } = await params;
  return <SubscriptionDetailPage biId={biId} />;
}
