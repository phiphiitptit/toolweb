import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuBar } from "./style";

function Navigation() {
  return (
    <MenuBar mode="horizontal" theme="dark" >
      <Menu.Item key="home">
        <Link to="/"> Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key="learn">
        <Link to="/learn">Học làm web</Link>
      </Menu.Item>
      <Menu.Item key="tool">
        <Link to="/tools">Tools</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
     
    </MenuBar>
  );
}

export default Navigation;
