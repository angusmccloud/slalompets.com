import React, { useState, useEffect } from 'react';
import './PhotoGridStyles.css';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const PhotoGrid = (props) => {
  const { images } = props;
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = images.filter(image => {
      return image.caption.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredImages(filtered);
  };
  
  useEffect(() => {
    setFilteredImages(images);
  }, [images]);

  return (
    <>
      <div style={{paddingTop: 10, alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, paddingLeft: '20%', paddingRight: '20%'}}>
        <TextField id="searchInput" label="Search Images" variant="outlined" fullWidth onChange={handleSearchChange} value={searchTerm} />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {filteredImages.map((item) => (
            <ImageListItem key={item.imageUrl} style={{ margin: 5 }}>
              <img
                src={item.imageUrl}
                srcSet={item.imageUrl}
                alt={item.caption}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.caption}
                position="top"
                actionPosition="left"
              />
            </ImageListItem>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default PhotoGrid;
