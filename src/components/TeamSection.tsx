
import { cn } from "@/lib/utils";
import { ArrowRight, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Christopher Risi",
    role: "TPM - Multiple Teams",
    bio: "PhD, Computer Science, 2026",
    social: {
      email: "cjrisi@uwaterloo.ca",
      github: "https://github.com/RobotPsychologist",
      linkedin: "https://www.linkedin.com/in/christopherrisi/"
    }
  },
  {
    name: "Dvir Zagury-Grynbaum",
    role: "TPM - Casual Blood Glucose Dynamics",
    bio: "BS Mathematical Physics, 2026",
    social: {
      email: "dzagury@uwaterloo.ca",
      github: "www.github.com/dvirzg",
      linkedin: "www.linkedin.com/in/dvirzagury"
    }
  }
];

const collaborators = [{
  name: "WAT.ai",
  description: "An organization focused on artificial intelligence research and applications in healthcare.",
  icon: <Building2 className="w-12 h-12 text-glucose-600 mb-4" />
}, {
  name: "Gluroo Imaginations Inc",
  description: "A specialized healthcare technology company developing innovative solutions for diabetes management.",
  icon: <Building2 className="w-12 h-12 text-glucose-600 mb-4" />
}, {
  name: "skTime",
  description: "A leading organization specializing in time-series analysis and machine learning applications.",
  icon: <Building2 className="w-12 h-12 text-glucose-600 mb-4" />
}];

export const TeamSection = () => {
  return (
    <section id="team" className="bg-white py-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">Our Team</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Research Community</h2>
          <p className="text-lg text-gray-600">A passionate group of researchers and engineers dedicated to advancing diabetes care through innovative technology</p>
        </div>

        {/* TPM Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <Users className="w-12 h-12 text-glucose-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-glucose-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Users className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Users className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glucose-600 transition-colors">
                      <Users className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center mb-16">
          <Link to="/team">
            <Button className="group">
              View Full Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Collaborators Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-lg text-gray-600">Working together to advance diabetes research</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((org, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                {org.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
