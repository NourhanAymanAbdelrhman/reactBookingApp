import React from "react"
import "./Navbar.css"
import * as Icon from 'react-bootstrap-icons';
const Navbar=()=>{
  return(
    < div className="continer-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-iconNav"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <Icon.Globe className="iconNav" /> English
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <Icon.Moon
              className="iconNav"
            />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <Icon.FullscreenExit className="iconNav" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">
          <Icon.Bell className="iconNav" />
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link ">
          <Icon.List className="iconNav" />
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link ">
          <Icon.ChatLeft className="iconNav" />
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link ">
          <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </a>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn " type="submit">
        <Icon.Search className="iconNav" />
        </button>
      </form>
    </div>
  
</nav>
    </div>
  ); 
}

export default Navbar