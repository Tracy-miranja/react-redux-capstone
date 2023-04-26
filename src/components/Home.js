import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthAlbum } from "../redux/Homepage/HomesSlice";
import Details from "./Details";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSkull,
    faPeopleGroup,
    faChartSimple,
    faMaskFace,
    faArrowRight,
    faArrowLeft,
  } from '@fortawesome/free-solid-svg-icons';

  function Home() {
    const dispatch = useDispatch();
    const { album, isLoading } = useSelector((state) => state.album);
    const [search, setSearch] = useState("");
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
      <section>
        {selectedAlbumId ? (
          <div>
            <button onClick={handleResetSelection}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <Details albumId={selectedAlbumId} />
          </div>
        ) : (
          <div>
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
            <div className="row">
              {album
                .filter((album) =>
                  album.Country_Region.toLowerCase().includes(search)
                )
                .map((alb) => (
                  <button
                    key={alb.Combined_Key}
                    className=" col-4-sm app"
                    onClick={() => handleSelectAlbum(alb.Combined_Key)}
                  >
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
          </div>
        )}
      </section>
    );
  }
  

export default Home;
