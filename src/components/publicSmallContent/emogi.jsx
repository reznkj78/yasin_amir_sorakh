import React from 'react'
import Picker from 'emoji-picker-react';


const Emogi = ({text , setText , setOpenEmoji}) => {

    const onEmojiClick = (event, emojiObject) => {
        setText(text+emojiObject.emoji)
        console.log(text+emojiObject.emoji)
      };

    return ( 
        <>
        <div className=' w-100 position-absolute  ' style={{zIndex:"99"}}>
          <button  onClick={e=>setOpenEmoji(false)} className=' btn btn-light w-100 my-1'>بستن</button>
          <Picker pickerStyle={{width:"100%" }} onEmojiClick={onEmojiClick}/>
        </div>
        </>
     );
}
 
export default Emogi;