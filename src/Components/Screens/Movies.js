import React from 'react';
import Banner from '../Subcomponents/Banner';
import Navbar from '../Subcomponents/Navbar';
import Row from '../Subcomponents/Row';
import '../Styles/Home.css'
import requests from '../request';


function Movies() {
    return (
        <div className = "home">
        <div className = "home-screen">
            
            <Navbar />
            <Banner />
            <Row 
            title = "Top Rated"
            fetchURL = { requests.fetchTopRated }
            isLargeRow
            />
            <Row 
            title = "Action Movies"
            fetchURL = { requests.fetchActionMovies }
            isLargeRow
            />
            <Row 
            title = "Comedy Movies"
            fetchURL = { requests.fetchComedyMovies }
            isLargeRow
            />
            <Row 
            title = "Horror Movies"
            fetchURL = { requests.fetchHorrorMovies }
            isLargeRow
            />
            <Row 
            title = "Romance Movies"
            fetchURL = { requests.fetchRomanceMovies }
            isLargeRow
            />
            </div>
        </div>
        

    )
}
  
export default Movies;