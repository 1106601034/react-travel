import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown, } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className={styles.App}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>Explore a world of travel with React.</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                items={[
                  { key: "1", label: "English" },
                  { key: "2", label: "Deutsch" },
                  { key: "3", label: "Francais" },
                ]}
              />
            }
            icon={<GlobalOutlined />}
          >Language</Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>Create a free account</Button>
            <Button>Sign in</Button>
          </Button.Group>
        </div>
      </div>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>Travel.com</Typography.Title>
          <Input.Search placeholder='Search for fligghts, hotel and more' className={styles['search-input']} />
        </Layout.Header>
        <Menu mode={"horizontal"}
          className={styles["main-menu"]}
          items={[
            { key: 1, label: "Excplore everywhere" },
            { key: 2, label: "Let us inspire your next trip" },
            { key: 3, label: "Hotels" },
            { key: 4, label: "Car hire" },
          ]} />
      </div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Copyrights @ Travel.com
        </Typography.Title>
      </Layout.Footer>
    </div >
  );
}

export default App;