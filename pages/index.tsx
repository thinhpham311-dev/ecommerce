import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
      <style jsx>{`
            .header_grid{
              display:grid;
              grid-template-columns:repeat(2,1fr);
              grid-gap: 15px;
            }

            .overlay_content{
              background-image: linear-gradient(to bottom,transparent,rgb(20 21 32 / 0.76));
              padding: 30px;
              width: 100%;
            }

            .header_grid_cell_1{
              grid-row: 1/2;
              grid-column: 1/2;
            }
            
            .header_grid_cell_2{
              grid-row: 2/3;
              grid-column: 1/2;
            }

            .header_grid_cell_3{
              grid-row: 1/3;
              grid-column: 2/3;
            }

            .header_grid_cell_3 img{
              height: 100%;
              object-fit:cover;
            }
          `}
      </style>
      <div className="row g-3">
        <div className="col-6">
          <div className="card text-white h-100 rounded-3">
            <img src="/img/submenu-post_3.jpg" className="card-img h-100" alt="..." />
            <div className="position-absolute bottom-0 overlay_content">
              <h3 className="card-title">Technology is a useful servant but a dangerous master.</h3>
              <small className="card-text">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="header_grid">
            <div className="card text-white header_grid_cell_1 rounded-3">

              <img src="/img/submenu-post_4.jpg" className="card-img" alt="..." />
              <div className="position-absolute bottom-0 overlay_content">
                <h5 className="card-title">Tech really even notice it, so its part of everyday life.</h5>
                <small className="card-text">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card text-white header_grid_cell_2 rounded-3">

              <img src="/img/submenu-post_2.jpg" className="card-img" alt="..." />
              <div className="position-absolute bottom-0 overlay_content">
                <h5 className="card-title">Its not a faith in technology. Its faith in people.</h5>
                <small className="card-text">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card text-white header_grid_cell_3 rounded-3">

              <img src="/img/submenu-post_1.jpg" className="card-img" alt="..." />
              <div className="position-absolute bottom-0 overlay_content">
                <h5 className="card-title">Technology is best when it brings people together.</h5>
                <small className="card-text">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Home
