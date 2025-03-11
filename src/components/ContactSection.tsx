
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, Mail, MapPin, Phone, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Research Collaboration"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
        duration: 5000,
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

  return (
    <section id="contact" className="bg-gradient-to-b from-glucose-50/30 to-white py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-100 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Open Source
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Access Our Research Models
          </h2>
          <p className="text-lg text-gray-600">
            Our research code and models are open source and available on GitHub. Explore our repositories to learn more about our work and contribute to improving diabetes management.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 animate-fade-in">
            <div className="glass-card p-8">
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/ae4f3d70-008a-4521-9f02-9366ca6c8ba2.png" alt="Glucose Control Research Logo" className="w-40 h-40 object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">GitHub Repository</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Find our code</h4>
                    <p className="text-gray-600">All our models and research code are available on GitHub</p>
                    <a 
                      href="https://github.com/Blood-Glucose-Control" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-glucose-700 hover:text-glucose-800 font-medium inline-flex items-center mt-2"
                    >
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
                    <p className="text-glucose-700">research@glucosecontrol.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">123 Innovation Drive, Research Park, CA 94305</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-glucose-100 rounded-lg text-glucose-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-glucose-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-glucose-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-glucose-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Media Request">Media Request</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-glucose-500 focus:border-transparent transition-all"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all",
                    isSubmitting 
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                      : "bg-glucose-600 hover:bg-glucose-700 text-white"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
