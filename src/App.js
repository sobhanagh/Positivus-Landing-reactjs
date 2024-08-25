import CaseStudies from "./components/CaseStudies";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OnWorkingProcess from "./components/OnWorkingProcess";
import Services from "./components/Services";


function App() {
  return (
    <div className="mb-10">
      <Navbar />
      <HomePage />
      <Services />
      <CaseStudies />
      <OnWorkingProcess />
    </div>
  );
}

export default App;
