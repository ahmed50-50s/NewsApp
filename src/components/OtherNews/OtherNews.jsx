export default function OtherNews() {
  return (
    <div className="w-full md:w-1/3 bg-gray-800 rounded-lg m-4 p-2">
      <h2 className="text-white text-base sm:text-lg font-semibold mb-3 text-center">
        أخبار أخرى
      </h2>

      <div className="flex flex-col gap-3">
        {/* الخبر الأول */}
        <div className="flex flex-col sm:flex-row items-center bg-gray-900 rounded-lg p-2 gap-2">
          <img
            src="https://www.tech-wd.com/wd/wp-content/uploads/2025/02/Egypt-Ventures-giza-systems.jpg"
            alt="خبر 1"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md"
          />
          <div className="text-center sm:text-right">
            <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2">
              شراكة استراتيجية بين Giza Systems و Egypt Ventures لدعم الشركات
              الناشئة
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold py-1 px-2 sm:px-3 rounded-lg transition">
              التفاصيل
            </button>
          </div>
        </div>

        {/* الخبر الثاني */}
        <div className="flex flex-col sm:flex-row items-center bg-gray-900 rounded-lg p-2 gap-2">
          <img
            src="https://www.aljazeera.net/wp-content/uploads/2022/01/RTX7GR8D.jpg?resize=1920%2C1440"
            alt="خبر 2"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md"
          />
          <div className="text-center sm:text-right">
            <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2">
              الاقتصاد العالمي يواجه تحديات جديدة في عام 2025
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold py-1 px-2 sm:px-3 rounded-lg transition">
              التفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
