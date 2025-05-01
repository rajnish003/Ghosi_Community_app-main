import React, { useEffect, useRef } from 'react';

const InfiniteImageScroller = ({ images, speed = 0.5 }) => {
  const scrollerRef = useRef(null);
  const animationFrameId = useRef(null);

  const duplicatedImages = [...images, ...images]; // For seamless loop

  useEffect(() => {
    const scroller = scrollerRef.current;
    let scrollPosition = 0;
    let lastTimestamp = performance.now();

    const scroll = (timestamp) => {
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (scroller && scroller.scrollWidth > scroller.clientWidth) {
        scrollPosition += speed * deltaTime;

        if (scrollPosition >= scroller.scrollWidth / 2) {
          scrollPosition = 0;
          scroller.scrollLeft = 0;
        } else {
          scroller.scrollLeft = scrollPosition;
        }
      }

      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [duplicatedImages, speed]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={scrollerRef}
        className="flex gap-4 py-4 w-max"
        style={{ whiteSpace: 'nowrap' }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={`${index}-${image.src}`} className="flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt || ''}
              className="h-48 w-48 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const ImageScroller = () => {
  const sampleImages = [
    { src: 'https://source.unsplash.com/random/300x300?nature=1', alt: 'Nature 1' },
    { src: 'https://source.unsplash.com/random/300x300?nature=2', alt: 'Nature 2' },
    { src: 'https://source.unsplash.com/random/300x300?nature=3', alt: 'Nature 3' },
    { src: 'https://source.unsplash.com/random/300x300?nature=4', alt: 'Nature 4' },
    { src: 'https://source.unsplash.com/random/300x300?nature=5', alt: 'Nature 5' },
    { src: 'https://source.unsplash.com/random/300x300?nature=6', alt: 'Nature 6' },
    { src: 'https://source.unsplash.com/random/300x300?nature=7', alt: 'Nature 7' },
    { src: 'https://source.unsplash.com/random/300x300?nature=8', alt: 'Nature 8' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Infinite Image Scroller</h1>
      <InfiniteImageScroller images={sampleImages} speed={0.3} />
    </div>
  );
};

export default ImageScroller;
