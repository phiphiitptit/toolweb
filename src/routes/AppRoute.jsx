import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "../layout/GlobalLayout/Navigation";
import About from "../page/About/index";
import Homepage from "../page/Homepage/index";

const { Header, Content, Footer } = Layout;


const AppRoutes = () => (

  <Router >
    <Layout className="layout">
      <Header>
        <Navigation />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>



  </Router>

);

export default AppRoutes;