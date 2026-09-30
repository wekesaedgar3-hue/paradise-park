import { useState } from "react";
import { Clock, Users, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";

// Import your local image for the hero section
import bookingHero from "./Landing.jpeg";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    eventDate: "",
    guestCount: "",
    specialRequests: "",
  });

  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Corporate Event",
    "Family Picnic",
    "Graduation Party",
    "Photoshoot",
    "Nature Tour",
    "Events & Parties",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = () => {
    const message = `Hello Paradise Park Bungoma!%0A%0A*New Booking Request*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AEvent Type: ${formData.eventType}%0AEvent Date: ${formData.eventDate}%0ANumber of Guests: ${formData.guestCount}%0ASpecial Requests: ${formData.specialRequests}%0A%0APlease contact me to confirm availability and pricing. Thank you!`;

    const whatsappNumber = "254116349931";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const sendEmailNotification = () => {
    const subject = encodeURIComponent(`Booking Request from ${formData.name}`);
    const body = encodeURIComponent(`
New Booking Request from Paradise Park Bungoma Website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Number of Guests: ${formData.guestCount}
Special Requests: ${formData.specialRequests}

Please follow up with the client.
    `);
    window.location.href = `mailto:wekesaedgar3@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);

    // Show options for WhatsApp or Email
    const userChoice = window.confirm(
      "How would you like to send your booking request?\n\nClick OK for WhatsApp\nClick Cancel for Email",
    );

    if (userChoice) {
      sendWhatsAppMessage();
    } else {
      sendEmailNotification();
    }

    setTimeout(() => {
      setBookingSubmitted(false);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "wedding",
        eventDate: "",
        guestCount: "",
        specialRequests: "",
      });
    }, 5000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Landing.jpeg */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bookingHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Book Your Event</h1>
          <p className="text-xl">Reserve your spot at Paradise Park Bungoma</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-xl text-center shadow-md">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sun: 8AM - 7PM</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center shadow-md">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Guest Capacity</h3>
              <p className="text-gray-600">Up to 2,000 guests</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center shadow-md">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Location</h3>
              <p className="text-gray-600">Off Webuye Road, Bungoma</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Request a Booking
            </h2>

            {bookingSubmitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center">
                Your request has been sent! We will contact you shortly via
                WhatsApp or email.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="0712 345 678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  >
                    {eventTypes.map((type) => (
                      <option
                        key={type}
                        value={type.toLowerCase().replace(" ", "-")}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="e.g., 100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  rows="4"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Tell us about your event, catering needs, decoration preferences, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg"
              >
                <Send className="h-5 w-5" /> Submit Booking Request
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                After submitting, you can choose to send your request via{" "}
                <strong>WhatsApp</strong> or <strong>Email</strong>.
              </p>
              <p className="mt-2">
                You can also reach us directly at{" "}
                <strong className="text-green-600">+254 116 349 931</strong> or{" "}
                <strong className="text-green-600">
                  wekesaedgar3@gmail.com
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Visit Paradise Park Today</h2>
          <p className="text-lg mb-8">
            Come experience the beauty and serenity of our gardens
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center"
          >
            Contact Us <Send className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Booking;
