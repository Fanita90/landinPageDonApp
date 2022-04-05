import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacity from "./components/Privacity";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Ticket from "./components/Ticket";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PdfTicket from "./components/PdfTicket";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/avisoprivacidad" element={<Privacity />} />
          {/*<Route path="/ticket/:store/:id" element={<Ticket />} />*/}
          {/*<Route path="/ticket" element={<Ticket />} />*/}
          <Route exact path="/ticket" element={<PdfTicket/>} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
