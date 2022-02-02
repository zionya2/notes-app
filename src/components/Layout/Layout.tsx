import { Outlet } from 'react-router-dom';
import {
  Layout as AppLayout, Row, Col,
} from 'antd';
import { Header } from '../Header/Header';
import classes from './Layout.module.scss';
import { SideBar } from '../SideBar/SideBar';

const { Sider, Content } = AppLayout;

export const Layout = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <AppLayout className={classes.appLayout}>
      <Header />
      <AppLayout>
        <Sider className={classes.sider}>
          <SideBar />
        </Sider>
        <Content className={classes.content}>
          <Outlet />
        </Content>
      </AppLayout>
    </AppLayout>
  );
};
