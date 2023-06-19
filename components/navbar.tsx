import React, { useState, useEffect } from 'react';
import { searchFilm } from '@/services/fetch';

const Navbar = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [movieName, setMovieName] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Show[] = await searchFilm(movieName);
                setShows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [movieName]);

    return (
        <nav id="header" className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-1 py-3">
                <div className="order-1 md:order-2">
                    <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-white text-xl " href="#">
                        Campflix
                    </a>
                </div>

                <div className="order-2 md:order-3 flex items-center" id="nav-content">
                    <div className="relative mx-2">
                        <input
                            type="search"
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            id="exampleSearch"
                            onChange={(e) => setMovieName(e.target.value)}
                            placeholder="Enter movie name"
                        />
                        {shows.length > 0 && (
                            <ul className="absolute left-0 right-0 mt-2 bg-white p-2 rounded shadow-md">
                                {shows.map((show) => (
                                    <li key={show.id} className="flex items-center space-x-2">
                                        <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={show.show.image?.original}
                                                alt={show.show.name}
                                                className="w-10 h-10 rounded"
                                            />
                                        </a>
                                        <div>
                                            <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">
                                                <span className="font-bold">{show.show.name}</span>
                                            </a>
                                            <p className="text-sm text-gray-600">{show.show.genres.join(', ')}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <p className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-white text-xl ">
                        Pandu Utomo
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
