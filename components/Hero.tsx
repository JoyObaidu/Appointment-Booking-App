import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Life with Online Coaching
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Schedule one-on-one sessions with expert coaches and start achieving your goals today.
          </p>
          <div className="flex space-x-4">
            <a
              href="#booking"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Column (Image placeholder) */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-80 h-80 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
            <span className="text-xl font-semibold"><Image
  src="/assets/images/dots.png"
  alt="Hero Image"
  width={320}
  height={320}
  className="rounded-xl w-full max-w-xs md:max-w-md"
/>
</span>
          </div>
        </div>

      </div>
    </section>
  );
}
