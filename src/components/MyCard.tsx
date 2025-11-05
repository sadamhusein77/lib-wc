import React from 'react';

export default function MyCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white">
      <h3 className="font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
