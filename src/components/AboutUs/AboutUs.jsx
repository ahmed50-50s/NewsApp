export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-right">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 mb-6 flex justify-center">
          من نحن
        </h1>

        <p className="text-green-500 mb-6">
          مرحبًا بكم في <strong>News App</strong>، مصدر الأخبار الأول لك، حيث نقدم لك أخبارًا دقيقة وشاملة حول العالم.
        </p>

        {/* مهمتنا */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500">مهمتنا</h2>
          <p className="mt-2 text-gray-400">
            نحن ملتزمون بتقديم أخبار موثوقة وتحليلات معمقة حول السياسة، الأعمال، التكنولوجيا، الرياضة، وغيرها.
          </p>
        </section>

        {/* قيمنا */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500">قيمنا</h2>
          <ul className="mt-2 list-disc list-inside text-gray-400">
            <li><strong>المصداقية:</strong> الالتزام بالمعايير الأخلاقية العالية في الصحافة.</li>
            <li><strong>الدقة:</strong> تقديم أخبار موثوقة بعد التحقق منها.</li>
            <li><strong>الشفافية:</strong> عدم التحيز وتقديم الأخبار بحيادية.</li>
            <li><strong>التنوع:</strong> تغطية الأحداث من زوايا متعددة.</li>
            <li><strong>التفاعل:</strong> تشجيع القراء على المشاركة والتفاعل.</li>
          </ul>
        </section>

        {/* لماذا تختارنا */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500">لماذا تختارنا؟</h2>
          <ul className="mt-2 list-disc list-inside text-gray-400">
            <li>تغطية على مدار الساعة لأهم الأخبار العاجلة.</li>
            <li>تحليلات خبراء ومقابلات حصرية.</li>
            <li>مصادر موثوقة وتحقيقات استقصائية.</li>
            <li>تجربة قراءة سهلة وممتعة.</li>
          </ul>
        </section>

        {/* تواصل معنا */}
        <section>
          <h2 className="text-2xl font-semibold text-green-500">تواصل معنا</h2>
          <p className="mt-2 text-gray-400">نرحب بآرائكم واقتراحاتكم، لا تترددوا في التواصل معنا:</p>
          <p className="mt-2 text-gray-300 font-semibold">📧 البريد الإلكتروني: ak728233@gmail.com</p>
          <p className="text-gray-300 font-semibold">🌐 الموقع الإلكتروني: www.newsApp.com</p>
          <p className="text-gray-300 font-semibold">📱 تابعونا على وسائل التواصل الاجتماعي</p>
        </section>
      </div>
    </div>
  );
}
