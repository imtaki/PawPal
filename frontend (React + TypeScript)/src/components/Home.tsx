import Features from './Features';
import Testimonial from './Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-950">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">

              <h1 className="text-7xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                  Smart Pet Care
                </span>
                <span className="block text-white mt-2">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl text-blue-100/80 max-w-xl">
                Transform your pet care routine with intelligent tracking, health monitoring, and smart reminders. The future of pet care is here.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="relative group px-8 py-4 bg-white rounded-xl font-semibold text-blue-950 transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.3)]">
                  Get Started
                  <span className="absolute inset-0 rounded-xl bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button className="px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-white">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-blue-200/80">Happy Pets</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-200/80">Satisfaction</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200/80">Support</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block ">
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform rotate-6 animate-float">
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/30 rounded-2xl transform rotate-12 animate-float-delay" />
                <div className="absolute -right-12 bottom-10 w-32 h-32 bg-violet-500/20 rounded-full transform -rotate-12 animate-float-slow" />
                

                <div className="absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 mb-4" />
                    <div className="h-3 w-3/4 bg-white/20 rounded-full mb-3" />
                    <div className="h-3 w-1/2 bg-white/15 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating geometric shapes */}
              <div className="absolute left-20 top-00 w-20 h-20 border-4 border-blue-400/30 rounded-xl transform rotate-45 animate-float-slow" />
              <div className="absolute right-40 bottom-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full animate-float-delay" />
              
              {/* Glowing orb */}
              <div className="absolute left-40 bottom-40 w-24 h-24 bg-gradient-to-r from-blue-400/40 to-violet-400/40 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="py-20 bg-gray-100">
        <Features />
      </section>

      <section className="py-20 bg-gradient-to-r from-white to-gray-50">
        <Testimonial />
      </section>
    </>
  );
};

export default Home;


