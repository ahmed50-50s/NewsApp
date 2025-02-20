import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-right">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 mb-6 flex justify-center">
          تواصل معنا
        </h1>

        <p className=" text-green-500 mb-6">
          هل لديك استفسار أو اقتراح؟ لا تتردد في التواصل معنا، نحن هنا لمساعدتك!
        </p>

        {/* نموذج الاتصال */}
        <form className="space-y-4 text-green-500">
          <input
            type="text"
            placeholder="الاسم الكامل"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
          />
          <textarea
            rows="4"
            placeholder="اكتب رسالتك هنا..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            إرسال الرسالة
          </button>
        </form>

        {/* معلومات الاتصال */}
        <div className="mt-8 text-green-500">
          <div className="flex items-center gap-2 mb-2 justify-end">
            <span>القاهرة، مصر</span>
            <FaMapMarkerAlt className="text-green-600" />
          </div>
          <div className="flex items-center gap-2 mb-2 justify-end">
            <span>+20 123 456 7890</span>
            <FaPhoneAlt className="text-green-600" />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span>news@example.com</span>
            <FaEnvelope className="text-green-600" />
          </div>
        </div>

        {/* روابط التواصل الاجتماعي */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
