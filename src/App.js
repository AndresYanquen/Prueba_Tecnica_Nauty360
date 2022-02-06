import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import { useEffect, useState } from 'react'


function App() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=aa29ab0391c5f175af08933e9165def5'; 
  const urlConfig = 'https://image.tmdb.org/t/p/';
  const [movie_db, setMovie_db] = useState([]);

  
  let dataMovies = ()=>{
    fetch(url).then(response => response.json())
    .then(response => 
      { 
        //console.log(response);
        response.results.map(item=>{
          item.poster_path = `${urlConfig}original/${item.poster_path}`
          item.release_date = item.release_date.substr(0,4);

        })

        setMovie_db(response.results)

      })
  }

  useEffect(() => {
    dataMovies();

  }, []);
  

  return (
    <div className="App">
      <Header> </Header>
      <Main movie_db ={movie_db}> </Main>

    
    </div>
  );
}

export default App;
