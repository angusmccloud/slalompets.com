import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../../components';
import { PhotoGrid } from '../../containers';
import { getAllImages } from '../../services';

const HomePage = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const loadAllImages = async () => {
            const imageData = await getAllImages();
            if (imageData) {
                setImages(imageData);
            };
        }

        loadAllImages();
    }, []);

    console.log('-- IMAGES --', images);
    return (
        <PageWrapper pageName='Slalom Pets'>
            <PhotoGrid images={images} />
            {images.length}
        </PageWrapper>
    );
}

export default HomePage;
