import BulletinBackground from "@/components/bulletins/BulletinBackground"
import BulletinExpulsion from "@/components/bulletins/BulletinExpulsions"
import BulletinObservations from "@/components/bulletins/BulletinObservations"
import BulletinPersonalData from "@/components/bulletins/BulletinPersonalData"
import BulletinPhoto from "@/components/bulletins/BulletinPhoto"

function BulletinForm() {
  return (
    <div className="space-y-8">

      <BulletinPersonalData />

      <BulletinPhoto />

      <BulletinExpulsion />

      <BulletinBackground />

      <BulletinObservations />

    </div>
  );
}

export default BulletinForm;