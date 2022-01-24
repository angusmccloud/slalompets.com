import './PhotoGridStyles.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const PhotoGrid = (props) => {
  const { images } = props;
  return (
    // <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={12}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
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
      </ImageList>
    // </Box>
  );
}

export default PhotoGrid;
