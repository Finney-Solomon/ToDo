import { useSelector } from "react-redux";
import "./App.css";
import { Layout } from "./components/Layout";

function App() {
  const open = useSelector((state) => state?.snackbar?.open);
  const timer = useSelector((state) => state?.snackbar);
 
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
