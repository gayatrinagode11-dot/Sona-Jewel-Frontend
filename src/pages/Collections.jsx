
import { Link } from "react-router-dom";

export default function Collections() {
  const collections = [
    {
      title: "Rings Collection",
      description:
        "Discover elegant rings for every special occasion.",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      category: "rings",
    },

    {
      title: "Necklace Collection",
      description:
        "Explore beautiful necklace designs for every style.",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      category: "necklace",
    },

    {
      title: "Earrings Collection",
      description:
        "Find elegant earrings to complete your look.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      category: "earrings",
    },

    {
      title: "Bangles Collection",
      description:
        "Discover timeless bangle designs.",
      image:
        "https://saragandevikaronline.com/image/cache/catalog/19-3-25/GBG-7346%26GBG-7347_1-1500x1500.JPG",
      category: "bangles",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-20 px-4 text-center">

        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
          Our Collections
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Discover jewellery collections designed for every
          special moment of your life.
        </p>

      </section>


      {/* ================= COLLECTIONS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {collections.map((collection) => (

            <div
              key={collection.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-64 object-cover"
              />


              {/* CONTENT */}
              <div className="p-6 text-center">

                <h2 className="text-2xl font-bold font-serif text-[#8B4513] mb-3">
                  {collection.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {collection.description}
                </p>


                {/* EXPLORE */}
                <Link
                  to={`/products?category=${collection.category}`}
                  className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b3410] transition"
                >
                  Explore Collection
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-white py-14 px-4 text-center">

        <h2 className="text-3xl font-bold font-serif text-[#8B4513] mb-4">
          Find Your Perfect Jewellery
        </h2>

        <p className="text-gray-600 mb-6">
          Explore our complete jewellery collection and discover
          something made specially for you.
        </p>

        <Link
          to="/products"
          className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6b3410] transition"
        >
          Shop All Jewellery
        </Link>

      </section>

    </div>
  );
}

