import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'; 
import App from '../App'  


export const AppProviders = ({ children }) => {
  const mockStore = configureMockStore([]);
  const store = mockStore({
    global: { isSidebarCollapsed: false },
    user: {
      loading: false,
      users: [],
      error: "",
    },
    auth: {
      loading: false,
      data: null,
      error: "",
    },
  });
  return (
    <Provider store={store}>
      <App>
        {children}
      </App>
    </Provider>
  )
}
