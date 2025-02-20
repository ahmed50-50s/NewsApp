export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-xl sm:text-3xl font-semibold text-white mb-3">
          الصفحة غير موجودة
        </h2>
        <p className="text-sm sm:text-lg text-gray-400 max-w-md mx-auto">
          عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. تأكد من الرابط أو عد إلى الصفحة الرئيسية.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    </div>
  );
}
