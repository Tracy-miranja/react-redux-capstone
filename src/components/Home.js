import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthAlbum } from "../redux/Homepage/HomesSlice";

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
        <div key={alb.Combined_Key} className=" col-4-sm app">
        <p>{alb.Country_Region}</p>
        <p>{alb.Case_Fatality_Ratio}</p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
