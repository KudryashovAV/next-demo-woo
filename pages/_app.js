import "../styles/global.css";
import { store } from "../store/store"
import { Provider } from "react-redux"

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component { ...pageProps } />
    </Provider>
  );
};
