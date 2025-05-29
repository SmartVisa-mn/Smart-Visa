import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-16 px-4">
      {/* Hero Section */}
      <section className="bg-green-500 text-white shadow-md py-20 px-6 sm:px-12 lg:px-24 rounded-lg text-center max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Smartvisa-д тавтай морил
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Your seamless path to a successful visa application. Easy, fast,
          reliable.
        </p>
        <Link href="/application/step1">
          <Button size="lg">Get Started</Button>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Fast Processing</h2>
          <p className="text-gray-600">
            Streamlined steps ensure you get results quickly.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Secure Uploads</h2>
          <p className="text-gray-600">
            Documents encrypted and safely stored.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">24/7 Support</h2>
          <p className="text-gray-600">
            Our team is here anytime for assistance.
          </p>
        </div>
      </section>
    </main>
  );
}
