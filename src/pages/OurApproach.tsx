import OurApproachCard from "../components/OurApproachCard"

const OurApproach = () => {
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="w-full h-full">
          <div className="bg-black/45 absolute inset-0 top-0 left-0"></div>
          <div>
            <img

              className="w-full h-screen object-cover"
              src="https://cdn.prod.website-files.com/67daff2a6e8cc98d865cc436/67fe747d19ea79e57f173747_arnaud-steckle-34RmaD-jVbY-unsplash-p-2000.jpg"
            ></img>
            <div className="absolute z-10 inset-0  flex flex-col items-center justify-center flex-1 text-[#F3F4F6] text-center mt-10">
              <h3 className="text-4xl md:text-6xl font-heading font-semibold mb-2">
               Our Approach
              </h3>

            </div>
          </div>
        </div>
      </section>
       <section className="py-16 bg-[#FAF7F3] w-full overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* <h2 className="text-5xl md:text-6xl text-[#155A52] font-heading  italic  font-light mb-4 md:mb-8">
        Customized travels

            </h2> */}
            <p className="text-gray-800 max-w-3xl text-lg md:text-[1.2rem] mx-auto">
             Eventours provides customized travel solutions for you. We believe in encouraging and indulging your travel curiosity. Whatever your destination, we are here to help you plan that dream vacation you have always desired. Our trips don’t come off the shelf, there are no pre-set itineraries.
            </p>
            <p className="text-gray-800 max-w-3xl my-4 text-lg md:text-[1.2rem] mx-auto">

They are personalized down to the finest detail around your tastes and interests with an absolute commitment to quality. Travel with value and service, from around the corner to around the world. Our goal is to plan every trip with the same care as if it were our own. Our experience, inside knowledge, and relationships with our partners worldwide makes your holiday hasslefree.
            </p>

            {/* <button className="mt-6 text-black border-b border-black hover:text-gray-600 transition-colors">
              See All Packages
            </button> */}
          </div>
</div>

      </section>
      <OurApproachCard/>
    </div>
  )
}

export default OurApproach
