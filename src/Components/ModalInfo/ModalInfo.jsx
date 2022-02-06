import React from 'react';
import style from './style.css';
import {AiOutlineFullscreenExit,AiOutlineCloseSquare,AiFillCaretUp,AiFillHeart,AiFillEyeInvisible } from "react-icons/ai";
import { ModelButton } from './ModelButton/ModelButton';
import { ModelButtonDropdown } from './ModelButtonDropdown/ModelButtonDropdown'
import { ModelResolution } from './ModelResolution/ModelResolution'

const ModalInfo = ({modalState, modalInfo,setModalState }) => {
    const urlConfig = 'https://image.tmdb.org/t/p/';
  return (
    
    <div className={`${modalState? 'showModal' : 'hideModal'} ` }>
        <img src={`${urlConfig}original/${modalInfo[0]}`} alt="" className='image-background'  />
        <div className='container-modal'>
            <article className='icon-quit' >
                <AiOutlineFullscreenExit onClick={()=>setModalState(false)} ></AiOutlineFullscreenExit>
            </article>
            <section className='container-modal__poster'>
                <img src={`${modalInfo[1]}`} alt="" className='poster-image'/>
            </section>
            <section className='description-movie description'>
                <div>
                <article className='title-movie'>     
                    <h2> {modalInfo[2]}</h2>
                </article>
                <article className='description_movie'>
                    <h4> {modalInfo[3]}</h4>
                </article>
                </div> 


                <section className='container_button'> 
                <div className='icons-movie'>
                    <div className='icons-movie___favorites'>
                        <AiFillHeart></AiFillHeart>
                        <p>Añadir a favoritos</p>
                    </div>
                    <div className='icons-movie__nowatched'>
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                        <p>No visto</p>
                    </div>
                
                </div>
                <div className='options-bottom'>
                
                <ModelButtonDropdown></ModelButtonDropdown>
                <ModelButton onClick={()=> console.log("Me presionaste")} textButton={"Ver trailer"} width={"80px"} height={"40px"}></ModelButton>
                <ModelButton onClick={()=> console.log("Me presionaste")} textButton={"Descargar"} width={"80px"} height={"40px"}></ModelButton>

                <ModelResolution res={"720p"}></ModelResolution>
                <ModelResolution res={"1080p"}></ModelResolution>
                <ModelResolution res={"2160p"}></ModelResolution>
                </div>
                <article className='class-language'>
                    <div className='class-language__options'>
                        <div>
                            <p>Subtitle</p>
                        </div>
                        <div className='class-language__size-icon class_icons'>
                            <AiOutlineCloseSquare></AiOutlineCloseSquare>
                            <div id='icon-menu'>
                                <AiFillCaretUp> </AiFillCaretUp>    
                            </div>
                        </div>
                    </div>    
                    <div className='class-language__options'>
                        <div>
                            <p>Audio Language</p>
                        </div>
                        <div className='class_icons font-icon'>
                            <img src="/icons/reinounido.png" alt="" />
                            <AiFillCaretUp></AiFillCaretUp>
                        </div>
                    </div>
                
                </article>
                </section>
            </section>
        </div>
    </div>
  );
  }
export default ModalInfo;
