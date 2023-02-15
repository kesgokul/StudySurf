import RegisterLayout from "../../components/layout/RegisterLayout";
import DashboardCard from "../../components/cards/DashboardCard";

export default function Dashboard() {
  return (
    <RegisterLayout>
      <span className="mt-10"></span>
      <DashboardCard teacher={true} />
    </RegisterLayout>
  );
}
