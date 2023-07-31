import { useState, useEffect } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | ''>('');
  const [autoNext, setAutoNext] = useState<boolean>(true); // State to control auto-next
  const AUTO_NEXT_DELAY = 3000; // Delay in milliseconds for auto-next (adjust as needed)

  const changeImage = (index: number, direction: 'left' | 'right') => {
    setCurrentImageIndex(index);
    setTransitionDirection(direction);
  };

  const prevImage = () => {
    if (currentImageIndex === 0) return;
    changeImage(currentImageIndex - 1, 'left');
  };

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) return;
    changeImage(currentImageIndex + 1, 'right');
  };

  // Function to start auto-next
  const startAutoNext = () => {
    setAutoNext(true);
  };

  // Function to stop auto-next
  const stopAutoNext = () => {
    setAutoNext(false);
  };

  useEffect(() => {
    let autoNextTimeout: NodeJS.Timeout | null = null;

    // Auto-next logic
    if (autoNext) {
      autoNextTimeout = setTimeout(() => {
        if (currentImageIndex === images.length - 1) {
          setCurrentImageIndex(0);
          setTransitionDirection('right');
        } else {
          nextImage();
        }
      }, AUTO_NEXT_DELAY);
    }

    return () => {
      // Clear the auto-next timeout when the component is unmounted or autoNext is disabled.
      if (autoNextTimeout) clearTimeout(autoNextTimeout);
    };
  }, [currentImageIndex, autoNext]);

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <div className="w-full h-[50rem] relative group" id='home'>
      <div
        className="w-full h-full relative overflow-hidden"
        onMouseEnter={stopAutoNext} // Stop auto-next on hover
        onMouseLeave={startAutoNext} // Start auto-next when not hovering
      >
        {images.map((imageUrl, index) => (
          <div
            key={imageUrl}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateX(calc(${(index - currentImageIndex) * 100}% + ${transitionDirection === 'left' ? '-' : transitionDirection === 'right' ? '+' : '0'}0px))`,
              transition: 'transform 0.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
          </div>
        ))}
      </div>

      <svg
        onClick={prevImage}
        className={`${isFirstImage ? 'disabled' : ''} hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/100 text-white cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        ></path>
      </svg>
      <svg
        onClick={nextImage}
        className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/100 text-white cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
        ></path>
      </svg>
      {/* Button to start gallery from the first image */}

    </div>
  );
};

export default Gallery;
