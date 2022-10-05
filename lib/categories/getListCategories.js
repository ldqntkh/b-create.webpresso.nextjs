import Axios from 'axios';


const getCategories = async (options = {
    per_page: 10
})=> {
    try {
        let url = `https://webpressocontrolpanel.kinsta.cloud/wp-json/wp/v2/categories`;
        
        let res = await Axios.get(url, {
            params: {
                per_page: options.per_page
            }
        })
        let data = res.data;
        return data;
    } catch (err) {
        return null
    }
}

const getCategoriesSlug = async (options = {
    per_page: 10
})=> {
    try {
        let url = `https://webpressocontrolpanel.kinsta.cloud/wp-json/wp/v2/categories`;
        
        let res = await Axios.get(url, {
            params: options
        })
        let data = res.data;
        
        return data.map((cat)=> {
            return {
                params: {
                    slug: [cat.slug]
                }
            }
        })
    } catch (err) {
        return null
    }
}


export {
    getCategories,
    getCategoriesSlug
}