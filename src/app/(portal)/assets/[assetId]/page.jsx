import AssetDetailPage from './client';

export async function generateStaticParams() {
  return [{ assetId: 'AST-001' }];
}

export default async function Page({ params }) {
  const { assetId } = await params;
  return <AssetDetailPage assetId={assetId} />;
}
