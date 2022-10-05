import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { getAllPosts } from '../../lib/posts/getListPosts';
import getPostBySlug from '../../lib/posts/getPostDataBy';

export default function Post({postData}) {
    if (!postData) {
        return null
    }
    const router = useRouter();
    
    return (
        <div className="container">
        <Head>
            <title>{postData.title ? postData.title.rendered : ''}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div dangerouslySetInnerHTML={{__html: postData.content ? postData.content.rendered : ''}}></div>
            <button type='button' onClick={()=> router.back() }>Go back</button>
        </main>

        <footer>
            
        </footer>
        </div>
    )
}


export async function getStaticPaths() {
    // Return a list of possible value for id
    let paths = await getAllPosts();
    
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    let postData = await getPostBySlug(params.slug);
    
    if( !postData ) return {
        props: {
            postData: null
        }
    }
    return {
        props: {
            postData: postData
        }
    }
}