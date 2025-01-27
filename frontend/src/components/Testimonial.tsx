import testimonials from "../data";

const Testimonial: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-800 drop-shadow-sm">
        What Pet Owners Say About PawPal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map(({ id, name, pet, text, profilePic }) => (
          <div
            key={id}
            className="p-10 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative mb-8">
              <img
                className="h-24 w-24 rounded-full mx-auto object-cover ring-4 ring-blue-500/50 shadow-lg"
                src={profilePic}
                alt={`Profile picture of ${name}`}
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                  Verified Owner
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed text-center">{text}</p>
            <h3 className="text-xl font-bold text-blue-800 text-center">{name} & {pet}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};export default Testimonial;
