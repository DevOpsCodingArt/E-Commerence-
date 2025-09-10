import TopStrip from "./TopStrip";
import MiddelStrip from "./MiddleStrip";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-white">
      <div className="top_strip border-t-1 border-b-1 py-2">
        <div className="container flex items-center">
          <TopStrip></TopStrip>
        </div>
      </div>
      <div className="middle border-b-1 border-black">
        <MiddelStrip></MiddelStrip>
      </div>

      <Navigation></Navigation>
    </header>
  );
}

export default Header;
