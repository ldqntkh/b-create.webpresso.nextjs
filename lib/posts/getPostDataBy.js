import Axios from 'axios';


const getPostBySlug = async (slug)=> {
    try {
        let url = `https://webpressocontrolpanel.kinsta.cloud/wp-json/wp/v2/posts`;
        let res = await Axios.get(url, {
            params: {
                slug
            }
        })
        
        let data = res.data;
        
        return data[0];
    } catch (err) {
        console.log(err.message)
        return {
            id: slug
        };
    }
}

export default getPostBySlug;