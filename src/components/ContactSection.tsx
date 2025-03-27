import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, Mail, MapPin, Phone, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Research Collaboration"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });
      setFormState({
        name: "",
        email: "",
        message: "",
        subject: "Research Collaboration"
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="bg-gradient-to-b from-glucose-50/30 to-white py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-100 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Open Source
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Access Our GitHub</h2>
          <p className="text-lg text-gray-600">Our code and models are open source and available on GitHub. Explore our repositories to learn more about our work and contribute to improving diabetes management.</p>
        </div>

        <div className="">
          <div className="md:col-span-2 animate-fade-in">
            <div className="glass-card p-15 px-[60px] py-[40px]">
              <div className="flex justify-center mb-6">
                <img alt="Glucose Control Research Logo" className="w-100 h-40 object-contain" src="/lovable-uploads/23927433-31b1-49a9-8796-a129decd130a.png" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">GitHub Repository</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">For more information</h4>
                    <p className="text-gray-600">All our models and research code are available on GitHub</p>
                    <a href="https://github.com/Blood-Glucose-Control" target="_blank" rel="noopener noreferrer" className="text-glucose-700 hover:text-glucose-800 font-medium inline-flex items-center mt-2">
                      Visit our GitHub
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-glucose-700">christopher.risi@uwaterloo.ca</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600 py-0">200 University Ave W, Waterloo, ON N2L 3G1</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            
          </div>
        </div>
      </div>
    </section>;
};