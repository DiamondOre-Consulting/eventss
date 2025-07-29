import gunjan from "../assets/gunjan.png";
import mudit from "../assets/mudit.png";
const Directors = () => {
    const directors = [
      {
        name: "Mudit Maheshwari",
        position: "",
        image: mudit,
        bio: `The restless travel freak , who after doing his MBA in marketing from one of the leading colleges in delhi…still had the travel bug in him to get full time into planning holidays and events.\

        Likes to trek, climb, ski, scuba dive and even paraglide, but what he loves most is to make holidays and lovely memories`
      },
      {
        name: "Gunjan Barbhaya",
        position: '',
        image: gunjan,
        bio: "Gunjan Barbhaya with a post graduation in tourism and almost 18 years in the industry….she is the quintessential travel enthusiast…ready to work out the perferct holiday for you be it an Alaskan cruise or a Kenyan jungle safari."
      }
    ];

    return (
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 font-serif">
              Our <span className="text-blue-500">Team</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1 text-white">{director.name}</h3>
                    <p className="text-indigo-300 font-medium mb-3">{director.position}</p>
                    <p className="text-white ">{director.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Directors;
