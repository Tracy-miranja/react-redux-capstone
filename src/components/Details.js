import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSkull,
    faPeopleGroup,
    faChartSimple,
    faMaskFace,
  } from '@fortawesome/free-solid-svg-icons';
import {  useSelector } from "react-redux";


  function Details({ albumId }) {
    const { album } = useSelector((state) => state.album);
    const selectedAlbum = album.find((alb) => alb.Combined_Key === albumId);
  
    return (
      <section>
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