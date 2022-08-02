import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './components/character';
import Change from './components/change';

const urlCharacter = "https://rickandmortyapi.com/api/character";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  let listids = [];

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };


  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);    
  };

  useEffect(() => {
    fetchCharacters(urlCharacter);
  }, [])

  const localData = (id) => {

    if(localStorage.getItem('ID') === null){
      listids = [0];
    }else{
      listids = JSON.parse(localStorage.getItem('ID'));
    }

    if (listids.indexOf(id) > -1){
      listids = JSON.parse(localStorage.getItem('ID'));
      let i = listids.indexOf(id);
      listids.splice(i, 1);
      console.log(listids);
    }else{
      if(localStorage.getItem('ID') === null){
        listids.push(id);
      }else{
        listids = JSON.parse(localStorage.getItem('ID'));
        listids.push(id);
      }
      // console.log(listids);
      
    }
    console.log(id);
    localStorage.setItem('ID', JSON.stringify(listids));
  }

  return (
    <>
      <section className='main container'>
        <div className='Change-page'>
          <Change previous = {info.prev} next = {info.next} onPrevious = {onPrevious} onNext = {onNext}/>
        </div>
        <div className='cards-container'>
          <Character characters = {characters} characterLiked = {localData} />
        </div>
        <div className='Change-page'>
          <Change previous = {info.prev} next = {info.next} onPrevious = {onPrevious} onNext = {onNext}/>
        </div>
      </section>
    </>
  );
}

export default App;
