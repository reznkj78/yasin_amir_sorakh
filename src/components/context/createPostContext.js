import React, { useState } from 'react';
import {createPostcontext} from "./globalCreatePost"


const CreatePostContext = (prop)=>{
    const [openImageCropingModal , setopenImageCropingModal] = useState(false)
    const [imageUploaded , setImageUploaded] = useState({
            src:"",
            data:{}  
    })

    const [showSingleImageModal , setshowSingleImageModal] = useState({
        src:"",
        status:false
    })

    const [showSurveyModal , setSurveyModal] = useState(false)
    const [showTagUserModal, setTagUserModal] = useState(false)
    const [showAllSurveyModal, setshowAllSurveyModal] = useState(false)
    const [showAllLocationModal, setShowAllLocationModal] = useState(false)
    const [openAddLocationModal , setopenAddLocationModal] = useState(false)


    return(
        <createPostcontext.Provider value={{
            openImageCropingModal , 
            setopenImageCropingModal,
            imageUploaded , 
            setImageUploaded,
            showSingleImageModal ,
             setshowSingleImageModal,
             showSurveyModal , 
             setSurveyModal,
             showTagUserModal, 
             setTagUserModal,
             showAllSurveyModal, 
             setshowAllSurveyModal,
             showAllLocationModal, 
             setShowAllLocationModal,
             openAddLocationModal , 
             setopenAddLocationModal
        }}>

            {prop.children}
        </createPostcontext.Provider>
    )
}

export default CreatePostContext;