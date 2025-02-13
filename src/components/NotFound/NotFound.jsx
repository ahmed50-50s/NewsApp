export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-380 bg-gray-100 p-6">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">الصفحة غير موجودة</h2>
        <p className="text-lg text-gray-600 text-center max-w-md">
          عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. تأكد من الرابط أو عد إلى الصفحة الرئيسية.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-2 bg-white rounded-lg shadow-md hover:bg-blue-600 transition hover:text-red-500"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    );
  }
  