import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Layout = ({children, noPadding}) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Header toggleSidebar={() => setCollapsed(!collapsed)} />
      <Sidebar collapsed={collapsed} />
      <Content noPadding={noPadding} collapsed={collapsed}>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
