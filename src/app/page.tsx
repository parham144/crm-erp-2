'use client';

import React, { useState } from 'react';
import { sendToN8n } from '@/lib/n8n';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  const handleOrderSubmit = async (orderId: string, projectName: string) => {
    setLoading(true);
    try {
      await sendToN8n({
        action: 'register_order',
        orderId,
        projectName,
        status: 'in_progress',
      });
      alert('سفارش با موفقیت به ورک‌فلوی n8n ارسال شد.');
    } catch (err) {
      alert('خطا در برقراری ارتباط با n8n');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <h1>داشبورد مدیریتی CRM-ERP</h1>
      <p>سیستم پیگیری و ثبت کارتابل تولید</p>
      <button 
        onClick={() => handleOrderSubmit('15745-1433', 'جعبه آمپولو 140')}
        disabled={loading}
        style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {loading ? 'در حال ارسال...' : 'ارسال به n8n (تست پیگیری کار)'}
      </button>
    </div>
  );
}
