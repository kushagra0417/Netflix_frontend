import React from 'react';
import Banner from '../Subcomponents/Banner';
import Navbar from '../Subcomponents/Navbar';
import Row from '../Subcomponents/Row';
import '../Styles/Home.css'
import requests from '../request';


function TVShows(){
    return (
        <div className = "home">
        <div className = "home-screen">
        
           <Navbar />
           <Banner />
           <Row 
           title = "TV Shows"
           fetchURL = { requests.fetchTVShows }
           isLargeRow
           />
           {/* <Row 
           title = "Latest Shows"
           fetchURL = { requests.fetchLatestTVShows }
           isLargeRow
           /> */}
          
            <Row 
           title = "Airing Today"
           fetchURL = { requests.fetchAiringToday }
           isLargeRow
           />
            <Row 
           title = "Top Rated"
           fetchURL = { requests.fetchTopRatedShows }
           isLargeRow
           />
            <Row 
           title = "Popular"
           fetchURL = { requests.fetchPopularShows }
           isLargeRow
           />
           </div>
        </div>

    )
}
  
export default TVShows;