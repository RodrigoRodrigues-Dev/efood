import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type MenuItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: builder => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
});

export const { useGetRestaurantsQuery } = api;
export default api;
