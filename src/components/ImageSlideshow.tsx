import  { useState, useEffect } from 'react';
import img1 from '../assets/img_1.jpeg'; 
import img2 from '../assets/img_2.jpeg';
import img3 from '../assets/img_3.jpeg';
import img4 from '../assets/img_4.jpeg';
import img5 from '../assets/img_5.jpeg';
import img6 from '../assets/img_6.jpeg';
import img7 from '../assets/img_7.jpeg';
import img8 from '../assets/img_8.jpeg';

const images = [
  {
    url: img1,
     caption: 'Water Management'
  },
  {
    url: img2,
    caption: 'Green Building'
  },
  {
    url: img3,
    caption: 'Modern Architecture'
  },
  {
    url: img4,
    caption: 'Modern Equipment'
  },
  {
    url: img5,
    caption: 'Modern Architecture'
  },
  {
    url: img6,
    caption: 'Modern Equipment'
  },
  {
    url: img7,
    caption: 'Modern Equipment'
  },
  {
    url: img8,
    caption: 'Modern Equipment'
  },
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }} 
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xl font-semibold">{image.caption}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
