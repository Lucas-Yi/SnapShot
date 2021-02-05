import React, { useState, useEffect } from 'react'
import useFetch from '../utility/useFetch'
import apiKey from '../config/apiKey'
import Gallery from './Gallery'
import Loader from './Loader'

const Container = ({searchTerm})=>{
    const [images, setImages] = useState([])
    const { loading, get } = useFetch("https://api.flickr.com/services/rest/")

    useEffect(()=>{
        get(`?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
        .then(data=>setImages(data.photos.photo))
        .catch(error=>console.log(error))
    }, [])

    return <div>
        {loading ? <Loader /> : <Gallery data={images} />}
    </div>
}

export default Container