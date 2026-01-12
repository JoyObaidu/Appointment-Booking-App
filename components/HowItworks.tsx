import React from 'react'

const steps = [
  {
    title: "Choose a Session",
    description:
      "Browse available coaching or consultation sessions and select what fits your needs.",
  },
  {
    title: "Schedule a Time",
    description:
      "Pick a date and time that works for you using the built-in scheduling system.",
  },
  {
    title: "Meet Online",
    description:
      "Join the session online and get personalized guidance from your coach.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Booking a session is simple, fast, and fully online.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
