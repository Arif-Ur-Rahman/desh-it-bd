// components/ClientReviewsSection.tsx
"use client";
import Image from "next/image";

const ClientReviews = () => {
  const reviews = [
    {
      rating: 99,
      stars: "★★★★★",
      quote: "DeshIT-BD brings the kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't just a development team—they're an extension of our startup.",
      author: "Woody Klemetson",
      position: "Founder and CEO at AskElephant"
    },
    {
      rating: 99,
      stars: "★★★★★",
      quote: "Working with DeshIT-BD has been transformative for our organization. Their team doesn't just deliver technology—they understand our vision and help bring it to life with precision and care. What sets them apart is their dedication, professionalism, and ability to translate complex ideas into solutions that truly make a difference. DeshIT-BD is a partner you can trust to elevate your projects from concept to success.",
      author: "Stacy Duty",
      position: "Founder at The WeightPay Group"
    },
    {
      rating: 99,
      stars: "★★★★★",
      quote: "Collaborating with DeshIT-BD has been an inspiring experience. Their team combines technical excellence with a creative approach that brings ideas to life in ways I didn't imagine possible. They are more than developers—they are true partners who listen, innovate, and deliver with precision. For anyone seeking a team that can turn vision into reality, DeshIT-BD is unmatched.",
      author: "Lauren Messemer",
      position: "Founder & Lead Developer at Mesmerize Software Studio"
    }
  ];

  return (
    <section className="w-full py-20 sm:px-6 lg:px-8 backdrop-blur-[35px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-roboto">
            Client Reviews
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B94A5B] to-[#6A4FFF] mx-auto"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-[#4C4C4C3B] rounded-3xl p-8 border-[0.8px] border-[#FFFFFF2B] hover:border-[#B94A5B] transition-all duration-300 group"
            >
              {/* Rating and Stars */}
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2 font-roboto">
                  {review.rating}
                </div>
                <div className="text-yellow-400 text-xl mb-4">
                  {review.stars}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-gray-300 text-lg leading-relaxed text-center">
                  {review.quote}
                </p>
              </div>

              {/* Author */}
              <div className="text-center pt-6">
                <p className="text-white font-semibold text-lg mb-1">
                  {review.author}
                </p>
                <p className="text-gray-400 text-sm">
                  {review.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;