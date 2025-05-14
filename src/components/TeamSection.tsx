import { cn } from "@/lib/utils";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const collaborators = [{
  name: "WAT.ai",
  description: "An organization focused on artificial intelligence research and applications.",
  image: "/lovable-uploads/d6220671-7885-4d6a-9fcf-bbd8fa6e32d9.png"
}, {
  name: "Gluroo Imaginations Inc",
  description: "A specialized healthcare technology company developing innovative solutions for diabetes management.",
  image: "/lovable-uploads/db93efb5-0c53-4dcf-9fa5-bbaf45544f04.png"
}, {
  name: "skTime",
  description: "A leading organization specializing in time-series analysis and machine learning applications.",
  image: "/lovable-uploads/7bb2b192-20ab-4a33-abad-2bb1d966315c.png"
}];
export const TeamSection = () => {
  return <section id="team" className="bg-white py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">Our Team</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Research Community</h2>
          <p className="text-lg text-gray-600">Our group features researchers and engineers pursuing computer science, mathematics, and bioinformatics, as well as advocates for diabetes treatment and accessibility.</p>
        </div>

        <div className="text-center mb-16">
          <Link to="/team">
            <Button className="group rounded-sm font-medium px-[24px] py-[30px] text-2xl my-0 mx-0">
              View Full Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-lg text-gray-600">Our work could not be completed without the support from the following organizations. </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((org, index) => <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src={org.image} alt={`${org.name} logo`} className="object-cover w-full h-full p-6" />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 text-sm">{org.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};