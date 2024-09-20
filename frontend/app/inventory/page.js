import Footer from "@/components/Footer";
import "/app/globals.css";
import Navbar from "/components/Navbar.js";
import CarInventory from "@/components/CarInventory";

function Inventory() {
  return (
    <main>
      <Navbar />
      <CarInventory />
      <Footer />
    </main>
  );
}

export default Inventory;
