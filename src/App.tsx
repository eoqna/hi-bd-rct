import { BrowserRouter } from "react-router-dom";
import Navigations from "./navigations/Navigations";
import Modal from "./components/Modal";
import useAppStore from "./store/useAppStore";

const App = () => {
  const { modal } = useAppStore();

  return (
    <BrowserRouter>
      { modal.open && <Modal /> }
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
