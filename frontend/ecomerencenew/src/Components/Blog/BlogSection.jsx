import React from "react";
// BlogSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";
import {
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Fashion Trends That Will Define 2024",
      excerpt:
        "Discover the hottest fashion trends that are taking the world by storm this year. From sustainable fashion to bold colors, here's what's trending.",
      image:
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Fashion Trends",
      readTime: "5 min read",
      views: "2.1k",
      likes: 156,
      isNew: true,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Sustainable Fashion",
      excerpt:
        "Learn how to build an eco-friendly wardrobe without compromising on style. Tips, brands, and practices for conscious fashion lovers.",
      image:
        "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Emma Davis",
      date: "March 12, 2024",
      category: "Sustainability",
      readTime: "7 min read",
      views: "3.4k",
      likes: 243,
      isNew: false,
    },
    {
      id: 3,
      title: "How to Style Your Wardrobe for Every Season",
      excerpt:
        "Master the art of seasonal styling with our comprehensive guide. From summer essentials to winter layers, dress perfectly year-round.",
      image:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Styling Tips",
      readTime: "6 min read",
      views: "1.8k",
      likes: 189,
      isNew: true,
    },
    {
      id: 4,
      title: "The Art of Color Coordination in Fashion",
      excerpt:
        "Unlock the secrets of perfect color combinations. Learn color theory principles and how to create stunning outfits that turn heads.",
      image:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Lisa Rodriguez",
      date: "March 8, 2024",
      category: "Color Theory",
      readTime: "4 min read",
      views: "2.7k",
      likes: 312,
      isNew: false,
    },
    {
      id: 5,
      title: "Building a Capsule Wardrobe on a Budget",
      excerpt:
        "Create a versatile wardrobe with fewer pieces that work harder. Smart shopping strategies for maximum style impact.",
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "James Wilson",
      date: "March 5, 2024",
      category: "Budget Fashion",
      readTime: "8 min read",
      views: "4.2k",
      likes: 428,
      isNew: true,
    },
    {
      id: 6,
      title: "Accessorizing 101: Complete Your Look",
      excerpt:
        "Transform any outfit with the right accessories. From statement jewelry to perfect bags, learn how to elevate your style game.",
      image:
        "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Anna Thompson",
      date: "March 3, 2024",
      category: "Accessories",
      readTime: "5 min read",
      views: "1.9k",
      likes: 201,
      isNew: false,
    },
    {
      id: 7,
      title: "Street Style Inspiration from Around the World",
      excerpt:
        "Explore global fashion influences and street style trends. Get inspired by fashion-forward looks from major cities worldwide.",
      image:
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "David Kim",
      date: "March 1, 2024",
      category: "Street Style",
      readTime: "6 min read",
      views: "3.1k",
      likes: 267,
      isNew: true,
    },
    {
      id: 8,
      title: "The Psychology of Fashion: What Your Clothes Say About You",
      excerpt:
        "Discover how clothing choices affect perception and confidence. The fascinating connection between fashion and psychology.",
      image:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Dr. Rachel Green",
      date: "February 28, 2024",
      category: "Psychology",
      readTime: "9 min read",
      views: "2.5k",
      likes: 334,
      isNew: false,
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Fashion Trends": "bg-pink-500",
      Sustainability: "bg-green-500",
      "Styling Tips": "bg-blue-500",
      "Color Theory": "bg-purple-500",
      "Budget Fashion": "bg-orange-500",
      Accessories: "bg-red-500",
      "Street Style": "bg-indigo-500",
      Psychology: "bg-teal-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Latest Fashion Insights
        </h2>
        <p className="text-gray-600">
          Stay updated with the latest trends, tips, and inspiration
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id} className="py-4">
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* New Badge */}
              {post.isNew && (
                <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  NEW
                </div>
              )}

              {/* Category Badge */}
              <div
                className={`absolute top-4 right-4 z-10 rounded-full ${getCategoryColor(post.category)} px-3 py-1 text-xs font-medium text-white shadow-lg`}
              >
                {post.category}
              </div>

              {/* Like Button */}
              <div className="absolute top-16 right-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-pink-50 hover:text-pink-500">
                  <FaHeart
                    size={16}
                    className="transition-colors duration-300"
                  />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FaUser className="mr-1" size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="q mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                {/* Stats and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaEye className="mr-1" size={12} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center">
                      <FaHeart className="mr-1" size={12} />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <button className="group/btn flex items-center text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700">
                    Read More
                    <FaArrowRight
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                      size={12}
                    />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-blue-200"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogSection;
