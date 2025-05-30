import TopBar from "../Layout/TopBar";
import Navbar from "../Layout/Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
    {/* Top Bar */}
    <TopBar />
    {/* Navbar */}
    <Navbar />
    {/* Cart Drawer */}
    </header>
  )
}

export default Header