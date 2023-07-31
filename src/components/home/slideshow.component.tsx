"use client";
import React, { useEffect, useState } from 'react';
import Gallery from '../gallery/gallery.component';

const pixabayAccesssKey = process.env.REACT_APP_PIXABAY_ACCESS_KEY || '38150006-45a56e9cb876a61dd48432cba';


const Slideshow: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch(`/slideshow.json`)
            .then(response => response.json())
            .then(data => setImages(data.map((image: any) =>  image.path)));
    },[]);
    return <Gallery images={images} />;
};

export default Slideshow;