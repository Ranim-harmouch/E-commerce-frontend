
import { Bell, Pencil } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center border-b-2 border-purple-500">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-200 transition">
          <Bell size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 transition">
          <Pencil size={22} />
        </button>
        <span className="text-sm">Admin</span>
      </div>
    </header>
  );
}
