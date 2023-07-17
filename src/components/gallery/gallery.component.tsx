import { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const changeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const prevImage = () => {
    if (currentImageIndex === 0) return;
    changeImage(currentImageIndex - 1);
  };

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) return;
    changeImage(currentImageIndex + 1);
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <div className="w-full h-[60vh] relative group">
      <div
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        key={images[currentImageIndex]}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
         <div className="w-full h-full flex  justify-center items-center backdropFilter-blur">
                <span className="text-white text-4xl w-1/2 text-center">Here is an example of black overlay on an image</span>
        </div>
      </div>

       <svg
         onClick={prevImage}
       className={`${
        isFirstImage ? 'disabled' : ''
      } hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"></path></svg>
      <svg
       onClick={nextImage}
       className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"

       xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>

    </div>
  );
};

export default Gallery;
