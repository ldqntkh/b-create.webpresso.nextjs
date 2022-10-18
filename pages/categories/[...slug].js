import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { getAllPostsByCat } from '../../lib/posts/getListPosts';

import {getCategoriesSlug} from '../../lib/categories/getListCategories'


export default function Category({ postData }) {
    return (
        <div className="container">
            <Head>
                <title>Danh mục</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h3>Danh sách bài viết</h3>
                <ul>
                    {
                        postData && 
                        postData.map((post)=> {
                            return(
                                <li key={post.id}>
                                    <Link href={`./blogs/${post.slug}`}>
                                        <h3>{post.title.rendered}</h3>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>

            <footer>
                
            </footer>
        </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    let paths = await getCategoriesSlug({
        per_page: 100,
        _fields: 'slug'
    });
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let postData = await getAllPostsByCat(params.slug[0]);
    return {
        props: {
            postData
        }
    }
}