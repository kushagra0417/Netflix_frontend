import React from 'react';
import Banner from '../Subcomponents/Banner';
import Navbar from '../Subcomponents/Navbar';
import Row from '../Subcomponents/Row';
import '../Styles/Home.css'
import requests from '../request';

function NewandPopular() {
    return (
        <div className = "home">
        <div className = "home-screen">
            
            <Navbar />
            <Banner />
            <Row 
            title = "Trending Now"
            fetchURL = { requests.fetchAllTrending }
            isLargeRow
            />
            <Row 
            title = "Trending Movies"
            fetchURL = { requests.fetchMoviesTrending }
            isLargeRow
            />
                <Row 
            title = "Trending TV Shows"
            fetchURL = { requests.fetchTVTrending }
            isLargeRow
            />
           </div>
        </div>

    )
}
  
export default NewandPopular;