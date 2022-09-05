import React, { useEffect, useState } from 'react';
import { API } from '../../API';
import Output from '../Output';
import Pagination from '@mui/material/Pagination';


const Home = () => {
    const [characters, setCharacters] = useState([])
    const [pagesCount, setPagesCount] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)


    const getCharacters = async () => {
        const request = await fetch(API + './?page=' + currentPage)
        const response = await request.json()
        setPagesCount(Math.ceil(response.info.count / response.info.pages));
        setCharacters(response.results);
        // console.log(response);
    }

    useEffect(() => {
        getCharacters()
    }, [currentPage])

    return (
        <div>
            <Output characters={characters} />

            <Pagination
                onChange={(e, page) => setCurrentPage(page)}
                count={pagesCount}
                color='secondary'
                size='large'
            />
        </div>
    );
};

export default Home;