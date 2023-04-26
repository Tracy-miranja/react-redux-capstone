import {  useSelector } from "react-redux";

  function Details({ albumId }) {
    const { album } = useSelector((state) => state.album);
    const selectedAlbum = album.find((alb) => alb.Combined_Key === albumId);
  
    return (
      <section>
        <p>Confirmed cases: {selectedAlbum.Confirmed}</p>
        <p>Deaths: {selectedAlbum.Deaths}</p>
        <p>Recovered: {selectedAlbum.Recovered}</p>
      </section>
    );
  }
  

export default Details;