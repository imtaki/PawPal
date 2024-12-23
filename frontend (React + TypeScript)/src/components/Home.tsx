import Features from './Features';
import Testimonial from './Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[url('./src/assets/images/dog.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <div className="text-center bg-black bg-opacity-40 backdrop-blur-sm p-10 max-w-4xl max-h-4xl mx-4">
          <h1 className="text-6xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Simplifying Pet Care
          </h1>
          <p className="mt-8 text-xl sm:text-2xl font-medium text-gray-100 drop-shadow-md max-w-2xl mx-auto">
            Track your pet’s health, manage medical records, and set reminders with ease.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <a
              href="#"
              className="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 transform transition-all"
            >
              Get Started for Free
            </a>
            <a
              href="#features"
              className="rounded-lg border-2 border-white px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <section id="features" className="py-16">
        <Features />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Hear from Our Happy Users
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how PawPal has improved pet care for pet parents worldwide.
          </p>
        </div>
        <Testimonial />
      </section>

    </>
  );
};

export default Home;
