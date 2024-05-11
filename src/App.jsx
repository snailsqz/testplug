import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/detail" element={<h1>detail</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
