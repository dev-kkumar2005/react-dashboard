import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import Chart from "@components/Chart";
import DataTable from "@components/DataTable";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold">Welcome to the Dashboard</h2>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <Chart />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Data Table</h2>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
