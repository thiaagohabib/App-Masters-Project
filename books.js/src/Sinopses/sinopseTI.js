import React, { useState } from 'react';
import '../App.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { SmileOutlined } from '@ant-design/icons';
import '../books.js'
import BooksList from '../books.js';

const { Header, Footer, Sider, Content } = Layout;


function SinopseTI() {
  
  return (
    <div className="SinopseTI">
     <Layout>
     <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>Habib Books</Title>
        </Header>
  <Layout>
  <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <SmileOutlined type="mail" />
                    <span>My History</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Thiago Habib'>
                  <Menu.Item key='location1'> Once upon a time...</Menu.Item>                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item src="./books.js">The history about super heroes, Incredibles super heroes!</Breadcrumb.Item>
              </Breadcrumb>
              </Content>
  </Layout>
  <Footer style={{ textAlign: 'center' }}>Ant Design Layout</Footer>
</Layout>
    </div>
  );
}

export default SinopseTI;
