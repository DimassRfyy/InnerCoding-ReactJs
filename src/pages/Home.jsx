import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Course from "../components/Course"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Partner from "../components/Partner"
import Tutors from "../components/Tutors"

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <Banner />
      <Course />
      <Tutors />
      <Partner />
      </div>
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
