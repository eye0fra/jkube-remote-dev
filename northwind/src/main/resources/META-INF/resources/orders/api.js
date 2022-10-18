const {createApi, fetchBaseQuery} = lib;

const TAG = 'Order';

export const api = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
  }),
  tagTypes: [TAG],
  endpoints: builder => ({
    getRecentOrders: builder.query({query: () => '/orders?sort=orderDate&direction=Descending&limit=10'}),
    getPendingShipmentCount: builder.query({query: () => '/orders/count?status=pending-shipment'}),
    getTotalRevenue: builder.query({query: () => '/revenue'})
  })
});

api.sendOrder = ({orderId}) => fetch(`/api/v1/mail/orders/${orderId}`, {
  method: 'POST'
});
