import { Outlet } from "react-router-dom";

import { Navbar } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <h3>react router</h3>
      <Outlet />
      <hr />
      <h3>footer</h3>
    </div>
  );
}

export default App;
