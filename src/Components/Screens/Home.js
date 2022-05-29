import React from 'react';
import Banner from '../Subcomponents/Banner';
import Navbar from '../Subcomponents/Navbar';
import Row from '../Subcomponents/Row';
import '../Styles/Home.css'
import requests from '../request';

function Home() {
    return (
        <div className="home">
            <div className="home-screen">
                <Navbar />
                <Banner />
                <Row
                    title="NETFLIX ORIGINALS"
                    fetchURL={requests.fetchNetflixOriginals}
                    isFirstRow="true"
                />
                <Row
                    title="Trending Now"
                    fetchURL={requests.fetchTrending}
                    isLargeRow
                />
                <Row
                    title="Top Rated"
                    fetchURL={requests.fetchTopRated}
                    isLargeRow
                />

                <Row
                    title="Documentaries"
                    fetchURL={requests.fetchDocumentaries}
                    isLargeRow
                />
                <Row
                    title="Trending TV Shows"
                    fetchURL={requests.fetchTopRatedShows}
                    isLargeRow
                />
            </div>
        </div>

    )
}

export default Home;