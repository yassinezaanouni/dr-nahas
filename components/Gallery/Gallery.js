import Treatment from "../Index/Treatment/Treatment";
import Testimonial from "../Testimonial/Testimonial";
import { GalleryPhotos } from "./GalleryPhotos";
import Moments from "./Moments";
import ShareLove from "./ShareLove";
const Gallery = () => {
  return (
    <>
      <GalleryPhotos />
      <Moments />
      <Treatment isVideo={false} />
      <ShareLove />
    </>
  );
};

export default Gallery;
