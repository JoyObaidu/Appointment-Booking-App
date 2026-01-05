export default function Header() {
  return (
   <header className="w-full px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        Efor
      </div>

      <nav className="space-x-6 hidden md:block">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}