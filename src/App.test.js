// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';

// // Mock the lazy-loaded Dashboard component
// jest.mock('./pages/dashboard', () => () => <div>Mocked Dashboard</div>);

// test('lazy loads dashboard route', async () => {
//   render(
//     <MemoryRouter initialEntries={['/dashboard/users']}>
//       <App />
//     </MemoryRouter>
//   );

//   // Expect to see the fallback
//   expect(screen.getByText('Loading...')).toBeInTheDocument();

//   // Wait for the lazy-loaded component
//   const dashboard = await screen.findByText('Mocked Dashboard');
//   expect(dashboard).toBeInTheDocument();
// });