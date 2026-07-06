import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function BulletinExpulsion() {
  return (
    <Card
      title="Expulsiones"
      subtitle="Agregue una o más expulsiones."
    >
      <Button>
        + Agregar expulsión
      </Button>
    </Card>
  );
}

export default BulletinExpulsion;