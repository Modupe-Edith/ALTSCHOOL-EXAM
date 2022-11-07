import React, { useState } from "react";
import SearchBar from "./COMPONENTS/SearchBar";
import { Routes, Route, NavLink } from "react-router-dom";
import MyRepos from "./COMPONENTS/MyRepos";
import "./App.css";
import SingleRepo from "./COMPONENTS/SingleRepo";
import ErrorBound from "./COMPONENTS/ErrorBoundary";
import NotFound from "./COMPONENTS/NotFound";
import { ErrorBoundary } from "react-error-boundary";

export const MyContextApi = React.createContext({});

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const [repos, setRepos] = useState([]);
  const [explode, setExplode] = useState(false);
  return (
    <MyContextApi.Provider value={{ repos, setRepos, explode, setExplode }}>
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myrepos">My Repositories</NavLink>
          <NavLink to="/error-boundary">Error Boundary</NavLink>
        </div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          <Routes>
            <Route path="/" element={<SearchBar  />}></Route>
            <Route path="/myrepos" element={<MyRepos />}></Route>
            <Route path="/myrepos/:id" element={<SingleRepo />}></Route>
            <Route path="/error-boundary" element={<ErrorBound />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ErrorBoundary>
      </div>
    </MyContextApi.Provider>
  );
}

export default App;
