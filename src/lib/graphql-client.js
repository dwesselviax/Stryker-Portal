import axios from 'axios';
import { useAuthStore } from '@/stores/auth-store';

const graphqlClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VIAX_API_URL || 'https://api.palooza.demo.viax.io/graphql',
  headers: { 'Content-Type': 'application/json' },
});

graphqlClient.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = 'Bearer ' + accessToken;
  }
  return config;
});

graphqlClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await useAuthStore.getState().refreshTokens();
        const { accessToken } = useAuthStore.getState();
        originalRequest.headers.Authorization = 'Bearer ' + accessToken;
        return graphqlClient(originalRequest);
      } catch {
        useAuthStore.getState().logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export async function executeQuery(query, variables) {
  const { data } = await graphqlClient.post('', { query, variables });
  if (data.errors) {
    throw new Error(data.errors[0]?.message || 'GraphQL Error');
  }
  return data.data;
}

export default graphqlClient;
