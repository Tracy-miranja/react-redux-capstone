import {  useSelector } from "react-redux";

  function Details({ albumId }) {
    const { album } = useSelector((state) => state.album);
    const selectedAlbum = album.find((alb) => alb.Combined_Key === albumId);
  
    return (
      <section>
        <div>Last_Update:{selectedAlbum.Last_Update}</div>
        <div  className="app_details">
            <div>
        <p>Confirmed cases: {selectedAlbum.Confirmed}</p>
        </div>
        <div>
        <p>Deaths: {selectedAlbum.Deaths}</p>
        </div>
        <div>
        <p>Recovered: {selectedAlbum.Recovered}</p>
        </div>
        <div>
        <p>Incident_Rate: {selectedAlbum.Incident_Rate}</p>
        </div>
        </div>
      </section>
    );
  }
  

export default Details;