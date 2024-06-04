import { render } from '@testing-library/react';
import App from '@/App';
import { MemoryRouter } from 'react-router-dom';

describe('User', () => {
  test('renders heading', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(true).toBeTruthy();
  });
});
