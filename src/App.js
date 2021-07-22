import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
