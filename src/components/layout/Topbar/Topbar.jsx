import Avatar from "@/components/ui/Avatar";

function Topbar() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Bienvenido al Sistema de Boletines
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="Administrador"
        />

        <div>
          <p className="font-semibold">
            Administrador
          </p>

          <span className="text-sm text-slate-500">
            admin@pdi.cl
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;