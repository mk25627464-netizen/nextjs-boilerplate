export default function Home() {
  const tools = [
    { name: "Word ↔ PDF", desc: "যেকোনো ফরম্যাটে ফাইল বদলান" },
    { name: "ইমেজ ব্যাকগ্রাউন্ড রিমুভার", desc: "এক ক্লিকে ছবির ব্যাকগ্রাউন্ড মুছুন" },
    { name: "ফাইল কমপ্রেসার", desc: "ফাইলের সাইজ ছোট করুন" },
    { name: "ভিডিও থেকে সাবটাইটেল", desc: "অটো ট্রান্সক্রিপশন ও সাবটাইটেল" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9F9]">
      <header className="bg-[#0F6E6E] py-6 px-6">
        <h1 className="text-white text-2xl font-bold">Doneo</h1>
        <p className="text-white/80 text-sm mt-1">
          Upload. Process. Delivered. Automatically.
        </p>
      </header>

      <main className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-[#1E2A2A] text-xl font-semibold mb-6">
          আপনার কাজ বেছে নিন
        </h2>

        <div className="grid gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border border-[#E1E8E8] rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-[#1E2A2A] font-medium text-lg">
                {tool.name}
              </h3>
              <p className="text-[#6B7A7A] text-sm mt-1">{tool.desc}</p>
              <button className="mt-4 bg-[#FF7A33] text-white px-4 py-2 rounded-lg font-medium">
                শুরু করুন
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
