import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css'; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
