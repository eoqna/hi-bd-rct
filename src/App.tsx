import { BrowserRouter } from "react-router-dom";
import Navigations from "./navigations/Navigations";

const App = () => {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
