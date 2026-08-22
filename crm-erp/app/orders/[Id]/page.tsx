import { ArrowRight, FileText, CheckCircle2, Clock, UploadCloud } from 'lucide-react';
import Link from 'next/link';

export default function OrderDetails() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* Breadcrumb & Top Bar */}
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-3 text-sm">
            <Link href="/dashboard" className="text-neutral-500 hover:text-brand-600 flex items-center gap-1 transition-colors">
               <ArrowRight size={16} />
               بازگشت به کارتابل
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-700 font-medium">گزارش سفارش سطح ۳</span>
         </div>
         <div className="bg-white px-4 py-1.5 rounded-full border border-neutral-200 shadow-sm text-xs font-medium text-neutral-600 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            در حال انجام: برنامه ریزی
         </div>
      </div>

      {/* Section 1: Order Meta */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="bg-brand-50/50 px-6 py-4 border-b border-neutral-200 flex items-center gap-2">
           <FileText className="text-brand-600" size={18} />
           <h3 className="font-bold text-brand-900">اطلاعات سفارش و مشتری</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="space-y-1">
            <span className="block text-neutral-500 text-xs">نام مشتری</span>
            <span className="font-semibold text-neutral-800">اسپاد فارمد اسپاد فارمد</span>
          </div>
          <div className="space-y-1">
             <span className="block text-neutral-500 text-xs">شماره سفارش</span>
             <span className="font-mono text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded inline-block dir-ltr">16895-1258-2-100-1-0</span>
          </div>
          <div className="space-y-1">
             <span className="block text-neutral-500 text-xs">نوع محصول</span>
             <span className="font-semibold text-neutral-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                لیبل شیت
             </span>
          </div>
          <div className="space-y-1">
             <span className="block text-neutral-500 text-xs">تعداد محصول نهایی</span>
             <span className="font-bold text-2xl text-brand-600">500 <span className="text-xs text-neutral-500 font-normal">عدد</span></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Section 2: Workflow Timeline (Takes 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-neutral-50/80 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <Clock className="text-neutral-500" size={18} />
                <h3 className="font-bold text-neutral-800">روال انجام کار (ورک فلو)</h3>
             </div>
          </div>
          
          <div className="flex-1 overflow-x-auto p-0">
            <table className="w-full text-right text-sm">
              <thead className="text-neutral-500 text-xs border-b border-neutral-100">
                <tr>
                  <th className="py-3 px-6 font-medium">مرحله</th>
                  <th className="py-3 px-6 font-medium">تاریخ انجام</th>
                  <th className="py-3 px-6 font-medium">مسئول</th>
                  <th className="py-3 px-6 font-medium text-center">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50">
                
                {/* Completed Task */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-6 font-medium text-neutral-800">ثبت سفارش</td>
                  <td className="py-3 px-6 text-neutral-500 text-xs">1402/10/01 10:20</td>
                  <td className="py-3 px-6 text-neutral-600 text-xs">system</td>
                  <td className="py-3 px-6 text-center">
                     <CheckCircle2 className="inline text-emerald-500" size={16} />
                  </td>
                </tr>

                {/* Completed Task */}
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-6 font-medium text-neutral-800">تخصیص طراح</td>
                  <td className="py-3 px-6 text-neutral-500 text-xs">1402/10/02 09:15</td>
                  <td className="py-3 px-6 text-neutral-600 text-xs">مریم ملائی</td>
                  <td className="py-3 px-6 text-center">
                     <CheckCircle2 className="inline text-emerald-500" size={16} />
                  </td>
                </tr>

                {/* Current Task */}
                <tr className="bg-brand-50/30 hover:bg-brand-50/60 transition-colors border-l-2 border-brand-500">
                  <td className="py-3 px-6 font-semibold text-brand-700">برنامه ریزی تولید</td>
                  <td className="py-3 px-6 text-neutral-500 text-xs">1402/10/04 14:59</td>
                  <td className="py-3 px-6 text-neutral-700 text-xs font-medium">لیلا یزدانی</td>
                  <td className="py-3 px-6 text-center">
                     <span className="inline-block px-2 py-0.5 bg-brand-100 text-brand-700 rounded text-[10px] font-bold">در حال انجام</span>
                  </td>
                </tr>

                {/* Pending Task */}
                <tr className="opacity-50 grayscale">
                  <td className="py-3 px-6 font-medium text-neutral-500">تراکنش انبار با تولید</td>
                  <td className="py-3 px-6 text-neutral-400 text-xs">-</td>
                  <td className="py-3 px-6 text-neutral-400 text-xs">-</td>
                  <td className="py-3 px-6 text-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mx-auto"></div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: File Upload Panel (Side column) */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-fit">
          <div className="bg-neutral-50/80 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
             <h3 className="font-bold text-neutral-800">فایل های سرویس (لانه گذاری)</h3>
          </div>
          <div className="p-6 flex flex-col gap-4">
             <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-neutral-50 hover:bg-brand-50 hover:border-brand-300 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                   <UploadCloud className="text-brand-500" size={24} />
                </div>
                <h4 className="text-sm font-semibold text-neutral-700 mb-1">آپلود طرح چاپی</h4>
                <p className="text-xs text-neutral-500">فایل های PDF یا TIFF را اینجا رها کنید</p>
             </div>
             
             {/* Uploaded files list */}
             <div className="space-y-3 mt-2">
                <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg bg-white">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">PDF</div>
                      <div>
                         <p className="text-sm font-medium text-neutral-700">Cover_Print_V2.pdf</p>
                         <p className="text-[10px] text-neutral-400">12.4 MB • آپلود شده توسط ندا ثابتی</p>
                      </div>
                   </div>
                   <button className="text-brand-600 hover:text-brand-800 text-xs font-medium">دانلود</button>
                </div>
             </div>
             
             <button className="w-full mt-4 bg-brand-600 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm hover:bg-brand-700 transition-colors">
                ثبت و تایید طراحی
             </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}