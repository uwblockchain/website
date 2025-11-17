import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    // No outer spacing or backgrounds; inherits page backdrop.
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/transparent logo for website copy 2.png"
              alt="UW Blockchain Society logo"
              width={128}
              height={128}
              className="h-8 md:h-10 w-auto"
              unoptimized
              priority
            />

            <nav className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-sm text-muted hover:text-white">About</Link>
              <Link href="#focus" className="text-sm text-muted hover:text-white">Focus</Link>
              <Link href="#events" className="text-sm text-muted hover:text-white">Events</Link>
              <Link href="#sponsors" className="text-sm text-muted hover:text-white">Sponsors</Link>
              <Link href="#team" className="text-sm text-muted hover:text-white">Team</Link>
              <a href="mailto:blockchn@uw.edu?subject=Apply%20to%20UW%20Blockchain" className="text-sm text-muted hover:text-white">Apply</a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-6 md:justify-end">
              <a href="mailto:blockchn@uw.edu" className="text-muted hover:text-white">Contact</a>
              <a href="https://twitter.com/udubblockchain" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">Twitter</a>
              <a href="https://www.instagram.com/uwblockchain/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">Instagram</a>
            </div>
            <p className="text-xs text-muted md:text-right">© {new Date().getFullYear()} UW Blockchain Society. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link href="#about" className="text-sm text-muted hover:text-white">About</Link>
            <Link href="#focus" className="text-sm text-muted hover:text-white">Focus</Link>
            <Link href="#events" className="text-sm text-muted hover:text-white">Events</Link>
            <Link href="#sponsors" className="text-sm text-muted hover:text-white">Sponsors</Link>
            <Link href="#team" className="text-sm text-muted hover:text-white">Team</Link>
            <a href="mailto:blockchn@uw.edu?subject=Apply%20to%20UW%20Blockchain" className="text-sm text-muted hover:text-white">Apply</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}