import Axios from "axios";

import db from '../dynamodb/db';

const getAllPosts = async ()=> {
    try {
        // try get data here
        var params = {
            TableName: 'WP-posts',
            Key: {
                "ID": 1
            }
        };
        
        db.get(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // send the json response from the callback
                console.log(data.Item)
            }
        });
        
        let response = await Axios.get( `https://webpressocontrolpanel.kinsta.cloud/wp-json/wp/v2/posts?_fields=slug` );
        const responseSlug = response.data.map((post)=> {
            return {
                params: {
                    slug: post.slug
                }
            }
        });
        
        return responseSlug;
    } catch (err) {
        return []
    }
}

const getAllPostsByCat = async( catSlugs, options={} )=> {
    try {
        let url = `https://webpressocontrolpanel.kinsta.cloud/wp-json/wp/v2/posts`;
        
        let response = await Axios.get(url, {
            params : {
                category_slug: catSlugs,
                ...options
            }
        });
        
        return response.data
    } catch (err) {
        return []
    }
}

export {
    getAllPosts,
    getAllPostsByCat
}