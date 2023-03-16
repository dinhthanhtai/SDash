import { Layout, Space, theme, Menu } from 'antd';
import Wallet from "../components/general-wallet/Wallet"
const { Header, Footer, Sider, Content } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import HeaderBar from '../components/header-detail/HeaderBar'
import React from 'react';
export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout style={{
              background: "#001C44"
            }}>
        <Header
          style={{
            padding: 10,
            background: "#001C44"
          }}
        >
          <HeaderBar >
            
          </HeaderBar>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#001C44",
            }}
          >
            <Wallet>

            </Wallet>
            
          </div>
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >


          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
