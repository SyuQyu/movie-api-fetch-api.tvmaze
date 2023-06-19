import React, { useState } from 'react';
import { FetchFilm } from '../services/fetch';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const MainPage = () => {
  const shows = FetchFilm();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleSlideLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="my-10">
      <h1 className="text-white font-bold text-lg my-2 ml-2">Girls Movie</h1>

      <Splide
        options={{
          rewind: true,
          drag: 'free',
          gap: 20,
          perPage: 7,
          perMove: 1,
          autoScroll: {
            speed: 1,
          },
          pagination: false,
        }}
      >
        {shows.map((show, index) => (
          <SplideSlide>
            <figure className="relative max-w-sm">
              <a href={show.show.officialSite}
                className="transition-all duration-300 cursor-pointer blur-none hover:blur-sm"
                key={index}
                onMouseEnter={() => handleSlideEnter(show.show.id)}
                onMouseLeave={handleSlideLeave}
              >
                <img className="object-cover h-96" src={show.show.image.original} alt={show.show.name} />
              </a>
              {hoveredIndex === show.show.id && (
                <figcaption
                  className="absolute px-4 bottom-6"
                  onMouseEnter={() => handleSlideEnter(show.show.id)}
                  onMouseLeave={handleSlideLeave}
                >
                  <div className="center block select-none whitespace-nowrap rounded-lg bg-gray-900 py-2 px-3.5 mx-1 my-1 align-baseline font-sans text-xs uppercase leading-none text-white">
                    <p className="text-lg font-semibold text-white">{show.show.name}</p>
                  </div>
                  {
                    show.show.genres?.map((genres: any) => (
                      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-900 py-2 px-3.5 mx-1 my-1 align-baseline font-sans text-xs uppercase leading-none text-white">
                        {genres}
                      </div>
                    ))
                  }
                </figcaption>
              )}
            </figure>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MainPage;
