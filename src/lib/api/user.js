const useMock = () => process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

export async function fetchCurrentUser() {
  if (useMock()) {
    const { useAuthStore } = await import('@/stores/auth-store');
    return useAuthStore.getState().user;
  }
  const { executeQuery } = await import('@/lib/graphql-client');
  return executeQuery('query { getCurrentUserInfo { uid name email } }');
}
