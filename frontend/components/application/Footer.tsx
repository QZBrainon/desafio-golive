import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <LinkedInLogoIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-gray-500">
            <p>
              &copy; {currentYear} Brainon Queiroz - Todos os direitos
              reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
