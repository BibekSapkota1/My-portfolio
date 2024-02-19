import React from 'react'
import Landing from '../components/Landing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
import "../index.css"
import Header from '../components/Header';
import Footer from '../components/footer';


export default function Home({ data }) {

    return (
        <div>

            <div>
                <Header></Header>
                <Landing></Landing>
                <About></About>
                <Portfolio></Portfolio>
                <Service></Service>
                <Footer></Footer>


            </div>




        </div>
    )
}