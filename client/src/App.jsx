import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Suspense } from "react";
import { Layout } from "./component";
import {Properties,PropertyDes,Website} from "./pages"
import {QueryClient, QueryClientProvider} from "react-query"
import { ToastContainer } from "react-toastify";
import {ReactQueryDevtools} from "react-query/devtools"
import "react-toastify/dist/ReactToastify.css"
import UserDetailContext from "./context/UserDetailContext";
import { useState } from "react";
import Bookings from "./pages/Bookings/Bookings";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const queryClient=new QueryClient() 
  const [userDetail, setUserDetails] = useState({
    favorites:[],
    bookings:[],
    token:null,
  })

  return (
    <>
    <UserDetailContext.Provider value={{userDetail,setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout/>}>
            <Route path="/" element={<Website />} />
            <Route path="/properties">
              <Route index element={<Properties/>}/>
              <Route path=":propertyId" element={<PropertyDes/>}/>
            </Route>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
      </UserDetailContext.Provider>
    </>
  );
}

export default App;
