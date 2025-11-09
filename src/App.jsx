import { LanguageProvider } from './context/LanguageContext';
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <LanguageProvider>
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
      </LanguageProvider>
    </div>
  );
}

export default App;
