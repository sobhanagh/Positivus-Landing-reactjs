import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OnWorkingProcess from "./components/OnWorkingProcess";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="mb-10">
      <Navbar />
      <HomePage />
      <Services />
      <CaseStudies />
      <OnWorkingProcess />
      <Teams />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
