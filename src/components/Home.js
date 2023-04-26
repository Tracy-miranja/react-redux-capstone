import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthAlbum } from "../redux/Homepage/HomesSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSkull,
    faPeopleGroup,
    faChartSimple,
    faMaskFace,
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const dispatch = useDispatch();
  const { album, isLoading } = useSelector((state) => state.album);
  const [search, setSearch] = useState('');
//   const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(fecthAlbum());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }


  const handleSubmit = () => {
    // setValue(search)
    setSearch('')
  }

  return (
    <section>
        <div className="form">
        <form onSubmit={handleSubmit} className="search-box">
            <input  value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Country"/>
            <button type="submit">Search</button>
        </form>
        </div>
      <div className="row">
        {album && album.map((alb) => (
        <button key={alb.Combined_Key} className=" col-4-sm app">
            <div className="icons">
        <p>{alb.Country_Region}</p>
        <p>{alb.Case_Fatality_Ratio}</p>
        </div>
       
        <i className="icon-wrapper">
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        
        </button>
        ))}
      </div>
    </section>
  );
}

export default Home;
