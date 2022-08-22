import * as React from 'react';
import styles from '../../styles/Layouts.module.css'
import Link from 'next/link';

export default function ListPosts() {
    const posts = [
        {
            id: 1,
            title: 'Technology is best when it brings people together.',
            image: '/img/submenu-post_1.jpg',
            created: 'October 02, 2021'
        }, {
            id: 2,
            title: 'Its not a faith in technology. Its faith in people.',
            image: '/img/submenu-post_2.jpg',
            created: 'October 02, 2021'
        },
        {
            id: 3,
            title: 'Technology is a useful servant but a dangerous master.',
            image: '/img/submenu-post_3.jpg',
            created: 'October 02, 2021'
        },
        {
            id: 4,
            title: 'Tech really even notice it, so its part of everyday life.',
            image: '/img/submenu-post_4.jpg',
            created: 'October 02, 2021'
        },
    ]
    return (
        <>
            {
                posts.map((post, index) =>

                    <div className={styles.card_posts} key={index}>
                        <div className="row g-0">
                            <div className="col-3">
                                <Link href="">
                                    <a>
                                        <img src={post.image} className="img-fluid rounded" alt="..." />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-9 p-lg-3 p-2">
                                <div className="card-body align-content-center">
                                    <h2 className="card-title mb-1">
                                        <Link href="">
                                            <a>
                                                {post.title}
                                            </a>
                                        </Link>
                                    </h2>
                                    <p className="card-text"><small className="text-muted"><i className="bi bi-clock"></i> {post.created}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    );
}

