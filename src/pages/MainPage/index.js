import React from 'react'
import Row from '../../components/Row'
import Banner from '../../components/Banner'
import requests from '../../api/requests'

export default function MainPage() {
  return (
    <div>
        <Banner></Banner>
        <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" id="TN" fetchURL={requests.fetchTrending}/>
        <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" id="AM" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" id="CM" fetchURL={requests.fetchComedyMovies}/>
    </div>
  )
}
