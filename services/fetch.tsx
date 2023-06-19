import React, { useState, useEffect } from 'react';

interface Show {
    id: string | undefined;
    image: any;
    show: {
        genres: any;
        officialSite: string | undefined;
        image: {
            original: string;
        };
        id: number;
        name: string;
    },
}

export const FetchFilm = () => {
    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://api.tvmaze.com/search/shows?q=girls');
                const data: Show[] = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return shows;
};

export const searchFilm = async (movieName: string) => {
    try {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${movieName}`);
        const data: Show[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};