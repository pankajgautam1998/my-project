import { BrowserRouter, Route, Routes } from "react-router-dom";
import Eduvilla from "./Eduvilla";
import Hostinger from "./Hostinger";
import AddCourse from "./AddCourse";

// import { routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Eduvilla />} />
        <Route path="/hostinger" element={<Hostinger />} />
        <Route path="/addcourse" element={<AddCourse />} />
        {/* {routes.map((route, index) => {
          return <Route key={index} path={route.element} />;
        })} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
