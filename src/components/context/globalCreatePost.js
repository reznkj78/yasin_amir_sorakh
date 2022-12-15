import { createContext } from "react";

export const createPostcontext = createContext({
    openImageCropingModal: false ,
    setopenImageCropingModal: ()=>{},
    imageUploaded :{} ,
     setImageUploaded:()=>{},
     showSingleImageModal:{} ,
     setshowSingleImageModal:()=>{},
     showSurveyModal:false , 
     setSurveyModal:()=>{},
     showTagUserModal:false,
     setTagUserModal:()=>{},
     showAllSurveyModal:false, 
     setshowAllSurveyModal:()=>{},
     showAllLocationModal:false, 
     setShowAllLocationModal:()=>{},
     openAddLocationModal:false, 
     setopenAddLocationModal:()=>{}

})