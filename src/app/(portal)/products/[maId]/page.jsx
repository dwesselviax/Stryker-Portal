import ProductDetailPage from './client';

export async function generateStaticParams() {
  return [{ maId: 'PRD-014' }];
}

export default async function Page({ params }) {
  const { maId } = await params;
  return <ProductDetailPage maId={maId} />;
}
