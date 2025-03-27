import { cn } from "@/lib/utils";
import { ArrowRight, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  return <section id="team" className="bg-white py-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">Our Team</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Researchers & Collaborators</h2>
          <p className="text-lg text-gray-600">Subheader here</p>
        </div>

        {/* Meet Our Team section - now displayed first */}
        <div className="bg-gradient-to-r from-glucose-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in p-8 md:p-12 text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet The Team</h3>
              <p className="text-gray-700 mb-6">Learn more about the talented individuals behind our research.</p>
              <Link to="/team">
                <Button className="group">
                  View Team Members
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <Users className="w-32 h-32 text-glucose-600" />
            </div>
          </div>
        </div>

        {/* Collaborators grid - now displayed second */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((org, index) => <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="p-6 flex flex-col items-center text-center h-full">
                {org.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">{org.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};