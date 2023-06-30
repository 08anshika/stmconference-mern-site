import React from 'react'
import './Slider.css';

const Slider = () => {
  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="d-block w-100" alt="banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className='sf'>Conference</h1>
              <p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world.</p>
              <div className="b1 d-flex justify-content-center">

              </div>



            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/1393241.jpg" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className='sf'>Conference</h1>
              <p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world.</p>



            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpapercave.com/wp/wp8529707.jpg" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Conference</h1>
              <p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world.</p>


            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Slider