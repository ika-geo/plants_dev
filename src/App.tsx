import { HashRouter , Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";



function App() {
  return (
      <>
          <HashRouter >
              <Routes>
                  <Route path="/" element={<HeaderFooter/>}>
                      <Route index element={<Home/>} />
                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </HashRouter >

      </>
  );
}

export default App;
