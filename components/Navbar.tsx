import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-600">
          SmartVisa.mn
        </Link>
        <div className="flex space-x-2">
          <Link href="/login" passHref>
            <Button variant="outline" size="sm" asChild>
              <h3> Log in</h3>
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button size="sm" asChild>
              <h3>Sign up</h3>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
