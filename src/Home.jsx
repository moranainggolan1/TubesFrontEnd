import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div><div>
    <div className="hero_area">
      {/* header section strats */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                Mora
              </span>
            </a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/tabel' className='nav-link'>Table</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                    </li>
                </ul>
              </div>
            </div>
            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
            </form>
          </nav>
        </div>
      </header>
      {/* end header section */}
      {/* slider section */}
      <section className=" slider_section position-relative">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img src="images/slider-img.jpg" alt="" className />
                        </div>
                      </div>
                    </div>
                    <div className="detail-box">
                        <div>
                          <h1>
                            Ohayou <br />
                            <span>
                              Mora!
                            </span>
                          </h1>
                          <p>
                            This is a website that shows table of Indonesian Heroes
                          </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img src="images/slider-img.jpg" alt="" className />
                        </div>
                      </div>
                    </div>
                        <div className="detail-box">
                        <div>
                          <h1>
                            Ohayou <br />
                            <span>
                              Mora!
                            </span>
                          </h1>
                          <p>
                            This is a website that shows table of Indonesian Heroes
                          </p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img src="images/slider-img.jpg" alt="" className />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div>
                          <h1>
                            Heustonn <br />
                            Maintenance <br />
                            <span>
                              Service
                            </span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             </section>
      {/* end slider section */}
    </div>
    <div className="bg">
    </div></div>
  
</div>
  )
}
