import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';


const MainAside = () => {
    const navigate = useNavigate()
    const [location , setlocation] = useState('')

    const pageLocation = useLocation();

    useEffect(()=>{
        setlocation(pageLocation.pathname)
    } , [pageLocation])



    return ( 
        <>
        <ul className='list-unstyled aside-menu' onClick={e=>console.log(location)}>
            <li className={location === "/TopPost" ? "text-center active" :"text-center"} onClick={e=>navigate("/TopPost" , {replace:true})}>
                <div><span class="iconify" data-icon="clarity:star-solid"></span></div>
                <p className='text-muted'>برترین</p>
            </li>
            <li className={location === "/create-post" ? "text-center active" :"text-center"} onClick={e=>navigate("/create-post" , {replace:true})}>
                <div><span class="iconify" data-icon="akar-icons:circle-plus"></span></div>
                <p className='text-muted'>ساخت پست</p>
            </li>
            <li className={location === "/Explore" ? "text-center active" :"text-center"} onClick={e=>navigate("/Explore" , {replace:true})}>
                <div><span class="iconify" data-icon="fluent:search-square-24-regular"></span></div>
                <p className='text-muted'>جدیدترین</p>
            </li>
            <li className={location === "/SavedPost" ? "text-center active" :"text-center"} onClick={e=>navigate("/SavedPost" , {replace:true})}>
                <div><span class="iconify" data-icon="bi:bookmark-fill"></span></div>
                <p className='text-muted'>ذخیره شده</p>
            </li>
            <li className='text-center '>
                <div className='d-flex justify-content-center'><Avatar sx={{backgroundColor:"#d7a202ad"}}/></div>
                <p className='text-muted'>پروفایل</p>
            </li>
            <li className='text-center'>
                <div><span class="iconify" data-icon="ant-design:setting-filled"></span></div>
                <p className='text-muted'>تنظیمات</p>
            </li>
        </ul>
        </>
     );
}
 
export default MainAside ;