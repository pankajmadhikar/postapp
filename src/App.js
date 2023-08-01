import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Main />
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
