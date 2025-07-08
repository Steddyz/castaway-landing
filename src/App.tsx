import Hero from "./components/Hero/Hero.tsx";
import LatestEpisodes from "./components/LatestEpisodes/LatestEpisodes.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestEpisodes />
    </>
  );
}

export default App;
