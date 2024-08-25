import CaseStudies from "./components/CaseStudies";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
  return (
    <div className="mb-10">
      <Navbar />
      <HomePage />
      <Services />
      <CaseStudies />
    </div>
  );
}

export default App;
