import AboutPage from "./components/AboutPage/AboutPage.tsx";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm.tsx";
import Hero from "./components/Hero/Hero.tsx";
import LatestEpisodes from "./components/LatestEpisodes/LatestEpisodes.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestEpisodes />
      <AboutPage />
      <SubscribeForm />
      <Reviews />
    </>
  );
}

export default App;
