import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import MainAside from "../components/aside/MainAside";
import MainHeader from "../components/header/mainHeader";

import { Layout } from "antd";

import "../styles/mainLayout.css";
import "../styles/MobileAside.css";
import MobileAside from "../components/aside/mobileAside";
import { SwipeableDrawer } from "@mui/material";

const MainLayout = () => {
  const location = useLocation();

  const [removeAside, setRemoveAside] = useState(true);
  console.log(location);
  useEffect(()=>{
    const path = ["/" , "/login" , "/register" , "/validation-phone-number"]
    if(path.includes(location.pathname) ){
      setRemoveAside(false)
    }else{
      setRemoveAside(true)
    }
  },[location])



  

  return (
    <>
      <header class="shadow  mb-3 bg-body rounded position-fixed w-100" style={{zIndex:"2"}}>
        <MainHeader />
      </header>

      <div className={removeAside ? "mainLayout-main-aside-container " : false}>
        <main>
          <Outlet />
        </main>
        {removeAside && (
          <aside>
            <MainAside />
          </aside>
        )}

        {removeAside && (
            <MobileAside/>
        )}

         
        
      </div>
    </>
  );
};

export default MainLayout;
