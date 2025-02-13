'use client';

interface MiniOutilProps {
  title: string;
  value: string | number;
  unit?: string;
}

export default function MiniOutilSystemeStatus({ title, value, unit }: MiniOutilProps) {
  return (
    <div className="mini-tool">
      <h4 className="text-theme-h3 text-sm mb-2">{title}</h4>
      <div className="flex items-center gap-2">
        <span className="text-theme-span font-medium">{value}</span>
        {unit && <span className="text-theme-span text-xs opacity-75">{unit}</span>}
      </div>
    </div>
  );
} 