export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Atelier AA
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Crafting exceptional digital experiences
        </p>
        <button className="bg-accent hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
