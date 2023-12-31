import React from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'

const pageStyle = {
  background: '#8fb6ab'
};

const MeetTheTeam = () => {
  return (
    <nav  style={pageStyle}>
      <br />
      <div className="bg-gray-100 p-4 ml-5 mt-8 mr-5 rounded-lg">
        <h1 className="wavy text-base sm:text-3.5xl md:text-4xl lg:text-4.5xl font-bold text-center">MEET THE TEAM</h1>
      </div>

      <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
        <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">ABOUT THE PROJECT</h1>
        <u1>
          <li className="ml-9">The objective of the Hydro Sense Project was to help out <span className="underline font-semibold">SJSU Community Garden</span> to <span className="underline font-semibold">optimize</span> its water usage</li>
          <li className="ml-9">We wanted to achieve this by automating the process of recording the moisture and temperature data throughout the day for the garden to develop better watering practices and systems</li>
        </u1>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
        <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">THE TEAMS</h1>
          <u1> 
            <li className="ml-9">The teams for this project consists of <span className="underline font-semibold">17 Fall &apos;23 Potential New Members of the San Jose State University Theta Tau Professional Engineering Fraternity</span></li>
            <li className="ml-9">The members were split into four teams, including the HARDWARE, MICROCONTROLLER, FRONTEND, and BACKEND teams</li>
          </u1>
        </div>

        <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
        <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">TEAM MEMBERS</h1>
          <u1 className="mb-4"> 
            <li className="ml-9"><span className="underline font-semibold">Hardware Team</span>: Chris Wong, Justin Doan, Kevin Bautista, Janelle Bautista, Manan Upadhyay, Ethan Nguyen, Sid Nayak</li>
            <li className="ml-9"><span className="underline font-semibold">Microcontroller Team</span>: James Kim, Michelle Kim, Drew Tom</li>
            <li className="ml-9"><span className="underline font-semibold">Frontend Team</span>: David Song, Alan Wang, Krishiv Haranath</li>
            <li className="ml-9"><span className="underline font-semibold">Backend Team</span>: Lac-Phong Nguyen, Stefan Le, Julia Husainzada, Akshitaa Balasai</li>
          </u1>
        </div>
      </div>
      
      <div className="flex bg-gray-100 p-4 ml-5 mt-2 mr-5 mb-5 rounded-lg items-center justify-center">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">
            IOTA CLASS FA&apos;23
          </h1>
            <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={5000}>
            <div>
              <Image src="/HydroSenseTeam.jpg" width={500} height={500} alt="Pic1" />
            </div>
            <div>
              <Image src="/biglittlepicture.jpg" width={500} height={500} alt="Pic2" />
            </div>
            <div>
              <Image src="/nmedinner.jpg" width={500} height={500} alt="Pic3" />
            </div>
            <div>
              <Image src="/selfiepic.jpg" width={500} height={500} alt="Pic4" />
            </div>
            <div>
              <Image src="/spartantacos.png" width={500} height={500} alt="Pic5" />
            </div>
         </Carousel>
        </div>
      </div>





      <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-center justify-center">
        <div className="flex bg-gray-100 items-center justify-center mr-2 rounded-lg">
          <h2 className="ml-4">D I S C O R D</h2>
          <Link href="https://discord.gg/X8PGQ5WAV" target="_blank" rel="noopener noreferrer">
            <button className="ml-3 hover:bg-gray-300 p-2 rounded-lg transition duration-300">
              <Image src="/discord.png" width={50} height={50} alt="Pic1" className="rounded-full hover:animate-bounce"/>
            </button>
          </Link>
        </div>

        <div className="flex bg-gray-100 items-center justify-center ml-2 rounded-lg h-full">
          <h2 className="ml-4"> I N S T A G R A M</h2>
          <Link href="https://www.instagram.com/pnmf23/" target="_blank" rel="noopener noreferrer">
            <button className="ml-3 hover:bg-gray-300 p-2 rounded-lg transition duration-300">
              <Image src="/Instagram_icon.png" width={50} height={50} alt="Pic1" className="rounded-full hover:animate-bounce"/>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-center justify-center">
        <Link href="/">
          <button className="bn54 mr-5">
            <span class="bn54span">Home</span>
          </button>
        </Link>

        <Link href="/AboutPage">
        <button className="bn54 ml-5">
            <span class="bn54span">About Garden</span>
          </button>
        </Link>

        <Link href="/Privacy">
          <button className="bn54 ml-10">
            <span class="bn54span">Privacy Policy</span>
          </button>
        </Link>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </nav>
  )
}

export default MeetTheTeam
