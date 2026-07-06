import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function BulletinBackground() {
  return (
    <Card
      title="Antecedentes"
      subtitle="Agregue los antecedentes que aparecerán en el boletín."
    >
      <Button>
        + Agregar antecedente
      </Button>
    </Card>
  );
}

export default BulletinBackground;