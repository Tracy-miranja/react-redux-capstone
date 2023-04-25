import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fecthAlbum } from "../redux/Homepage/HomesSlice";


function Home() {
    const dispatch = useDispatch();
    const { isLoading, album } = useSelector(state => state.album);

    useEffect(() => {
        dispatch(fecthAlbum(album))
    },[dispatch,album]);
    return (
        <section>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <div>
              <img src={album.data} alt={album.title} />
            </div>
          )}
        </section>
      );
}

export default Home;
