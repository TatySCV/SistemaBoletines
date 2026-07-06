import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentBulletins from "@/components/dashboard/RecentBulletins";

import Card from "@/components/ui/Card";

import {
  dashboardStats,
  recentBulletins,
} from "@/mocks/dashboard";

function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeCard />

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Boletines"
          value={dashboardStats.totalBulletins}
        />

        <StatCard
          title="Hoy"
          value={dashboardStats.todayBulletins}
        />

        <StatCard
          title="Usuarios"
          value={dashboardStats.totalUsers}
        />

        <StatCard
          title="Pendientes"
          value={dashboardStats.pendingBulletins}
        />
      </div>

      <Card title="Últimos boletines">
        <RecentBulletins data={recentBulletins} />
      </Card>
    </div>
  );
}

export default DashboardPage;