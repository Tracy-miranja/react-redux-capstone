import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { fecthAlbum } from '../redux/Homepage/HomesSlice';
import Details from './Details';

function Home() {
  const dispatch = useDispatch();
  const { album, isLoading } = useSelector((state) => state.album);
  const [search, setSearch] = useState('');
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    dispatch(fecthAlbum());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const handleSelectAlbum = (albumId) => {
    setSelectedAlbumId(albumId);
  };

  const handleResetSelection = () => {
    setSelectedAlbumId(null);
  };

  return (
    <section className="container">
      {selectedAlbumId ? (
        <div>
          <button type="button" onClick={handleResetSelection} aria-label="Go back"><FontAwesomeIcon icon={faArrowLeft} /></button>
          <Details albumId={selectedAlbumId} />
        </div>
      ) : (
        <div>
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
          <div className="row">
            {album
              .filter((album) => album.Country_Region.toLowerCase().includes(search))
              .map((alb) => (
                <button
                  type="button"
                  key={alb.Combined_Key}
                  className=" col-4-sm app"
                  onClick={() => handleSelectAlbum(alb.Combined_Key)}
                >
                  <div className="icons">
                    <p>{alb.Country_Region}</p>
                    <p className="confy">{alb.Confirmed}</p>
                  </div>
                  <i className="icon-wrapper">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </button>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
