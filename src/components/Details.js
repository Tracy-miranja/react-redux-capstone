import {  useSelector } from "react-redux";

  function Details({ albumId }) {
    const { album } = useSelector((state) => state.album);
    const selectedAlbum = album.find((alb) => alb.Combined_Key === albumId);
  
    return (
      <section>
        <div>Last_Update:{selectedAlbum.Last_Update}</div>
        <div  className="app_details">
            <div className="data">
        <p>Confirmed cases:</p>
            {selectedAlbum.Confirmed}
        </div>
        <div className="data">
        <p>Deaths:</p>
        {selectedAlbum.Deaths}
        </div>
        <div className="data">
        <p>Recovered:</p>
        {selectedAlbum.Recovered}
        </div>
        <div className="data">
        <p>Incident_Rate:</p>
        {selectedAlbum.Incident_Rate}
        </div>
        </div>
      </section>
    );
  }
  

export default Details;