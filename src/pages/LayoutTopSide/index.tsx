import type{ FC } from "react";
import styles from "./index.less";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const JobGroup: FC<any> = () => {
    return(
        <div className={styles.container}>
            <div id="components-layout-demo-top-side">
              <Layout>
                <Header className="header">
                  <div className="logo"></div>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px" }}
                  >
                    <Menu.Item key="1">执行器中心</Menu.Item>
                    <Menu.Item key="2">任务中心</Menu.Item>
                    <Menu.Item key="3">调度日志</Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <Layout
                    className="site-layout-background"
                    style={{ padding: "24px 0" }}
                  >
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                      Content
                    </Content>
                  </Layout>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </div>
          </div>
    );
}

export default JobGroup;

