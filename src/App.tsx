import AboutPage from "./components/AboutPage/AboutPage.tsx";
import Hero from "./components/Hero/Hero.tsx";
import LatestEpisodes from "./components/LatestEpisodes/LatestEpisodes.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestEpisodes />
      <AboutPage />
    </>
  );
}

export default App;
