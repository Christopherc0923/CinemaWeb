import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <BrowserRouter>
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
