import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/Layouts.module.css'


export default function Header() {
    const menu = [
        {
            id: 1,
            name: 'Home',
            link: '/',
            color: '#6903f5',
            submenu: null
        },
        {
            id: 2,
            name: 'Mega Menu',
            link: '#',
            color: '#8500c2',
            submenu: {
                type: 'mega',
                child: [
                    {
                        id: 1,
                        image: '/img/submenu-post_1.jpg',
                        title: 'Bài viết 1',
                        subchild: null,
                        created: '18/8/2022'
                    },
                    {
                        id: 2,
                        image: '/img/submenu-post_2.jpg',
                        title: 'Bài viết 2',
                        subchild: null,
                        created: '18/8/2022'
                    },
                    {
                        id: 3,
                        image: '/img/submenu-post_3.jpg',
                        title: 'Bài viết 3',
                        subchild: null,
                        created: '18/8/2022'
                    },
                    {
                        id: 4,
                        image: '/img/submenu-post_4.jpg',
                        title: 'Bài viết 4',
                        subchild: null,
                        created: '18/8/2022'
                    },
                    {
                        id: 5,
                        image: '/img/submenu-post_5.jpg',
                        title: 'Bài viết 5',
                        subchild: null,
                        created: '18/8/2022'
                    }
                ]
            }
        },
        {
            id: 3,
            name: 'Features',
            link: '/features',
            color: '#ac1990',
            submenu: {
                type: 'taxonomies',
                child: [
                    {
                        id: 1,
                        image: null,
                        title: 'Tiêu đề 1',
                        subchild: null,
                        color: '#6903f5',
                        created: '18/8/2022'
                    },
                    {
                        id: 2,
                        image: null,
                        title: 'Tiêu đề 2',
                        subchild: [
                            {
                                id: 1,
                                title: 'Tiêu đề submeneu 1',
                            },
                            {
                                id: 2,
                                title: 'Tiêu đề submeneu 2',
                            },
                            {
                                id: 3,
                                title: 'Tiêu đề submeneu 3',
                            },
                        ],
                        color: '#8500c2',
                        created: '18/8/2022'
                    }
                ]
            }
        },
        {
            id: 4,
            name: 'Documentation',
            link: '/document',
            color: '#c5256e',
            submenu: null
        },
        {
            id: 5,
            name: 'ShortCodes',
            link: '/shortcode',
            color: '#e64c33',
            submenu: null
        },
        {
            id: 6,
            name: 'Download This',
            link: '/download',
            color: '#f57607',
            submenu: null
        },
    ]


    return (
        <>

            <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className='row'>
                    <div className='col-12'>
                        <div className={styles.menu_top}>
                            <div className={styles.format_date}>
                                <p className='mb-0'><i className="bi bi-clock-fill"></i> August 18, 2022</p>
                            </div>
                            <div className={styles.menu_header}>
                                <ul className='d-flex'>
                                    <li className=''>
                                        <Link href="">
                                            <a> About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a> Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a> Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 '>
                        <div className={styles.header_room}>
                            <div className={styles.logo}>
                                <img src='/img/seo-logo.png' />
                            </div>
                            <div className='social'>
                                <ul className='d-flex mb-0'>
                                    <li className='list-group-item'>
                                        <Link href="">
                                            <a><i className="bi bi-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link href="">
                                            <a><i className="bi bi-whatsapp"></i></a>
                                        </Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link href="">
                                            <a><i className="bi bi-telegram"></i></a>
                                        </Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link href="">
                                            <a><i className="bi bi-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link href="">
                                            <a><i className="bi bi-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg py-0 sticky-top top-0">
                <div className='container'>

                    <div className={styles.header_menu_mega}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    menu.map((items, index) => {
                                        return (
                                            <li style={{ 'background': items.color }} key={index}>
                                                <Link href={items.link}>
                                                    <a className="nav-link active" >{items.name}</a>
                                                </Link>
                                                <div className={styles.dropdown_menu}>
                                                    <div className='submenu'>
                                                       
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className={styles.menu_right}>
                            <div className='mega-mode'>
                                <input type="checkbox" id="dark_mode" hidden />
                                <label htmlFor='dark_mode'></label>
                            </div>
                            <div className='bg-search'>
                                <button className={styles.search_btn}><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}
