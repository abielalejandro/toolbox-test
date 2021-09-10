import Base from "./components/Layout/Base";
import Page01 from "./containers/Page01";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Base>
        <Page01 />
      </Base>
    </Provider>
  );
}

export default App;
