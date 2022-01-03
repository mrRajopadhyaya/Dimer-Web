import React, { useState } from "react";
import AppRouter from "./AppRouter";
import SideBar from "../Common/SideBar";
import ModalAddRecord from "../../Components/Common/ModalAddRecord";
import NavBar from "../Common/NavBar";
import BottomNavBar from "../Common/BottomNavBar";

const AppLayout = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="main">
      <div className="content-area">
        <SideBar
          setShowAddRecord={setShowAddRecord}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="main-content overflow-y-auto">
          <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <AppRouter />
        </div>
      </div>
      <BottomNavBar toggleRecordModal={setShowAddRecord} />

      <ModalAddRecord
        showRecordModal={showAddRecord}
        toggleRecordModal={setShowAddRecord}
      />
    </div>
  );
};

export default AppLayout;
