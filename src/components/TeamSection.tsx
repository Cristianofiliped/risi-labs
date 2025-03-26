import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
const teamMembers = [{
  name: "Dr. Sarah Chen",
  role: "Lead Research Scientist",
  bio: "PhD in Machine Learning with focus on healthcare applications. 10+ years of experience in diabetes research.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
}, {
  name: "Prof. Michael Rahman",
  role: "Principal Investigator",
  bio: "Professor of Biomedical Engineering with expertise in glucose monitoring systems and AI.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
}, {
  name: "Dr. Emily Watkins",
  role: "Data Scientist",
  bio: "Specialist in time-series analysis and predictive modeling for medical applications.",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
}, {
  name: "Dr. James Wilson",
  role: "ML Engineer",
  bio: "Expert in causal inference and reinforcement learning with healthcare background.",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
}];
export const TeamSection = () => {
  return <section id="team" className="bg-white py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Our Team
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Collaborations</h2>
          <p className="text-lg text-gray-600">Blood Glucose Control is a design team with WAT.ai and Gluroo Imaginations Inc.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="aspect-square overflow-hidden">
                
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
            </div>)}
        </div>

        <div className="mt-20 bg-gradient-to-r from-glucose-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Text Here</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">Text here</p>
            
          </div>
        </div>
      </div>
    </section>;
};