import './App.css';

import { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App() {
  const pageSize = "30";
  const token = process.env.REACT_APP_GNEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <LoadingBar color="#f11946" progress={progress} />
      <main className="flex-grow-1">
        <Routes>
          {categories.map((category) => (
            <Route
              key={category}
              path={category === "general" ? "/" : `/${category}`}
              element={
                <News
                  setProgress={setProgress}
                  token={token}
                  key={category}
                  pageSize={pageSize}
                  country="us"
                  category={category}
                />
              }
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
