import Card from "@/components/ui/Card";

import RecentBulletins from "@/components/dashboard/RecentBulletins";
import StatCard from "@/components/dashboard/StatCard";
import WelcomeCard from "@/components/dashboard/WelcomeCard";

function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeCard />

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Boletines"
          value="124"
        />

        <StatCard
          title="Hoy"
          value="5"
        />

        <StatCard
          title="Usuarios"
          value="3"
        />

        <StatCard
          title="Pendientes"
          value="2"
        />
      </div>

      <Card title="Últimos boletines">
        <RecentBulletins />
      </Card>
    </div>
  );
}

export default DashboardPage;