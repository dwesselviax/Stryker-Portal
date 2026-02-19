import AssetDetailPage from './client';

export async function generateStaticParams() {
  return [
    { assetId: 'AST-001' }, { assetId: 'AST-002' }, { assetId: 'AST-003' }, { assetId: 'AST-004' },
    { assetId: 'AST-005' }, { assetId: 'AST-006' }, { assetId: 'AST-007' }, { assetId: 'AST-008' },
  ];
}

export default async function Page({ params }) {
  const { assetId } = await params;
  return <AssetDetailPage assetId={assetId} />;
}
