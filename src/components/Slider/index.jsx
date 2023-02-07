import { useEffect, useState } from 'react';

const defaultSlides = [
  'https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function Slider() {
  const [slides, setSlides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // TIMER PLACE
  });

  useEffect(() => {
    // DOWNLOAD PLACE
  }, []);

  return (
    <div className="sliderContainer">
      <img src={slides[currentSlide]} alt="slide" />
    </div>
  );
}

export default Slider;
