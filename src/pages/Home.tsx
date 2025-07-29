import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import { Gallery } from '../components/Gallery';
import Feature3 from '../components/mvpblocks/feature-3';
import { Testimonial } from '../components/ui/Testimonial';
import VideoCarousel from '../components/VideoSection';
const Home = () => {

  const images=[img1, img2, img3, img4, img5, img6,img1, img2];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
   <section className="relative w-full h-screen overflow-hidden">
        <div className="w-full h-full">
          <div className="bg-black/45 absolute inset-0 top-0 left-0"></div>
          <div>
            <video
              playsInline
              autoPlay
              loop
              muted
              className="w-full h-screen object-cover"
              src="https://cdn.prod.website-files.com/67daff2a6e8cc98d865cc436%2F6818d7fcc152217e4e18e632_Martha%20King%20Intro-3-transcode.mp4"
            ></video>
            <div className="absolute z-10 inset-0  flex flex-col items-center justify-center flex-1 text-[#F3F4F6] text-center mt-10">
              <h3 className="text-4xl md:text-6xl font-semibold mb-2">
               Transcend the Ordinary
              </h3>
              <div className="text-xl md:text-3xl font-heading mb-8 w-[10rem] font-medium">
               Tune the Passage into a Timeless Narrative
              </div>
              <p className='mt-2'>Thoughtfully designed journeys for <br />
those who find beauty in the details.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Must Experience Packages */}
      <section className="py-16 bg-[#FAF7F3] w-full overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-[#155A52] font-heading  italic  font-light mb-4 md:mb-8">
        <em className="">Customized</em> travels

            </h2>
            <p className="text-gray-800 max-w-3xl text-lg md:text-[1.2rem] mx-auto">
              We, at <em className="font-serif italic text-[#155A52]">Eventours</em> , have redefined customized travel, establishing ourselves as India's Premier Travel Curators.
            </p>
            <p className="text-gray-800 max-w-3xl my-4 text-lg md:text-[1.2rem] mx-auto">


Our innovative approach to customized journeys has set new benchmarks in the travel industry, crafting unforgettable moments across the globe.
            </p>
            <p className="text-gray-800 max-w-3xl text-lg md:text-[1.2rem] mx-auto">

Eventours India has been internationally acclaimed for our distinctive vision in creating authentic and extraordinary customized travel experiences.
            </p>
            {/* <button className="mt-6 text-black border-b border-black hover:text-gray-600 transition-colors">
              See All Packages
            </button> */}
          </div>

         <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl shadow -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
        </div>
      </section>

<div  className="bg-[#dadada] bg-cover  bg-center min-h-100 relative"   >
  <img className='absolute inset-0 top-0 left-0 w-full h-full object-cover object-left-top ' src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
<div className='absolute inset-0 top-0 left-0  w-full h-full from-black/60 via-black/70 to-black/60 bg-gradient-to-r flex items-center justify-center text-white'>
  <div className='text-center max-w-3xl'>
    <h2 className='text-5xl font-light mb-4 font-heading md:text-6xl'>Our Approach</h2>
    <p className='text-lg mb-6'> At Eventours, we craft personalized journeys that bring your travel dreams to life. With expert knowledge and passion, we design immersive experiences tailored to your unique spirit, sparking wonder and creating lifelong memories.</p>
    <Link to={"/our-approach"} className='bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors'> Handcrafting a Journey</Link>
  </div>

</div>
</div>

<Gallery/>

<Feature3/>

<VideoCarousel/>
<div className="container  mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-[#155A52] font-light mb-4">
              Real <em className="font-serif italic">stories</em><br />
              from travelers
            </h2>
          </div>
<Testimonial/>
</div>
      {/* Our True Beliefs */}
      {/* <section className="py-20 bg-[#FAF7F3]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8">
                Our true <em className="font-serif italic">beliefs</em><br />
                for <em className="font-serif italic">your</em> benefits
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our beliefs aren't just words; they are the foundation of
                every adventure we offer. With high commitment to
                sustainability, authenticity, and customer-centricity, we
                create experiences that go beyond the ordinary, delivering
                transformational travel that enriches your life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customer-Centric</h3>
                  <p className="text-gray-600 text-sm">We prioritize your needs above our business goals by
                  ensuring unparalleled service and experiences tailored
                  specifically for you.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sustainable Travel</h3>
                  <p className="text-gray-600 text-sm">We believe in preserving our planet and offer sustainable
                  tourism options that help protect the environment while
                  providing authentic experiences.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Authentic Experiences</h3>
                  <p className="text-gray-600 text-sm">We curate genuine, immersive travel experiences that
                  connect you with the reality, beauty, culture & traditions
                  of each destination.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-black text-white p-6 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trust & Transparency</h3>
                  <p className="text-gray-300 text-sm">We build relationships that are grounded on trust by being
                  transparent in all our dealings and consistently
                  delivering on our promises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* Our Journey in Pictures */}
      {/* <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-8">
            Our <em className="font-serif italic">journey</em> in pictures
          </h2>
        </div>
      </section> */}

      {/* Real Stories from Travelers */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Real <em className="font-serif italic">stories</em><br />
              from travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#FAF7F3] p-8 rounded-lg">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6">
                My travel dreams finally came true thanks to this amazing platform! The trip to the mountains was incredible - every detail was perfectly organized.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-[#FAF7F3]0 text-sm">Adventure Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF7F3] p-8 rounded-lg">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6">
                They provided an amazing adventure that took me deep into culture and nature. I met locals, tasted authentic food, and truly lived like a local.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-[#FAF7F3]0 text-sm">Cultural Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ready to Embark */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-4">
            Ready to <em className="font-serif italic">embark</em><br />
            on a <em className="font-serif italic">new</em> journey?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next
            unforgettable adventure. Get in touch today and take your unforgettable trip.
          </p>

          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 mb-4"
            ></textarea>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                By submitting this message I agree to Terms & Conditions
              </label>
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section> */}

      {/* Lighthouse Image */}
      <section className="h-96 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
      </section>
    </div>
  );
};

export default Home;
