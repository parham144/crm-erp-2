import type { Metadata } from "next";
import "./globals.css";
import { LayoutDashboard, FileText, CheckSquare, Users, Settings, LogOut } from "lucide-react";

export const metadata: Metadata = {
  title: "Parsys ERP - سیستم مدیریت سازمانی",
  description: "سیستم یکپارچه مدیریت فرآیندها",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex h-screen overflow-hidden bg-neutral-50 font-sans antialiased">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white border-l border-neutral-200 flex flex-col hidden md:flex shadow-sm z-20">
          <div className="h-16 flex items-center justify-center border-b border-neutral-100 px-6">
            <h1 className="font-bold text-xl text-brand-700 tracking-tight">Parsys <span className="text-neutral-700">ERP</span></h1>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/dashboard" className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-brand-50 text-brand-700 transition-colors">
                  <LayoutDashboard size={18} />
                  کارتابل شخصی
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                  <FileText size={18} />
                  صدور پیش فاکتور
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                  <CheckSquare size={18} />
                  تایید مشتری
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                  <Users size={18} />
                  تخصیص طراح
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-neutral-100">
             <button className="flex items-center gap-3 w-full py-2.5 px-4 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-sm font-medium">
                <LogOut size={18} />
                خروج از سیستم
             </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative w-full">
          {/* Header */}
          <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-8 shadow-sm z-10">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-neutral-700">داشبورد کاربری</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-left flex flex-col justify-center">
                <span className="text-sm font-medium text-neutral-800">حامد اقوامی پناه</span>
                <span className="text-xs text-neutral-500">مدیریت سیستم</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-lg border border-brand-200">
                ح
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
               {children}
            </div>
          </main>
        </div>
        
      </body>
    </html>
  );
}