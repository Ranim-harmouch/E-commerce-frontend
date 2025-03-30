
import Sidebar from "../components/sidebard";
import Header from "../components/headerd";
import OrdersTable from "../components/OrdersTable";

export default function Dashboard() {
  console.log("aa")
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        <Header />

        {/* Content */}
        <main className="p-6 flex-1 max-w-3xl">
          
          <OrdersTable />
        </main>
      </div>
    </div>
  );
}
