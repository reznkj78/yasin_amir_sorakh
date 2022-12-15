import React from "react";
import { Route,  Routes } from "react-router";

import Landing from "../components/landing/landingPage";

import MainLayout from "../layouts/mainLayout";

const Menchs = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Landing/>}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/validation-phone-number" element={<SmsCode/>}/>
            <Route path="/init-playGound" element={<InitPlayGround/>}/>
            <Route path="/Explore" element={<Explore/>}/>
            <Route path="/TopPost" element={<TopPost/>}/>
            <Route path="/SavedPost" element={<SavedPosts/>}/>
            <Route path="/Create-post" element={<CreatePostContext><CreatePost/></CreatePostContext> }/> */}
        </Route>
      </Routes>
    </>
  );
};

export default Menchs;
