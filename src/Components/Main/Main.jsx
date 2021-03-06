import style from './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ModalInfo from '../ModalInfo/ModalInfo';
import { useState } from 'react'
const Main = ({movie_db}) => {
    const [modalState, setModalState] = useState();
    const [modalInfo, setModalInfo] = useState([]);
  return (
    <div >
    <ModalInfo modalState={modalState} modalInfo={modalInfo} setModalState={setModalState} > </ModalInfo>
    <main className="card-container">
        

        {
            movie_db.map(item=>(
                <article onClick={()=>{
                    setModalState(true);
                    setModalInfo([item.backdrop_path, item.poster_path, item.original_title, item.overview])
                }} className='card-item-movie'>
                <div className='card-item-movie-img'>
                <LazyLoadImage
                    effect='blur'
                    src={item.poster_path}
                    height= "100%"
                    width="100%"
                    
                >
                </LazyLoadImage>

                </div>

                <h3> {item.title} </h3>
                <h5> {item.release_date}</h5>
                </article>
            )) 
        }
        
    </main>
    </div>
)
};


export default Main;