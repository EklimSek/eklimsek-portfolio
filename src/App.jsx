import PillNav from "./components/PillNav";
import ProfileCard from "./components/ProfileCard";
import { About, Skills, Projects, Education, Contact } from "./components/Sections";

export default function App() {
  return (
    <>
      <PillNav />
      <div className="app-shell">

        <div className="left-column">
          <ProfileCard />
        </div>

        <main className="right-column">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <footer>Built by Eklim — React + Vite</footer>
        </main>

      </div>
    </>
  );
}
