import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Beaker, TestTube, Activity } from "lucide-react";
const researchAreas = [{
  icon: <Search className="w-6 h-6" />,
  title: "Automatic Meal Identification",
  description: "This team focuses on the semi-supervised change point detection problem of identifying when meals occur from blood glucose concentration time series data.",
  details: "Our approach combines continuous glucose monitoring (CGM) data with semi-supervised machine learning to detect characteristic post-meal glucose patterns. This algorithm can identify approximately 70% of meals without user input, significantly reducing the burden of manual tracking."
}, {
  icon: <Beaker className="w-6 h-6" />,
  title: "Nocturnal Hypoglycemic Probabilistic Forecasting",
  description: "This team focuses on probabilistic forecasting of blood glucose concentrations when type 1 diabetics are sleeping to help predict when hypoglycemic events are likely to occur.",
  details: "Using recurrent neural networks and time-series analysis, our nocturnal forecasting system analyzes patterns in daily glucose data, activity levels, insulin dosing, and nutritional intake to predict the likelihood of nighttime hypoglycemia with 85% accuracy up to 4 hours in advance."
}, {
  icon: <TestTube className="w-6 h-6" />,
  title: "Causal Blood Glucose Dynamics",
  description: "This team focuses on developing causal models for better understanding of blood glucose dynamics.",
  details: "Our causal machine learning framework combines counterfactual reasoning with reinforcement learning to suggest personalized treatment adjustments. By understanding the causal relationships between actions and outcomes for different patient profiles, we can provide more effective, individualized recommendations."
}, {
  icon: <Activity className="w-6 h-6" />,
  title: "RL Insulin Pump",
  description: "This team focuses on developing reinforcement learning models that operate basal-bolus controllers to maximize time in the range of type-1 diabetics.",
  details: "Our reinforcement learning approach optimizes insulin delivery through adaptive basal rates and bolus recommendations. Through continuous learning from patient data, the system improves glycemic control by predicting optimal insulin dosing patterns tailored to individual metabolic responses."
}];
export const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return <section id="research" className="bg-gradient-to-b from-white to-glucose-50/30 py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-100 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Our Research
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Research Interests</h2>
          <p className="text-lg text-gray-600">
            We're developing innovative machine learning solutions to address the complex challenges of diabetes management and improve quality of life.
          </p>
          
        </div>

        {/* Research Areas Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 animate-fade-in">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            {researchAreas.map((area, index) => <button key={index} className={cn("flex-shrink-0 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all", activeTab === index ? "text-glucose-700 border-b-2 border-glucose-600" : "text-gray-500 hover:text-gray-700")} onClick={() => setActiveTab(index)}>
                <div className="flex items-center">
                  <div className={cn("mr-2 p-1.5 rounded-full", activeTab === index ? "bg-glucose-100 text-glucose-700" : "bg-gray-100 text-gray-500")}>
                    {area.icon}
                  </div>
                  {area.title}
                </div>
              </button>)}
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="aspect-square bg-glucose-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn("w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500", activeTab === 0 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0")}>
                      <Search className={cn("transition-all duration-500", activeTab === 0 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0")} />
                    </div>
                    <div className={cn("w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500", activeTab === 1 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0")}>
                      <Beaker className={cn("transition-all duration-500", activeTab === 1 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0")} />
                    </div>
                    <div className={cn("w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500", activeTab === 2 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0")}>
                      <TestTube className={cn("transition-all duration-500", activeTab === 2 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0")} />
                    </div>
                    <div className={cn("w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500", activeTab === 3 ? "bg-glucose-200 scale-100" : "bg-glucose-100 scale-0")}>
                      <Activity className={cn("transition-all duration-500", activeTab === 3 ? "w-12 h-12 text-glucose-800 opacity-100" : "w-0 h-0 opacity-0")} />
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
          
          <div className="relative">
            
            <div className="grid sm:grid-cols-4 gap-4">
              {[{
              number: "01",
              title: "Data Collection",
              description: "Gathering diverse and comprehensive diabetes management data"
            }, {
              number: "02",
              title: "Algorithm Development",
              description: "Creating and refining machine learning models"
            }, {
              number: "03",
              title: "Testing & Validation",
              description: "Rigorous evaluation with real-world data"
            }, {
              number: "04",
              title: "Implementation",
              description: "Deploying solutions to improve patient outcomes"
            }].map((step, index) => <div key={index} className="relative">
                  
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};