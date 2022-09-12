import {Link} from 'react-router-dom'

function SiteHeader({props}) {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rent-Go-Where</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Favourite</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Potential Housemate</a>
              </li>
            
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Register</a>
              </li>
              <li className="nav-item my-2 my-lg-0">

                <Link to="/api/v1/auth/login" className="nav-link active mr-sm-2" aria-current="page" >Login</Link>

              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default SiteHeader