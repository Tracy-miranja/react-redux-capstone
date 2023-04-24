import { Link } from "react-router-dom";

function Links(){
    return(
<>
    <nav className="navbar navbar-expand ps-4 pe-4">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <h1 className="ms-3 pt-2">Air pollution</h1>
        </Link>
        <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item pe-3">
              <Link className="nav-link" aria-current="page" to="/">Homepage</Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link" aria-current="page" to="/Details">Details</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
    )
}

export default Links;