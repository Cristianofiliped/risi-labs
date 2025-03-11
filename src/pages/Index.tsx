
import { NavBar } from "@/components/NavBar";
import { Main } from "@/components/Main";
import { useEffect } from "react";

const Index = () => {
  // Handle smooth scrolling for hash links
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Main />
    </div>
  );
};

export default Index;
