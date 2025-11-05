import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
    </div>
  );
}

export default App;
