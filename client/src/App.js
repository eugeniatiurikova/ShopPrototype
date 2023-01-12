import { Provider } from 'react-redux';
import { rootReducer } from "./store/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Router } from "./pages/Router";


export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {

  return (<>
    <Provider store={store}>
      <Router />
    </Provider></>);
}

export default App;
