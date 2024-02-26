import AppRoutes from "./routes/appRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";
import UserProvider from "./context/authContext";
const App = () => {
  return (
    <div>
      <UserProvider>
        <Provider store={store}>
          <AppRoutes />
          <ToastContainer />
        </Provider>
      </UserProvider>
    </div>
  );
};

export default App;
