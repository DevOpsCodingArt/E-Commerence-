// import required modules

import DashBoard from "../../Admin/DashBoard/DashBoard";
import OrderTable from "../../Admin/DashBoard/OrderTable";

function AdminHome() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full p-4">
        <DashBoard></DashBoard>
        <OrderTable></OrderTable>
      </div>
    </div>
  );
}

export default AdminHome;
