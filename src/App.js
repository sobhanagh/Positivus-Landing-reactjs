import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OnWorkingProcess from "./components/OnWorkingProcess";
import Services from "./components/Services";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="mb-10">
      <Navbar />
      <HomePage />
      <Services />
      <CaseStudies />
      <OnWorkingProcess />
      <Teams />
      <ContactUs />
    </div>
  );
}

export default App;
