import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {getCategories} from '../../lib/categories/getListCategories'

export default function Categories({categories}) {
    return (
        <div className="container">
            <Head>
                <title>Danh mục bài viết</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h3>Danh mục bài viết</h3>
                <ul>
                    {
                        categories && categories.map((cat, index)=> <li key={cat.id}><Link href={`/categories/${cat.slug}`}>{cat.name}</Link></li>)
                    }
                </ul>
            </main>

            <footer>
                
            </footer>
        </div>
    )
}


export async function getStaticProps() {
    let categories = await getCategories({
        per_page: 100
    });
    if( !categories ) return {
        props: {
            categories: null
        }
    }
    return {
        props: {
            categories
        }
    }
}