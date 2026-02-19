const useMock = () => process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

export async function fetchSubscriptions(filters = {}) {
  if (useMock()) {
    const { subscriptions } = await import('@/lib/mock-data/subscriptions');
    let result = [...subscriptions];
    if (filters.status) result = result.filter((s) => s.status === filters.status);
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter((s) => s.biId.toLowerCase().includes(q) || s.biName?.toLowerCase().includes(q));
    }
    return result;
  }
  return [];
}

export async function fetchSubscription(biId) {
  if (useMock()) {
    const { subscriptions } = await import('@/lib/mock-data/subscriptions');
    return subscriptions.find((s) => s.biId === biId) || null;
  }
  return null;
}
