import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const post = {
    1: {
      title: "Mother's Day Celebration at Paradise Park",
      date: "May 10, 2026",
      author: "Poline Maire",
      content: `
        <p>Mother's Day is a time to slow down and appreciate the women who have shaped our lives. At Paradise Park Bungoma, we celebrated in style with a day full of love, laughter, and beautiful moments.</p>
        
        <h2>A Day to Remember</h2>
        <p>Families gathered at our lush gardens for a special brunch event. Mothers were treated to complimentary flowers, live music, and a relaxing atmosphere away from the daily hustle.</p>
        
        <p>Children participated in fun activities including face painting, horse rides, and a special card-making station where they could express their love creatively.</p>
        
        <h2>Special Offers</h2>
        <p>To mark the occasion, we offered discounted picnic packages and family photoshoot sessions. Many families took advantage of our stunning garden backdrop to capture lasting memories.</p>
        
        <p>We look forward to hosting even more families next year. Thank you to everyone who joined us!</p>
      `,
      image: "https://images.unsplash.com/photo-1513151233558-860c539b4f7f",
    },
    2: {
      title: "Party Events at Paradise Park",
      date: "April 9, 2026",
      author: "Events Team",
      content: `
        <p>Planning a party in Bungoma? Paradise Park offers the perfect setting for birthdays, graduations, and any celebration you can imagine.</p>
        
        <h2>Why Choose Paradise Park?</h2>
        <p>Our 1-acre property provides ample space for all types of parties. Whether you're planning an intimate gathering for 20 or a large celebration for 500, we have the perfect spot.</p>
        
        <h2>Party Packages</h2>
        <p>We offer customizable packages that include décor, catering, entertainment, and event coordination. Our team handles all the details so you can focus on having fun.</p>
        
        <p>Contact us today to start planning your next party!</p>
      `,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    },
  };

  const currentPost = post[id] || post[1];

  return (
    <div className="pt-16">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentPost.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentPost.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {currentPost.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" /> {currentPost.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-green-600 mb-8 hover:text-green-700"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
        </Link>

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: currentPost.content }}
        />

        <div className="border-t pt-6 mt-8 flex justify-between items-center">
          <div className="text-gray-500 text-sm">Share this post:</div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
