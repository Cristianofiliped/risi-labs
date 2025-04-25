import { ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-glucose-50/60 to-white/30 z-0 bg-glucose-50"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-glucose-200/20 rounded-full filter blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-glucose-100/30 rounded-full filter blur-3xl animate-pulse-gentle" style={{
      animationDelay: "1s"
    }}></div>
      
      <div className="section-container relative z-10 bg-glucose-50">
        <div className="max-w-4xl">
          <div className="inline-block animate-fade-in">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm inline-flex items-center">
              <span className="w-2 h-2 bg-glucose-500 rounded-full mr-2"></span>
              Advanced Diabetes Management Research
            </div>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Simplifying Diabetes Management <span className="whitespace-nowrap">with <span className="text-glucose-600">Machine Learning</span></span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>Developing time-series predictive technology for improved health outcomes.</p>
          
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <button onClick={scrollToAbout} className="bg-glucose-600 hover:bg-glucose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center group">
              Learn More
              <ArrowDownIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <a href="#contact" className="bg-white hover:bg-gray-50 text-glucose-700 border border-glucose-200 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300" aria-label="Scroll down">
          <ArrowDownIcon className="w-5 h-5 text-glucose-600" />
        </button>
      </div>
    </section>;
};