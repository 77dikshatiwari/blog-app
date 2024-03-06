import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./reduxStore/authSlice";
import {Footer, Header} from "./components";
// import Header from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-src flex flex-wrap content-between bg-gray-400">
      <div className="w-full-block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <div className="w-screen h-screen bg-white text-gray-950">Loading.......</div>;

  // return (
  //   <>
  //     <div>
  //       <h2>A Blog App with Appwrite</h2>
  //     </div>
  //   </>
  // );
}

export default App;
