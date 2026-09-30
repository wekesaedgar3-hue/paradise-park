import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Camera,
  ArrowRight,
  Utensils,
  PartyPopper,
  TreePalm,
} from "lucide-react";

// Import the local image - Landing.jpeg is in the same folder as Home.js
import paradiseHero from "./Landing.jpeg";

// Import feature images from your Pictures folder - using .jpeg extension
// Make sure these files exist in your src/pages/ folder
import weddingsImg from "./weddings.jpeg";
import picnicsImg from "./picnics.jpeg";
import photoshootsImg from "./photoshoots.jpeg";
import toursImg from "./tours.jpeg";
import eventsImg from "./events.jpeg";
import cateringImg from "./catering.jpeg";

// For now, use the hero image as placeholder for missing images
// You need to add these files to your pages folder
// import toursImg from "./tours.jpeg";
// import eventsImg from "./events.jpeg";
// import cateringImg from "./catering.jpeg";

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Weddings",
      desc: 'Say "I do" in our lush gardens',
      image: weddingsImg,
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Family Picnics",
      desc: "Perfect spot for family bonding",
      image: picnicsImg,
    },
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: "Photoshoots",
      desc: "Capture stunning memories",
      image: photoshootsImg,
    },
    {
      icon: <TreePalm className="h-8 w-8 text-white" />,
      title: "Nature Tours",
      desc: "Explore scenic gardens & trails",
      image: toursImg,
    },
    {
      icon: <PartyPopper className="h-8 w-8 text-white" />,
      title: "Events & Parties",
      desc: "Birthdays, anniversaries & more",
      image: eventsImg,
    },
    {
      icon: <Utensils className="h-8 w-8 text-white" />,
      title: "Catering Services",
      desc: "Delicious meals for all events",
      image: cateringImg,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${paradiseHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome to Paradise Park
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bungoma's Premier Events & Recreation Destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Book Your Event
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Paradise Awaits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Located just minutes from Bungoma Town, Paradise Park offers a
            serene escape with breathtaking gardens, a beautiful dam, and
            premium facilities for all your events and relaxation needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-600">5+</h3>
              <p className="text-gray-600">Acres of Lush Gardens</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-600">2000+</h3>
              <p className="text-gray-600">Guest Capacity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-600">400+</h3>
              <p className="text-gray-600">Parking Spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-80"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <div className="mb-4 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-center drop-shadow-md">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-lg mb-8">
            Book your event or visit us today for a free tour of the grounds.
          </p>
          <Link
            to="/booking"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book Now <ArrowRight className="inline h-5 w-5 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
