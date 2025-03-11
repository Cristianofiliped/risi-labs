import { Activity, Brain, Database, HeartPulse } from "lucide-react";
export const AboutSection = () => {
  return <section id="about" className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-50 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">
              Our Mission
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Transforming diabetes management through intelligent algorithms and data-driven insights
          </h2>
          <p className="text-lg text-gray-600">Our goal is to simplify diabetes management by utilizing semi-supervised learning and causal machine-learning techniques to provide actionable insights that improve blood glucose level outcomes for people with Type 1 Diabetes, enhancing their health and quality of life. </p>
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
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Type 1 Diabetes Challenge</h3>
              <p className="text-gray-700 mb-6">
                Type 1 Diabetes is a complex autoimmune disease affecting nearly 10 million people worldwide. Managing this condition requires constant monitoring and adjustments, creating both mental and physical burden for patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-glucose-100 flex items-center justify-center mr-4">
                    <span className="text-glucose-700 font-bold">10M</span>
                  </div>
                  <span className="text-sm text-gray-600">People affected worldwide</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-glucose-100 flex items-center justify-center mr-4">
                    <span className="text-glucose-700 font-bold">24/7</span>
                  </div>
                  <span className="text-sm text-gray-600">Constant management required</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block h-full bg-gradient-to-br from-glucose-100 to-glucose-200 p-12">
              <div className="aspect-square max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-4 border-4 border-dashed border-glucose-200 rounded-full animate-spin-slow" style={{
                  animationDuration: '30s'
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-glucose-600 mb-2">T1D</div>
                      <div className="text-sm text-gray-500">Type 1 Diabetes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};