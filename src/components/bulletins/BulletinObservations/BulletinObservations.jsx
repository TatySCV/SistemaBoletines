import Section from "@/components/ui/Section";
import Textarea from "@/components/ui/Textarea";


function BulletinObservations() {

  return (

    <Section
      title="Observaciones Internas"
      subtitle="Información que no aparece en el boletín."
    >

      <Textarea
        name="observations"
        label="Observaciones"
        placeholder="Ingrese observaciones internas..."
      />

    </Section>

  );

}


export default BulletinObservations;