// __mocks__/config/database.js
const mockQuery = jest.fn();
const mockConnect = jest.fn();

const db = {
  query: mockQuery,
  connect: mockConnect,
};

export { db };
