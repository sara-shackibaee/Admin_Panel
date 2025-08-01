
'use client';


export default function Dashboard() {
  
 
  return (
   <>
  <main className="flex-1 p-10 flex flex-col gap-8">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-pink-500 text-white text-center rounded-lg shadow p-4">
      <h3 className="text-sm">تعداد کاربران</h3>
      <p className="text-xl font-bold mt-1">152</p>
    </div>
    <div className="bg-pink-500 text-white text-center rounded-lg shadow p-4">
      <h3 className="text-sm">سفارشات</h3>
      <p className="text-xl font-bold mt-1">34</p>
    </div>
    <div className="bg-pink-500 text-white text-center rounded-lg shadow p-4">
      <h3 className="text-sm">درآمد</h3>
      <p className="text-xl font-bold mt-1">1,200,000 تومان</p>
    </div>
    <div className="bg-pink-500 text-white text-center rounded-lg shadow p-4">
      <h3 className="text-sm">بازدید</h3>
      <p className="text-xl font-bold mt-1">875</p>
    </div>
  </div>


  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-bold mb-4 text-center">فعالیت‌های اخیر</h3>
    <table className="w-full text-right text-sm">
      <thead>
        <tr className="border-b">
          <th className="py-2">کاربر</th>
          <th className="py-2">عملیات</th>
          <th className="py-2">زمان</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="py-2">سارا شکیبایی</td>
          <td className="py-2">ورود به سیستم</td>
          <td className="py-2">1 دقیقه پیش</td>
        </tr>
        <tr className="border-b">
          <td className="py-2">محمد احمدی</td>
          <td className="py-2">ویرایش سفارش</td>
          <td className="py-2">5 دقیقه پیش</td>
        </tr>
        <tr>
          <td className="py-2">ریحانه رضایی</td>
          <td className="py-2">خروج از سیستم</td>
          <td className="py-2">10 دقیقه پیش</td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

   
   </>


  );
}
