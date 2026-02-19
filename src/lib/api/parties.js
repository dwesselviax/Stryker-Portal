const useMock = () => process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

export async function fetchParties(filters = {}) {
  if (useMock()) {
    const { parties } = await import('@/lib/mock-data/parties');
    return parties;
  }
  return [];
}
