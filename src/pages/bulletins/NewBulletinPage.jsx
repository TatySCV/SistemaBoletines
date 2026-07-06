import BulletinForm from "@/components/bulletins/BulletinForm";

function NewBulletinPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Nuevo boletín
        </h1>

        <p className="text-slate-500 mt-2">
          Complete toda la información requerida.
        </p>
      </div>

      <BulletinForm />
    </div>
  );
}

export default NewBulletinPage;