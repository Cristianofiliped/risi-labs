import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const teamMembers = [
// TPMs first
{
  name: "Christopher Risi",
  role: "TPM - Multiple Teams",
  bio: "PhD, Computer Science, 2026",
  subteams: ["Nocturnal Hypoglycemic Forecasting", "RL Insulin Pump", "Automatic Meal Identification", "Casual Blood Glucose Dynamics", "Benchmark"],
  social: {
    email: "cjrisi@uwaterloo.ca",
    github: "https://github.com/RobotPsychologist",
    linkedin: "https://www.linkedin.com/in/christopherrisi/"
  }
}, {
  name: "Dvir Zagury-Grynbaum",
  role: "TPM - Casual Blood Glucose Dynamics",
  bio: "BS Mathematical Physics, 2026",
  subteams: ["Casual Blood Glucose Dynamics"],
  social: {
    email: "dzagury@uwaterloo.ca",
    github: "https://github.com/dvirzg",
    linkedin: "www.linkedin.com/in/dvirzagury"
  }
},
// Rest of the team
{
  name: "Tony Chan",
  role: "Developer",
  bio: "BASc, Computer Engineering, 2027",
  subteams: ["Nocturnal Hypoglycemic Forecasting", "RL Insulin Pump", "Automatic Meal Identification", "Benchmark"],
  social: {
    linkedin: "https://www.linkedin.com/in/tony-chan-a871a1254/"
  }
}, {
  name: "Andrew Zhan",
  role: "Researcher",
  bio: "BBA(WLU) & BCS(UW) Double Degree",
  subteams: ["RL Insulin Pump"],
  social: {
    linkedin: "https://www.linkedin.com/in/tianyi-zhan/"
  }
}, {
  name: "Gavin Katz",
  role: "Researcher",
  bio: "BASc, Biomedical Engineering, 2027",
  subteams: ["Nocturnal Hypoglycemic Forecasting", "RL Insulin Pump", "Automatic Meal Identification"],
  social: {
    linkedin: "https://www.linkedin.com/in/gavin-katz-89990321b"
  }
}, {
  name: "Cristiano Da Silva",
  role: "Researcher",
  bio: "BaSc, Mechanical Engineering, 2029",
  subteams: ["Nocturnal Hypoglycemic Forecasting"],
  social: {
    linkedin: "https://www.linkedin.com/in/cristianofdasilva/"
  }
}, {
  name: "Vilohith Rao",
  role: "Researcher",
  bio: "BCS, Computer Science, 2028",
  subteams: ["Nocturnal Hypoglycemic Forecasting"],
  social: {
    linkedin: "https://www.linkedin.com/in/vilohith-rao-966295213/"
  }
}, {
  name: "Jonathan Gong",
  role: "Researcher",
  bio: "BCS, Computer Science, 2029",
  subteams: ["Casual Blood Glucose Dynamics"],
  social: {
    linkedin: "https://ca.linkedin.com/in/jonathan-gong-005491263"
  }
}, {
  name: "Nathan Lu",
  role: "Researcher",
  bio: "BASc, Management Engineering, 2028",
  subteams: ["Casual Blood Glucose Dynamics"],
  social: {
    email: "lunathan2005@gmail.com",
    github: "https://github.com/NathanL15",
    linkedin: "https://www.linkedin.com/in/nathan-lu-/"
  }
}, {
  name: "Yimeng Xie",
  role: "Researcher",
  bio: "BCS, Computer Science, 2026",
  subteams: ["RL Insulin Pump"],
  social: {
    linkedin: "https://www.linkedin.com/in/yimeng-xie-381382213/"
  }
}, {
  name: "Alyssa D'Souza",
  role: "Researcher",
  bio: "BSE, Software Engineering, 2026",
  subteams: ["Nocturnal Hypoglycemic Forecasting", "RL Insulin Pump"],
  social: {
    website: "https://alyssadsouza.github.io/"
  }
}, {
  name: "Sneha Rao",
  role: "Researcher",
  bio: "MEng co-op, Electrical and Computer Engineering, 2025",
  subteams: ["Casual Blood Glucose Dynamics"],
  social: {
    github: "https://github.com/sneha3799",
    linkedin: "https://www.linkedin.com/in/sneha-rao-634264164/"
  }
}];
const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Research Team</h1>
            <p className="text-xl text-gray-600">Meet the talented individuals driving innovation in diabetes research</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in" style={{
            animationDelay: `${0.05 * index}s`
          }}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-glucose-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.bio}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {member.subteams.map((subteam, idx) => <span key={idx} className="inline-block bg-glucose-50 text-glucose-700 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
                        {subteam}
                      </span>)}
                  </div>
                  <div className="flex space-x-3">
                    {member.social?.email && <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-glucose-600 transition-colors">
                        <Mail size={18} />
                      </a>}
                    {member.social?.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glucose-600 transition-colors">
                        <Linkedin size={18} />
                      </a>}
                    {member.social?.github && <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glucose-600 transition-colors">
                        <Github size={18} />
                      </a>}
                    {member.social?.website && <a href={member.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glucose-600 transition-colors">
                        Website
                      </a>}
                  </div>
                </div>
              </div>)}
          </div>

          <div className="bg-gradient-to-r from-glucose-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in p-8 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Interested in Contributing?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Please inquire with Christopher Risi  about potential opportunities to contribute.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default TeamPage;
