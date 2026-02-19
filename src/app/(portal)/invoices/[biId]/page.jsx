import InvoiceDetailPage from './client';

export async function generateStaticParams() {
  return [{ biId: 'INV-2024-0001' }];
}

export default async function Page({ params }) {
  const { biId } = await params;
  return <InvoiceDetailPage biId={biId} />;
}
