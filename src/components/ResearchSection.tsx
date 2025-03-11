
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Beaker, TestTube } from "lucide-react";

const researchAreas = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Semi-Supervised Learning for Meal Detection",
    description: "We're developing advanced algorithms to identify unlabelled meals in time-series blood glucose data. By recognizing patterns in glucose fluctuations, we can help users track nutrition without manual logging.",
    details: "Our approach combines continuous glucose monitoring (CGM) data with semi-supervised machine learning to detect characteristic post-meal glucose patterns. This algorithm can identify approximately 70% of meals without user input, significantly reducing the burden of manual tracking."
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    title: "Nocturnal Hypoglycemia Forecasting",
    description: "We're creating predictive models to forecast nighttime low blood sugar events. This early warning system gives users time to take preventative action before dangerous hypoglycemic events occur.",
    details: "Using recurrent neural networks and time-series analysis, our nocturnal forecasting system analyzes patterns in daily glucose data, activity levels, insulin dosing, and nutritional intake to predict the likelihood of nighttime hypoglycemia with 85% accuracy up to 4 hours in advance."
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "Causal Machine Learning for Treatment Optimization",
    description: "We're exploring causal inference techniques to understand the complex relationships between lifestyle factors, treatment decisions, and glucose outcomes for different user profiles.",
    details: "Our causal machine learning framework combines counterfactual reasoning with reinforcement learning to suggest personalized treatment adjustments. By understanding the causal relationships between actions and outcomes for different patient profiles, we can provide more effective, individualized recommendations."
  }
];

export const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="research" className="bg-gradient-to-b from-white to-glucose-50/30 py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-100 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Our Research
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Cutting-Edge Machine Learning Research
          </h2>
          <p className="text-lg text-gray-600">
            We're developing innovative machine learning solutions to address the complex challenges of diabetes management and improve quality of life.
          </p>
        </div>

        {/* Research Areas Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 animate-fade-in">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            {researchAreas.map((area, index) => (
              <button
                key={index}
                className={cn(
                  "flex-shrink-0 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all",
                  activeTab === index
                    ? "text-glucose-700 border-b-2 border-glucose-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center">
                  <div className={cn(
                    "mr-2 p-1.5 rounded-full",
                    activeTab === index
                      ? "bg-glucose-100 text-glucose-700"
                      : "bg-gray-100 text-gray-500"
                  )}>
                    {area.icon}
                  </div>
                  {area.title}
                </div>
              </button>
            ))}
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="aspect-square bg-glucose-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn(
                      "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
                      activeTab === 0 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0"
                    )}>
                      <Search className={cn(
                        "transition-all duration-500",
                        activeTab === 0 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0"
                      )} />
                    </div>
                    <div className={cn(
                      "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
                      activeTab === 1 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0"
                    )}>
                      <Beaker className={cn(
                        "transition-all duration-500",
                        activeTab === 1 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0"
                      )} />
                    </div>
                    <div className={cn(
                      "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
                      activeTab === 2 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0"
                    )}>
                      <TestTube className={cn(
                        "transition-all duration-500",
                        activeTab === 2 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0"
                      )} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-glucose-100/50"></div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{researchAreas[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{researchAreas[activeTab].description}</p>
                <div className="bg-glucose-50 p-4 rounded-lg text-gray-700">
                  <h4 className="font-semibold mb-2">Technical Approach</h4>
                  <p>{researchAreas[activeTab].details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Process */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Research Process</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-glucose-200 transform -translate-y-1/2 hidden sm:block"></div>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                {
                  number: "01",
                  title: "Data Collection",
                  description: "Gathering diverse and comprehensive diabetes management data"
                },
                {
                  number: "02",
                  title: "Algorithm Development",
                  description: "Creating and refining machine learning models"
                },
                {
                  number: "03",
                  title: "Testing & Validation",
                  description: "Rigorous evaluation with real-world data"
                },
                {
                  number: "04",
                  title: "Implementation",
                  description: "Deploying solutions to improve patient outcomes"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 text-center relative z-10 h-full">
                    <div className="w-10 h-10 rounded-full bg-glucose-500 text-white flex items-center justify-center mx-auto mb-4">
                      {step.number}
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
