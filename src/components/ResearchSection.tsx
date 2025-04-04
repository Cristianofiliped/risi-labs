
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const researchAreas = [{
  image: "/lovable-uploads/93d9b27d-429e-4d4e-bf46-edd5d02879c9.png",
  title: "Automatic Meal Identification",
  description: "This team focuses on the semi-supervised change point detection problem of identifying when meals occur from blood glucose concentration time series data.",
  details: "Our approach combines continuous glucose monitoring (CGM) data with semi-supervised machine learning to detect characteristic post-meal glucose patterns. This algorithm can identify approximately 70% of meals without user input, significantly reducing the burden of manual tracking.",
  alt: "MI - Meal Identification robot icon with pizza"
}, {
  image: "/lovable-uploads/f8e6db75-fc11-4fc6-b52e-a2050a606ab6.png",
  title: "Nocturnal Hypoglycemic Probabilistic Forecasting",
  description: "This team focuses on probabilistic forecasting of blood glucose concentrations when type 1 diabetics are sleeping to help predict when hypoglycemic events are likely to occur.",
  details: "Using recurrent neural networks and time-series analysis, our nocturnal forecasting system analyzes patterns in daily glucose data, activity levels, insulin dosing, and nutritional intake to predict the likelihood of nighttime hypoglycemia with 85% accuracy up to 4 hours in advance.",
  alt: "NF - Nocturnal Forecasting robot with sleep hat"
}, {
  image: "/lovable-uploads/3b4ff8e9-282f-4416-83d6-0e2bd07e9ae2.png",
  title: "Causal Blood Glucose Dynamics",
  description: "This team focuses on developing causal models for better understanding of blood glucose dynamics.",
  details: "Our causal machine learning framework combines counterfactual reasoning with reinforcement learning to suggest personalized treatment adjustments. By understanding the causal relationships between actions and outcomes for different patient profiles, we can provide more effective, individualized recommendations.",
  alt: "CM - Causal Modeling robot icon"
}, {
  image: "/lovable-uploads/ef13386b-19cc-43d9-872f-9d59e1c449fd.png",
  title: "RL Insulin Pump",
  description: "This team focuses on developing reinforcement learning models that operate basal-bolus controllers to maximize time in the range of type-1 diabetics.",
  details: "Our reinforcement learning approach optimizes insulin delivery through adaptive basal rates and bolus recommendations. Through continuous learning from patient data, the system improves glycemic control by predicting optimal insulin dosing patterns tailored to individual metabolic responses.",
  alt: "RL - Reinforcement Learning robot with insulin pump"
}];

export const ResearchSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(researchAreas.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  return <section id="research" className="bg-gradient-to-b from-white to-glucose-50/30 py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-glucose-100 text-glucose-700 font-medium px-4 py-1 rounded-full text-sm">Our Research</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Research Interests</h2>
          <p className="text-lg text-gray-600 mb-8">We're developing innovative machine learning solutions to address the complex challenges of diabetes management and improve quality of life.</p>
        </div>

        {/* Alternating Research Areas */}
        <div className="space-y-16">
          {researchAreas.map((area, index) => <div key={index} className={cn("grid md:grid-cols-2 gap-8 items-center animate-fade-in", index % 2 === 1 ? "md:grid-flow-dense" : "")} style={{
          animationDelay: `${0.2 * index}s`
        }}>
              <div className={cn("order-2", index % 2 === 1 ? "md:order-1" : "md:order-2")}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="bg-glucose-50 p-4 rounded-lg text-gray-700">
                  <h4 className="font-semibold mb-2">Technical Approach</h4>
                  <p>{area.details}</p>
                </div>
              </div>
              
              <div className={cn("order-1 flex items-center justify-center relative p-4", index % 2 === 1 ? "md:order-2" : "md:order-1")}>
                {!imagesLoaded[index] && (
                  <Skeleton className="w-64 h-64 rounded-lg" />
                )}
                <img 
                  src={area.image} 
                  alt={area.alt} 
                  className="max-w-full max-h-64 object-contain"
                  onLoad={() => handleImageLoad(index)}
                  style={{ visibility: imagesLoaded[index] ? 'visible' : 'hidden' }}
                />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
