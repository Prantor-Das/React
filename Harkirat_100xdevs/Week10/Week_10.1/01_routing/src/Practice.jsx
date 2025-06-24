import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Practice() {
  // const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Allen</Link> |{" "}
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        {/* Dumb Way 
        < a href="/"> Allen </a> | <a href="/neet/online-coaching-class-11"> Class 11 </a> | <a href="/neet/online-coaching-class-12"> Class 12 </a>
        Reload the page
        */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <h1>Allen</h1>
    </div>
  );
}

function Class11Program() {
  return (
    <div>
      <h1>Class 11</h1>
    </div>
  );
}

function Class12Program() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Class 12</h1>
      <button onClick={() => navigate("/")}>Back to Landing Page</button>
      {/* Can also use <Link to="/">Back to Landing Page</Link> */}
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  );
}

export default Practice;
