import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSkull,
    faPeopleGroup,
    faChartSimple,
    faMaskFace,
  } from '@fortawesome/free-solid-svg-icons';
import {  useSelector } from "react-redux";
import { useState } from 'react';

  function Details({ albumId }) {
    const { album } = useSelector((state) => state.album);
    const selectedAlbum = album.find((alb) => alb.Combined_Key === albumId);
    const [search, setSearch] = useState("");
  
    return (
      <section>
          <div className="nav_bar">
            <div className="box1">
            {/* <img src={logo} alt={logo} className="logo"/> */}
                <h1 className="ms-3 pt-2 "> COVID-19 TRACKER</h1>
                </div>
            <div className="form">
              <form className="search-box">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Country"
                />
                <button type="submit">Search</button>
              </form>
            </div>
            </div>
            <div className="map">
                <div>
                <h1>Global Covid-19 Record (2020-Now)</h1>
                </div>
            </div>
        <div>{selectedAlbum.Country_Region}: {selectedAlbum.Last_Update}</div>
        <div  className="app_details">
            <div className="data">
            <FontAwesomeIcon icon={ faMaskFace} />
        <p>Confirmed cases:</p>
            <p className='confy'>{selectedAlbum.Confirmed} </p>
        </div>
        <div className="data">
        <FontAwesomeIcon icon={ faSkull}/>
        <p> Deaths:</p>
        <p className='confy'>{selectedAlbum.Deaths} </p>
        </div>
        <div className="data">
        <FontAwesomeIcon icon={ faPeopleGroup}/>
        <p> Recovered:</p>
        <p className='confy'>{selectedAlbum.Recovered}</p>
        </div>
        <div className="data">
        <FontAwesomeIcon icon={ faChartSimple}/>
        <p> Incident_Rate:</p>
        <p className='confy'>{selectedAlbum.Incident_Rate}</p>
        </div>
        </div>
      </section>
    );
  }
  

export default Details;