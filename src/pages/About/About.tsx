import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ProductList from '../../components/ProductList/ProductList'
import Footer from '../../components/Footer/Footer'

function About() {

  return (
    <>
    <Navbar/>
    <div className='about-text'>
    About Us

Welcome to [Your Website Name], where innovation meets excellence. At [Your Website Name], we are dedicated to delivering top-notch products and services that cater to the needs and aspirations of our valued customers. Our mission is to create a seamless and enriching experience for everyone who interacts with our brand.
Our Story

[Your Website Name] was founded in [Year] with a vision to revolutionize the [industry/market] landscape. Our journey began with a small team of passionate individuals who shared a common goal: to make a difference in the lives of our customers through high-quality products and exceptional service. Over the years, we have grown and evolved, but our commitment to our core values remains unwavering.
Our Mission

Our mission at [Your Website Name] is to provide innovative solutions that enhance the daily lives of our customers. We strive to achieve this by:

    Quality Products: We are committed to offering products that meet the highest standards of quality and reliability. Every product we sell is carefully selected and rigorously tested to ensure it meets our stringent criteria.

    Exceptional Service: We believe in putting our customers first. Our dedicated customer service team is always here to assist you with any questions or concerns you may have. Your satisfaction is our top priority.

    Sustainable Practices: We are committed to making a positive impact on the environment. We continuously seek out eco-friendly practices and products that reduce our carbon footprint and promote sustainability.

Our Values

At [Your Website Name], our values guide everything we do. These values are the foundation of our company and reflect our commitment to our customers, our community, and our planet.

    Integrity: We believe in conducting our business with honesty and transparency. We are committed to building trust with our customers and partners through ethical practices and open communication.

    Innovation: We embrace change and constantly seek out new ways to improve our products and services. Our team is encouraged to think creatively and push the boundaries of what is possible.

    Customer Focus: Our customers are at the heart of everything we do. We strive to understand their needs and exceed their expectations in every interaction.

    Community: We believe in giving back to the community. We support various charitable organizations and initiatives that make a positive impact on the lives of others.

Our Team

Our team at [Your Website Name] is comprised of talented and dedicated professionals who are passionate about what they do. From our product designers and engineers to our customer service representatives, everyone plays a vital role in our success. We foster a collaborative and inclusive work environment where every team member is valued and encouraged to contribute their unique skills and perspectives.
Join Us

We are always looking for talented individuals who share our passion for excellence and innovation. If you are interested in joining our team, please visit our [Careers Page] to learn more about current opportunities.
Contact Us

We love hearing from our customers! If you have any questions, feedback, or simply want to say hello, please feel free to reach out to us at [contact email] or call us at [contact phone number]. You can also connect with us on [social media platforms].

Thank you for choosing [Your Website Name]. We look forward to serving you and exceeding your expectations!
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>More to come!</h1>
      <div className="card">
    
       
      </div>
      <Footer/>
      
    </>
  )
}

export default About
