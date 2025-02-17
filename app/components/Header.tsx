import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-white text-2xl font-bold tracking-wide">Rick & Morty Api</span>
        </Link>
      </div>
    </header>
  );
}
