import React from 'react';
import {AiFillPlayCircle, AiFillCaretUp} from "react-icons/ai";
import style from './style.css'

export const ModelButtonDropdown = () => {
  return (
      <article className='main_button'> 
          <div className='text-style'> 
            <p >Ver ahora</p>
          </div>
          <div className='icons-style'> 
                <AiFillPlayCircle className='icons-style__playcircule'></AiFillPlayCircle>
                <div className='center-icon'>
                    <AiFillCaretUp className='icons-style__dropdown'></AiFillCaretUp>
                </div>
            </div>
      </article>
  );
};
