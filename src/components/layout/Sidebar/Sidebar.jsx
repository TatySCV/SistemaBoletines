import NAVIGATION from "@/constants/navigation";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  /**
   * Temporal.
   * Más adelante vendrá desde Supabase.
   */
  const userRole = "admin";

  return (
    <aside className="flex h-full w-[260px] flex-col bg-[#003A70]">
      <div className="flex h-[72px] items-center justify-center border-b border-blue-800">
        <h1 className="text-center text-xl font-bold text-white">
          Sistema de
          <br />
          Boletines
        </h1>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {NAVIGATION.filter((item) =>
          item.roles.includes(userRole)
        ).map((item) => (
          <SidebarItem
            key={item.path}
            {...item}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;