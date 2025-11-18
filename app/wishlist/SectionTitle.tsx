export default function SectionTitle({ title, linkText = "See All" }: { title: string; linkText?: string }) {
  return (
    <div className="flex items-center justify-between mb-6 mt-16">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <button className="text-sm font-medium border border-gray-300 px-6 py-2 rounded hover:bg-gray-50 transition">
        {linkText}
      </button>
    </div>
  );
}