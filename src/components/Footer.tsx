
import { ArrowUpIcon, Heart } from "lucide-react";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-gray-50 border-t border-gray-200">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg mr-2 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/94d02c19-eb94-480c-a81f-06f80c5b0cb8.png" 
                  alt="Risi Lab Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Risi Lab</h3>
                <p className="text-sm text-gray-600">Simplifying Diabetes with Machine Learning</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Research</h4>
              <ul className="space-y-2">
                <li><a href="#research" className="text-gray-600 hover:text-glucose-600 text-sm">Our Approach</a></li>
                <li><a href="#research" className="text-gray-600 hover:text-glucose-600 text-sm">Publications</a></li>
                
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Team</h4>
              <ul className="space-y-2">
                <li><a href="#team" className="text-gray-600 hover:text-glucose-600 text-sm">About Us</a></li>
                
                <li><a href="#contact" className="text-gray-600 hover:text-glucose-600 text-sm">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Glucose Control Research. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button onClick={scrollToTop} className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 mr-4" aria-label="Scroll to top">
              <ArrowUpIcon className="w-5 h-5 text-glucose-600" />
            </button>
            
            <p className="text-sm text-gray-600 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-glucose-600" /> for people with diabetes
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
