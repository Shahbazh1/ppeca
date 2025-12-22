import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white text-gray-800 py-6 px-6">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="text-center text-gray-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-medium">
          Go Back Home
        </button>
      </Link>
      <div className="mt-10">
        <img
          src="/images/svg_images/404-illustration.svg"
          alt="404 illustration"
          className="w-96 mx-auto"
        />
      </div>
    </div>
  );
}
