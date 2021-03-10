import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "../layout/GlobalLayout/Navigation";
import About from "../page/About/index";
import Homepage from "../page/Homepage/index";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;


const AppRoutes = () => (

  <Router >
    <Layout className="layout" >
      <Header >
        <div className="logo" />
        <Navigation />
      </Header>
      <Content style={{marginLeft : "5%"}}>
        <Breadcrumb >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Web Design by Phi Phi</Footer>
    </Layout>



  </Router>

);

export default AppRoutes;