// cubeClient.js
import cubejs from '@cubejs-client/core';

const cubejsApi = cubejs(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjYxOTg1ODUsImV4cCI6MTcyNjI4NDk4NX0.7AeNcbmq5-Fc9Lk7M58wh0sPWIS15SoRamDY8I9eeCg',
  { apiUrl: 'http://localhost:4000/cubejs-api/v1' }
);
export default cubejsApi;
