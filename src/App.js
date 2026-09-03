import React from "react";
import { AppProvider } from "./context/AppContext.jsx";
import "./styles/global.css";
import Navbar from "./Components/NaveBar/Navebar.jsx";
import HeroSection from "./Components/Home/HeroSection/HeroSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import ServicesSection from "./Components/ServicesSection/ServicesSection.jsx";
import ProjectsSection from "./Components/Projects/ProjectsSection.jsx";
import AchievementSection from "./Components/AchievementSection/AchievementSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <section id="home">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="services">
            <ServicesSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="volunteer">
            <AchievementSection />
          </section>
        </main>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );

}

export default App;
