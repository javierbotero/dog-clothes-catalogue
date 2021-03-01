import server from './__mocks__/server';

beforeAll(() => server.listen());
afterEach(() => server.resethandlers());
afterAll(() => server.close());
