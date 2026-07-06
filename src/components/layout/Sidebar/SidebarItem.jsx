import { NavLink } from "react-router-dom";

function SidebarItem({ label, path, icon: Icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        flex items-center gap-3
        rounded-lg
        px-4
        py-3
        transition-all
        ${
          isActive
            ? "bg-white text-[#003A70] font-semibold"
            : "text-white hover:bg-blue-800"
        }
      `
      }
    >
      <Icon size={18} />

      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarItem;