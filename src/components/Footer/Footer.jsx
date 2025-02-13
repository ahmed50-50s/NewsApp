export default function Footer() {
    return (
      <footer className="bg-black text-green-600 py-6 mt-10">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/News" className="hover:underline">News</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/About" className="hover:underline">About Us</a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Business St, City, Country</p>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  