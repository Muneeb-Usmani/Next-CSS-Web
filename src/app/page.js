import Overview from "./overview/page";
import Services from "./services/page";
import Value from "./value/page";
import Visionary from "./visionary/page";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="value">
        <Value />
      </section>

      <section id="visionary">
        <Visionary />
      </section>

      <section id="overview">
        <Overview />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
