import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Mother's Day Celebration at Paradise Park",
      date: "May 10, 2026",
      author: "Poline Maire",
      excerpt:
        "Join us for a special Mother's Day celebration filled with love, laughter, and beautiful memories...",
      image: "https://images.unsplash.com/photo-1513151233558-860c539b4f7f",
      category: "Events",
    },
    {
      id: 2,
      title: "Party Events at Paradise Park",
      date: "April 9, 2026",
      author: "Events Team",
      excerpt:
        "Planning a party in Bungoma? Here's why Paradise Park is the perfect venue for your celebration...",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      category: "Planning",
    },
    {
      id: 3,
      title: "Old School & Vibe Brunch: A Successful Easter Event",
      date: "April 8, 2026",
      author: "John Rabar",
      excerpt:
        "Easter 2026 brought great energy to Paradise Park with our Old School & Vibe Brunch event...",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      category: "Recap",
    },
    {
      id: 4,
      title: "Affordable Venues to Hold Weddings and Parties in Nairobi",
      date: "April 6, 2026",
      author: "Planning Team",
      excerpt:
        "Planning a wedding or party in Western Kenya? Here are tips for finding affordable venues...",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      category: "Tips",
    },
    {
      id: 5,
      title: "Easter Picnic Spots: Best Places to Visit in 2026",
      date: "April 2, 2026",
      author: "Family Team",
      excerpt:
        "Easter is a time for rest and family fun. Discover the best picnic spots in Bungoma...",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf",
      category: "Travel",
    },
    {
      id: 6,
      title: "Eid Mubarak — Celebrate Eid in Nature at Paradise Park",
      date: "March 20, 2026",
      author: "Management",
      excerpt:
        "As Eid al-Fitr arrives, all of us at Paradise Park wish you joy and peace...",
      image: "https://images.unsplash.com/photo-1582653291997-079a1b04e5a1",
      category: "Holidays",
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">
            News, events, and inspiration from Paradise Park
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={`${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-green-600 font-semibold inline-flex items-center hover:text-green-700"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
