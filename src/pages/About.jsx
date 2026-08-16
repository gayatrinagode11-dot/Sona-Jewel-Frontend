import { useState } from "react";

export default function About() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="bg-[#FFF8F0]">

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
          About Sona Jewels
        </h1>

        <p className="text-lg max-w-3xl mx-auto">
          Crafting timeless jewellery with trust, purity and love since 2020
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-4">

        {/* 2. Our Story */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
            alt="jewellery workshop"
          />

          <div>
            <h2 className="text-3xl font-bold font-serif text-[#8B4513] mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Sona Jewels chi suruvat 2020 madhe Pune madhe zali. Amcha
              uddesh hota ki pratyekala BIS Hallmarked, 100% certified gold
              jewellery parvadnya sarkhya kimtit milavi.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Aaj amhi 10,000+ khush customers la seva deto. Amchi pratyek
              design paramparik + modern mix aahe, jashi ki Tanishq ani Kalyan
              sarkhya mothya brand madhe milte.
            </p>
          </div>

        </section>

        {/* 3. Why Choose Us */}
        <section className="mb-16">

          <h2 className="text-3xl font-bold font-serif text-center text-[#8B4513] mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* 100% Certified Gold */}
            <div
              onClick={() => setSelectedFeature("gold")}
              className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-3">
                💎
              </div>

              <h3 className="font-bold text-xl mb-2">
                100% Certified Gold
              </h3>

              <p className="text-gray-600">
                Sagla jewellery BIS Hallmarked ani lab certified aahe
              </p>
            </div>

            {/* Free & Safe Delivery */}
            <div
              onClick={() => setSelectedFeature("delivery")}
              className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-3">
                🚚
              </div>

              <h3 className="font-bold text-xl mb-2">
                Free & Safe Delivery
              </h3>

              <p className="text-gray-600">
                ₹20,000 var free shipping + insured delivery across India
              </p>
            </div>

            {/* Easy Exchange */}
            <div
              onClick={() => setSelectedFeature("exchange")}
              className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-3">
                🔄
              </div>

              <h3 className="font-bold text-xl mb-2">
                Easy Exchange
              </h3>

              <p className="text-gray-600">
                7 divsat easy return ani lifetime exchange policy
              </p>
            </div>

          </div>
        </section>

        {/* 4. Popup / Modal */}
        {selectedFeature && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedFeature(null)}
          >

            <div
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>

              {/* Gold Content */}
              {selectedFeature === "gold" && (
                <>
                  <div className="text-5xl text-center mb-4">
                    💎
                  </div>

                  <h2 className="text-2xl font-bold text-[#8B4513] text-center mb-4">
                    100% Certified Gold
                  </h2>

                  <p className="text-gray-600 text-center leading-relaxed">
                    Amchi jewellery BIS Hallmarked ani certified gold
                    madhun tayar keli jate. Pratyek product chi purity
                    carefully check keli jate.
                  </p>
                </>
              )}

              {/* Delivery Content */}
              {selectedFeature === "delivery" && (
                <>
                  <div className="text-5xl text-center mb-4">
                    🚚
                  </div>

                  <h2 className="text-2xl font-bold text-[#8B4513] text-center mb-4">
                    Free & Safe Delivery
                  </h2>

                  <p className="text-gray-600 text-center leading-relaxed">
                    ₹20,000 peksha jast order var free shipping available
                    aahe. Jewellery safe packaging madhye insured delivery
                    sobat pathavli jate.
                  </p>
                </>
              )}

              {/* Exchange Content */}
              {selectedFeature === "exchange" && (
                <>
                  <div className="text-5xl text-center mb-4">
                    🔄
                  </div>

                  <h2 className="text-2xl font-bold text-[#8B4513] text-center mb-4">
                    Easy Exchange
                  </h2>

                  <p className="text-gray-600 text-center leading-relaxed">
                    Product madhye problem aslyas applicable policy nusar
                    exchange request karta yeil. Exchange process simple
                    ani customer-friendly aahe.
                  </p>
                </>
              )}

            </div>
          </div>
        )}

        {/* 5. Our Mission */}
        <section className="bg-white p-10 rounded-2xl shadow-lg text-center">

          <h2 className="text-3xl font-bold font-serif text-[#8B4513] mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            "Pratyek stri la tichya special divshi sarvat sundar feel karun
            dene. Amhi fakt jewellery nahi vikto, amhi athvani banavto."
          </p>

        </section>

        {/* 6. Visit Us CTA */}
        <section className="text-center mt-16">

          <h2 className="text-2xl font-bold mb-4">
            Visit Our Store
          </h2>

          <p className="text-gray-700 mb-6">
            FC Road, Pune. Ya ani collection swataha bagha
          </p>

          <a
            href="/contact"
            className="bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6b3410]"
          >
            Contact Us
          </a>

        </section>

      </div>
    </div>
  );
}