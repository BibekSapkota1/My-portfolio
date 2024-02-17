import React from 'react'
import Navbar from '../components/Navbar';
import Landing from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
// import Client from '../component/Client';
// import Contact from '../component/Contact';
// import Footer from '../component/Footer';
// import Green from '../component/Green';
// import Header from '../component/Header';
// import Landing from '../component/Landing';
// import Projects from '../component/Projects';
// import Service from '../component/Service';
// import Testimonial from '../component/Testimonial';
// import TwoContainer from '../component/TwoContainer';

export default function Home({ data }) {

    return (
        <div>
           
            <div>
                <Landing></Landing>
                <About></About>
                <Portfolio></Portfolio>
                <Service></Service>
            </div>




        </div>
    )
}