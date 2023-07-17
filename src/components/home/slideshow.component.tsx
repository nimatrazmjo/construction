"use client";
import React, { useEffect, useState } from 'react';
import Gallery from '../gallery/gallery.component';

const pixabayAccesssKey = process.env.REACT_APP_PIXABAY_ACCESS_KEY || '38150006-45a56e9cb876a61dd48432cba';


const Slideshow: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${pixabayAccesssKey}&q=construction&category=buildings&per_page=10&page=1`)
            .then(response => response.json())
            .then(data => setImages(data.hits.map((hit: any) => hit.largeImageURL)));
    },[]);

    console.log(images, 'images');
    return <Gallery images={images} />;
};

export default Slideshow;