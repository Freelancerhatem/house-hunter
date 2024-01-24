/* eslint-disable react/no-unescaped-entities */

import img from '../../assets/image/housebg2.webp'
const About = () => {
    return (
        <div className="h-screen bg-center bg-cover bg-no-repeat text-white" style={{backgroundImage:`url(${img})`}}>
            <h2 className="text-xl font-semibold text-center">About us</h2>
            
            <p className='text-center'>At Our Services, we understand that the search for a new home is a significant and exciting chapter in your life. Whether you're a first-time buyer, upgrading, downsizing, or investing, we are here to guide you through every step of the process.</p>
        </div>
    );
};

export default About;