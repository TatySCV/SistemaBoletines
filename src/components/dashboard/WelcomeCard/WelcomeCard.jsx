import Card from "@/components/ui/Card";

function WelcomeCard() {
  return (
    <Card>
      <h1 className="text-3xl font-bold text-slate-800">
        Bienvenido 👋
      </h1>

      <p className="mt-2 text-slate-500">
        Sistema de Boletines de Expulsión.
      </p>
    </Card>
  );
}

export default WelcomeCard;