import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout="2000"
      placement="bottom-center"
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
}

export default MyApp;
