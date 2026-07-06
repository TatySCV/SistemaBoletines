import { FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <FaUserCircle
          className="text-slate-600"
          size={30}
        />

        <div className="text-right">
          <p className="font-medium">Administrador</p>

          <span className="text-sm text-slate-500">
            admin@pdi.cl
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;