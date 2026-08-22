import { Search, Download } from 'lucide-react';
import Link from 'next/link';

export default function DashboardCartable() {
  const tasks = [
    { id: 1, customer: "نانو فناوران دارویی الوند", project: "جعبه آمپیزو 140 بدون هولدر", no: "15745-1433-3-13-0", date: "1404/06/09", designer: "ندا ثابتی", status: "completed" },
    { id: 2, customer: "نانو فناوران دارویی الوند", project: "جعبه دارو لوکازا", no: "15745-291-9-13-4-2", date: "1404/06/08", designer: "ندا ثابتی", status: "pending" },
    { id: 3, customer: "شرکت تجهیزات پزشکی سینا", project: "بروشور راهنمای استفاده", no: "11220-400-1-12-0", date: "1404/06/15", designer: "مریم ملائی", status: "in_progress" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-800">کارتابل تولید طراحی</h2>
          <p className="text-neutral-500 text-sm mt-1">مدیریت و پیگیری وظایف محوله به دپارتمان طراحی</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="جستجو در سفارشات..." 
              className="pl-4 pr-10 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64 transition-all"
            />
            <Search className="absolute right-3 top-2.5 text-neutral-400" size={16} />
          </div>
          <button className="flex items-center gap-2 bg-white border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-50 transition-colors shadow-sm">
            <Download size={16} />
            خروجی CSV
          </button>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-neutral-50/80 border-b border-neutral-200 text-neutral-600">
              <tr>
                <th className="py-4 px-6 font-semibold w-16 text-center">وضعیت</th>
                <th className="py-4 px-6 font-semibold">نام پروژه</th>
                <th className="py-4 px-6 font-semibold">نام مشتری</th>
                <th className="py-4 px-6 font-semibold">شماره پروژه</th>
                <th className="py-4 px-6 font-semibold">تاریخ تحویل</th>
                <th className="py-4 px-6 font-semibold">تیم طراحی</th>
                <th className="py-4 px-6 font-semibold text-center w-32">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${
                      task.status === 'completed' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
                      task.status === 'pending' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 
                      'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    }`}></span>
                  </td>
                  <td className="py-4 px-6 font-medium text-neutral-800">{task.project}</td>
                  <td className="py-4 px-6 text-neutral-600">{task.customer}</td>
                  <td className="py-4 px-6 text-neutral-500 font-mono text-xs dir-ltr">{task.no}</td>
                  <td className="py-4 px-6 text-neutral-600">{task.date}</td>
                  <td className="py-4 px-6 text-xs">
                    <div className="font-medium text-neutral-700">{task.designer}</div>
                    <div className="text-neutral-400 mt-0.5">ثبت: پرنیان کردفروشانی</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link href={`/orders/${task.id}`}>
                      <button className="bg-brand-50 text-brand-600 border border-brand-200 text-xs px-4 py-1.5 rounded-md hover:bg-brand-600 hover:text-white transition-all duration-200 font-medium">
                        پیگیری کار
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination/Footer */}
        <div className="bg-neutral-50 px-6 py-3 border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
           <span>نمایش 1 تا 3 از 12 مورد</span>
           <div className="flex gap-1">
              <button className="px-2 py-1 rounded border border-neutral-300 bg-white hover:bg-neutral-100">قبلی</button>
              <button className="px-2 py-1 rounded border border-brand-500 bg-brand-500 text-white">1</button>
              <button className="px-2 py-1 rounded border border-neutral-300 bg-white hover:bg-neutral-100">2</button>
              <button className="px-2 py-1 rounded border border-neutral-300 bg-white hover:bg-neutral-100">بعدی</button>
           </div>
        </div>
      </div>
    </div>
  );
}