import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-500 text-white px-6">
      <div className="relative w-72 h-72">
        <Image
          src="/rick-morty-portal.png"
          alt="Rick and Morty Portal"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h1 className="text-7xl font-extrabold drop-shadow-lg">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-center">
        &quot;Ah be Morty, yanlış bir yere ışınlandık!&quot;
      </h2>
      <p className="text-lg mt-2 text-center text-white/80">
        Bu boyutta böyle bir sayfa yok. Belki başka bir evrende olabilir!
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-yellow-500 text-black text-lg font-medium rounded-lg shadow-md hover:bg-yellow-600 transition-all"
        >
          Karakterlere Git
        </Link>
      </div>

      <p className="mt-4 text-white/70 text-sm">
        Eğer buraya yanlışlıkla geldiyseniz,{' '}
        <a
          href="https://github.com/eaabak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:underline"
        >
          bize ulaşın
        </a>
        .
      </p>
    </div>
  );
}
