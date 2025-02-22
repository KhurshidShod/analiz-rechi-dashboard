import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Layout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Header toggleSidebar={() => setCollapsed(!collapsed)} />
      <Sidebar collapsed={collapsed} />
      <Content collapsed={collapsed}>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
