export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} PPECA. All rights reserved.</p>

        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
