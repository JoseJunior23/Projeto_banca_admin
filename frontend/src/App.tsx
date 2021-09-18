import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SessionProvider } from "./contexts/SessionContext";
import { Routes } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SessionProvider>
        <Routes />
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
