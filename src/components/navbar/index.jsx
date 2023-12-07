import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import "./index.css";
function Navbar() {
  return (
    <div className="main">
      <Logo />
      <ThemeToggle label="Dark Mode" />
    </div>
  );
}

export default Navbar;
