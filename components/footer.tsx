import * as React from 'react';
import styles from '../styles/Layouts.module.css'
import Link from 'next/link';
import ListPosts from './posts/listview'

export default function Header() {
  return (
    <>
      <footer className={styles.footer}>
        <div className='container'>
          <div className='row g-0'>
            <div className='col-12 col-md-12 col-lg-4 pe-lg-5 py-lg-4 py-3'>
              <h3 className="mb-4">Hot Posts</h3>
              <ListPosts />
            </div>
            <div className='col-12 col-md-12 col-lg-4 pe-lg-5 py-lg-4 py-3'>
              <h3 className='mb-4'>Labels</h3>
              <ul className={styles.footer_taxonomies}>
                <li className="mb-3">
                  <Link href="">
                    <a className='d-flex justify-content-between text-decoration-none'>Gadgets
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>Laptop
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>LifeStyle
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>Story
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>Tech
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>Travel
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                  <a className='d-flex justify-content-between text-decoration-none'>Trends
                      <span>(3)</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={styles.footer_search}>
                <h3 className='mb-3'>Search this blog</h3>
                <div className="input-group">
                  <input type="text" className="form-control rounded-1" style={{'height': '40px'}} placeholder="Search this blog" aria-label="Recipient's username with two button addons"/>
                  <button className={styles.footer_btnsearch} type="button">Search</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-4  py-lg-4 py-3'>
            <h3 className="mb-4">Most Recent</h3>
              <div className={styles.footer_recent}>
                <ul>
                  <li>
                    <Link href="">
                      <a className='text-decoration-none fw-bold'>Technology is a useful servant but a dangerous master.</a>
                    </Link>
                    <span className="text-white fw-bold"> October 02, 2021</span>
                  </li>
                  <li>
                    <Link href="">
                      <a className='text-decoration-none fw-bold'>Tech really even notice it, so it part of everyday life notice it, so it part of everyday life notice it, so it part of everyday life.</a>
                    </Link>
                    <span className="text-white fw-bold"> October 02, 2021</span>
                  </li>
                  <li>
                    <Link href="">
                      <a className='text-decoration-none fw-bold'>It not a faith in technology. It faith in people.</a>
                    </Link>
                     <span className="text-white fw-bold"> October 02, 2021</span>
                  </li>
                  <li>
                    <Link href="">
                      <a className='text-decoration-none fw-bold'>Technology is best when it brings people together.</a>
                    </Link>
                     <span className="text-white fw-bold"> October 02, 2021</span>
                  </li>
                  <li>
                    <Link href="">
                      <a className='text-decoration-none fw-bold'>Once a new technology rolls over you to get Achieve.</a>
                    </Link>
                     <span className="text-white fw-bold"> October 02, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer_ownwercopyright}>
        <div className='container d-flex align-items-center justify-content-between'>
        <div>
          <strong>Copyright SEO</strong>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>  
          </li>  
          <li>
            <Link href="/">
              <a>
                About
              </a>
            </Link>  
          </li>  
          <li>
            <Link href="/">
              <a>
                Contact Us
              </a>
            </Link>  
          </li>  
          <li>
            <Link href="/">
              <a>
                Privacy Policy
              </a>
            </Link>  
          </li>  
        </ul>
        </div>
      </div>
    </>
  );
}
