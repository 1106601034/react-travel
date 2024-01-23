import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, } from "antd";
function App() {
  return (
    <div className = {styles.App}> 
      {/* {<header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>} */}
      <div>
        <Layout.Header>
          <img src={logo} alt="" />
          <Typography.Title level={3}>Travel.com</Typography.Title>
          <Input.Search placeholder='Search for fligghts, hotel and more'/>
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
