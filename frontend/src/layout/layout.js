import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer";
import Routers from "../routes/Routers.js";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
}
