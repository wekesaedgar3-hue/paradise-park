import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";

// Import your gallery hero image
import galleryHero from "./gallery-hero.jpeg";

// Import images for each category
import wedding1 from "./wedding1.jpeg";
import wedding2 from "./wedding2.jpeg";
import picnic1 from "./picnic1.jpeg";
import picnic2 from "./picnic2.jpeg";
import corporate1 from "./corporate1.jpeg";
import corporate2 from "./corporate2.jpeg";
import photoshoot1 from "./photoshoot1.jpeg";
import photoshoot2 from "./photoshoot2.jpeg";
import event1 from "./event1.jpeg";
import event2 from "./event2.jpeg";
import catering1 from "./catering1.jpeg";
import catering2 from "./catering2.jpeg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "weddings",
    "picnics",
    "corporate",
    "photoshoots",
    "events",
    "catering",
  ];

  const images = [
    {
      src: wedding1,
      category: "weddings",
      title: "Garden Wedding Ceremony",
    },
    {
      src: wedding2,
      category: "weddings",
      title: "Reception Setup",
    },
    {
      src: picnic1,
      category: "picnics",
      title: "Family Picnic Day",
    },
    {
      src: picnic2,
      category: "picnics",
      title: "Picnic Spots",
    },
    {
      src: corporate1,
      category: "corporate",
      title: "Corporate Team Building",
    },
    {
      src: corporate2,
      category: "corporate",
      title: "Company Party",
    },
    {
      src: photoshoot1,
      category: "photoshoots",
      title: "Photoshoot Session",
    },
    {
      src: photoshoot2,
      category: "photoshoots",
      title: "Family Portrait",
    },
    {
      src: event1,
      category: "events",
      title: "Birthday Celebration",
    },
    {
      src: event2,
      category: "events",
      title: "Anniversary Party",
    },
    {
      src: catering1,
      category: "catering",
      title: "Catering Setup",
    },
    {
      src: catering2,
      category: "catering",
      title: "Delicious Meals",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Fallback image if any image fails to load
  const fallbackImage = galleryHero;

  return (
    <div className="pt-16">
      {/* Hero Section with Local Image */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${galleryHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl">Beautiful moments captured at Paradise Park</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full capitalize transition ${
                  activeCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center font-semibold px-4 text-lg">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No images found in this category
              </p>
            </div>
          )}

          {/* More photos coming soon */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              More photos coming soon! Follow us on social media for updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit Today</h2>
          <p className="text-lg mb-8">
            Come experience Paradise Park and create your own beautiful memories
          </p>
          <Link
            to="/booking"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center"
          >
            Book Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
