import ShipmentDetailPage from './client';

export async function generateStaticParams() {
  return [{ id: 'SHP-2025-0001' }];
}

export default async function Page({ params }) {
  const { id } = await params;
  return <ShipmentDetailPage shipmentId={id} />;
}
