import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Briefcase,
  Camera,
  Cake,
  Utensils,
  Music,
  ParkingCircle,
  Wifi,
  TreePalm,
  ArrowRight,
} from "lucide-react";

// Import your local images
import servicesHero from "./services-hero.jpeg";

// Import service card background images
import weddingsImg from "./weddings.jpeg";
import picnicsImg from "./picnics.jpeg";
import corporateImg from "./corporate.jpeg";
import photoshootsImg from "./photoshoots.jpeg";
import toursImg from "./tours.jpeg";
import eventsImg from "./events.jpeg";

// Fallback image
const fallbackImg = servicesHero;

const Services = () => {
  const mainServices = [
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Weddings",
      desc: "Beautiful garden ceremonies and receptions for up to 2000 guests",
      features: [
        "Floral decorations",
        "Bridal suite",
        "Sound system",
        "Ample parking",
      ],
      image: weddingsImg || fallbackImg,
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Family Picnics",
      desc: "Relaxing day out with loved ones in our lush gardens",
      features: [
        "Picnic spots",
        "Play area for kids",
        "BBQ grills available",
        "Clean washrooms",
      ],
      image: picnicsImg || fallbackImg,
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Corporate Events",
      desc: "Team building, product launches, and company parties",
      features: [
        "Conference setup",
        "Catering options",
        "AV equipment",
        "Private spaces",
      ],
      image: corporateImg || fallbackImg,
    },
    {
      icon: <Camera className="h-10 w-10 text-white" />,
      title: "Photoshoots",
      desc: "Stunning backdrops for photos and videos",
      features: [
        "Natural lighting",
        "Variety of settings",
        "Dam and gardens",
        "Floating deck",
      ],
      image: photoshootsImg || fallbackImg,
    },
    {
      icon: <TreePalm className="h-10 w-10 text-white" />,
      title: "Nature Tours",
      desc: "Explore scenic gardens, trails & scenic views",
      features: [
        "Guided tours",
        "Garden walks",
        "Bird watching",
        "Photography spots",
      ],
      image: toursImg || fallbackImg,
    },
    {
      icon: <Cake className="h-10 w-10 text-white" />,
      title: "Events & Parties",
      desc: "Birthdays, anniversaries, and celebrations",
      features: [
        "Birthday packages",
        "Decoration included",
        "Catering options",
        "Event planning",
      ],
      image: eventsImg || fallbackImg,
    },
  ];

  const amenities = [
    {
      icon: <ParkingCircle className="h-8 w-8 text-green-600" />,
      name: "400+ Parking Spaces",
    },
    { icon: <Wifi className="h-8 w-8 text-green-600" />, name: "Free WiFi" },
    {
      icon: <Music className="h-8 w-8 text-green-600" />,
      name: "Sound System Available",
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-600" />,
      name: "Catering Services",
    },
    {
      icon: <Cake className="h-8 w-8 text-green-600" />,
      name: "Birthday Packages",
    },
    {
      icon: <TreePalm className="h-8 w-8 text-green-600" />,
      name: "Event Setup Included",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Local Image */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${servicesHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Everything you need for the perfect event in one beautiful location
          </p>
        </div>
      </section>

      {/* Services Grid with Image Backgrounds */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="relative group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-[380px]"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-start text-white p-6">
                  <div className="mb-4 bg-white/20 backdrop-blur-sm p-4 rounded-full mt-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-center drop-shadow-md mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 w-full max-w-xs">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-white/90 text-sm flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Amenities & Facilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {amenities.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full inline-flex mb-3 shadow-md">
                  {item.icon}
                </div>
                <p className="font-medium text-gray-700 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-lg mb-8">
            We offer tailored packages for any occasion. Contact us to discuss
            your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center"
          >
            Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
