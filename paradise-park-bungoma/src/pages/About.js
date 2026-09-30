import { Award, Clock, Heart, Shield } from "lucide-react";

// Import your local images
import aboutHero from "./about-hero.jpeg";
import aboutStory from "./about-story.jpeg";
import teamPhoto from "./team-photo.jpeg";

// Import different images for each value card background
import passionImg from "./passion.jpeg";
import trustImg from "./trust.jpeg";
import excellenceImg from "./excellence.jpeg";
import commitmentImg from "./commitment.jpeg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Passion",
      desc: "We pour our hearts into every event",
      image: passionImg,
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Trust",
      desc: "Reliable and professional service",
      image: trustImg,
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Excellence",
      desc: "Award-winning venue",
      image: excellenceImg,
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Commitment",
      desc: "Dedicated to your satisfaction",
      image: commitmentImg,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Local Image */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">About Paradise Park</h1>
            <p className="text-xl">Bungoma's Most Beloved Events Destination</p>
          </div>
        </div>
      </section>

      {/* Story Section with Local Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Paradise Park Bungoma was founded with a simple vision: to
                create a beautiful, peaceful, and versatile space where families
                and friends can come together to celebrate life's special
                moments.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown into the premier events venue in
                Western Kenya, hosting countless weddings, birthday parties,
                corporate events, and family gatherings.
              </p>
              <p className="text-gray-600">
                Our 5-acre property features manicured lawns, a scenic dam,
                nature trails, and dedicated spaces for every type of event. We
                take pride in our attention to detail and commitment to making
                every visit memorable.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutStory}
                alt="Paradise Park Garden"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Different Image Backgrounds */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-64"
                style={{
                  backgroundImage: `url(${value.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <div className="mb-4 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                    {value.title}
                  </h3>
                  <p className="text-white/90 text-center drop-shadow-md">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section with Local Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Your Event Coordinator
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet Poline, our dedicated event coordinator who will help bring
            your vision to life
          </p>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={teamPhoto}
              alt="Event Coordinator"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Poline Maire</h3>
              <p className="text-green-600 font-medium mb-3">
                Senior Event Coordinator
              </p>
              <p className="text-gray-600">
                With over 8 years of experience in event management, Poline
                specializes in coordinating weddings, corporate events, and
                private parties. She's your one-stop contact for all event
                details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
