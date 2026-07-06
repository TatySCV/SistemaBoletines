import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function BulletinPhoto() {
  return (
    <Card
      title="Fotografía"
      subtitle="Suba una fotografía reciente."
    >
      <div className="flex h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
        <p className="mb-4 text-slate-500">
          No hay fotografía seleccionada.
        </p>

        <Button>
          Seleccionar fotografía
        </Button>
      </div>
    </Card>
  );
}

export default BulletinPhoto;