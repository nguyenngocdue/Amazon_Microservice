// src/config.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export default {
  API_BASE_URL,
  endpoints: {
    users: {
      v1: `${API_BASE_URL}/v1/users`,
      v2: `${API_BASE_URL}/v2/users`,
    },
    orders: {
      v1: `${API_BASE_URL}/v1/orders`,
      v2: `${API_BASE_URL}/v2/orders`,
    },
    shippings: {
      v1: `${API_BASE_URL}/v1/shippings`,
      v2: `${API_BASE_URL}/v2/shippings`,
    },
  },
};
