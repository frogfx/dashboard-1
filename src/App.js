import React from "react";
import "./App.css";
import {
  Layout,
  Avatar,
  Menu,
  Icon,
  Breadcrumb,
  Dropdown,
  Card,
  Col,
  Row
} from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import data from "../src/content.json";
const text = data.text;

const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Configurações
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Segurança
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Sair
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100%" }}>
        <Header style={{ background: "#000000", padding: 4 }}>
          <Dropdown overlay={menu}>
            <Avatar icon="user" style={{ float: "right", marginRight: 43 }} />
          </Dropdown>
          <Title level={4} style={{ color: "white" }}>
            ❤ ReactJS Control Pannel
          </Title>
        </Header>
        <Layout style={{ minHeight: "100%" }}>
          <Sider
            breakpoint="sm"
            collapsedWidth="80px"
            onBreakpoint={broken => {}}
            onCollapse={(collapsed, type) => {}}
            style={{ background: "#FFF", marginTop: "53" }}
          >
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <SubMenu
                title={
                  <span>
                    <Icon type="home" />
                    <span>Menu 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Menu 2</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="github" />
                    <span>Menu 3</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ minHeight: "100%" }}>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <Row gutter={18} span={8}>
                <Col span={8}>
                  <Card title="Card title" bordered={false}>
                    {text}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title" bordered={false}>
                    {text}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card title" bordered={false}>
                    {text}
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            background: "#000000",
            padding: 8,
            textAlign: "center",
            color: "#FFF"
          }}
        >
          <b> ❤ ReactJS </b>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
