import TopHeader from "./topHeader";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="pb-4 border-b border-solid border-neutral-80">
      <TopHeader />
      <Nav />
    </header>
  );
}
