export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-right">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 mb-6 flex justify-center">
          الصفحة الرئيسية
        </h1>

        <p className="text-green-500 mb-6 flex justify-center">
          مرحبًا بك في **News App**، المصدر الأول للأخبار الموثوقة والمحدثة لحظة بلحظة.
        </p>

        <p className="text-gray-400 mb-4 flex justify-center">
          نحن نقدم لك أحدث الأخبار من مصادر موثوقة في مختلف المجالات لتكون دائمًا على اطلاع.
        </p>

        <p className="text-gray-400 flex justify-center">
          تابع آخر التحديثات اليومية حول السياسة، الرياضة، التكنولوجيا، وغيرها، في مكان واحد بسهولة وسرعة.
        </p>
      </div>
    </div>
  );
}
