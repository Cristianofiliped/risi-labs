import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Research Scientist - Nocturnal Forecasting Team",
    bio: "PhD in Machine Learning with focus on healthcare applications. 10+ years of experience in diabetes research.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }, 
  {
    name: "Prof. Michael Rahman",
    role: "Principal Investigator - Causal Blood Glucose Dynamics Team",
    bio: "Professor of Biomedical Engineering with expertise in glucose monitoring systems and AI.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. Emily Watkins",
    role: "Data Scientist - Automatic Meal Identification Team",
    bio: "Specialist in time-series analysis and predictive modeling for medical applications.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. James Wilson",
    role: "ML Engineer - RL Insulin Pump Team",
    bio: "Expert in causal inference and reinforcement learning with healthcare background.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Alex Thompson",
    role: "Software Engineer - Nocturnal Forecasting Team",
    bio: "Specialized in developing robust algorithms for healthcare applications with a focus on real-time monitoring systems.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. Lisa Kumar",
    role: "Biostatistician - Causal Blood Glucose Dynamics Team",
    bio: "Expert in statistical modeling and analysis of healthcare data with emphasis on longitudinal studies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Ryan Martinez",
    role: "Research Assistant - Automatic Meal Identification Team",
    bio: "PhD candidate focusing on machine learning approaches to pattern recognition in continuous glucose data.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. Priya Sharma",
    role: "Clinical Advisor - RL Insulin Pump Team",
    bio: "Endocrinologist with specialty in diabetes technologies and patient-centered care approaches.",
    image: "https://images.unsplash.com/photo-1573497019236-61e7a3e07f36?q=80&w=200&h=200&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

const TeamPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <div className="section-container">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="group mb-4">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">The Team</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in" 
                   style={{ animationDelay: `${0.05 * index}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-glucose-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-glucose-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in p-8 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for talented researchers and engineers passionate about making a difference in diabetes care. 
              Contact us to learn about current opportunities.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
