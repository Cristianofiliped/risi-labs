import { Activity, Brain, Database, HeartPulse } from "lucide-react";
export const AboutSection = () => {
  return <section id="about" className="bg-white py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Our Mission
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Actionable insights to People with Diabetes and their healthcare practitioners.</h2>
          <p className="text-lg text-gray-600">Utilizing semi-supervised learning and causal machine-learning techniques, we aim to improve blood glucose level outcomes to mitigate short-term risk and improve long-term quality of life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
          icon: <Database className="w-8 h-8 text-glucose-600 mb-4" />,
          title: "Data-Driven Insights",
          description: "Leveraging machine learning to extract powerful insights from blood glucose time-series data."
        }, {
          icon: <Brain className="w-8 h-8 text-glucose-600 mb-4" />,
          title: "Intelligent Forecasting",
          description: "Creating nocturnal forecasting models to predict and prevent low blood sugar events at night."
        }, {
          icon: <Activity className="w-8 h-8 text-glucose-600 mb-4" />,
          title: "Personalized Management",
          description: "Developing causal machine learning techniques to suggest optimal treatments based on individual profiles."
        }, {
          icon: <HeartPulse className="w-8 h-8 text-glucose-600 mb-4" />,
          title: "Improved Health Outcomes",
          description: "Providing actionable insights to PWDs and their care practitioners to enhance quality of life."
        }].map((feature, index) => <div key={index} className="feature-card" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>

        <div className="mt-20 bg-gradient-to-r from-glucose-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm animate-fade-in">
          
        </div>
      </div>
    </section>;
};