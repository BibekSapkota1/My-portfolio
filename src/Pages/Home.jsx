import React from 'react'
import Landing from '../components/Landing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
import "../index.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';


export default function Home({ data }) {



    return (
        <div className='dark:bg-custom-dark'>

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