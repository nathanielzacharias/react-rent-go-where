import {Link} from 'react-router-dom'

function SiteHeader() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <figure class="mr-3">
                {/* <img
                    src="https://ibb.co/tLpfxm2"
                 /> */}
                 <figcaption>
                    <a class="navbar-brand" href="#">Rent-Go-Where</a>
                 </figcaption>
            </figure>

    
            </div>
        </nav>
    )
}

export default SiteHeader