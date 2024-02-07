import React from "react";
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps, } from "../../helpers/withRouter";

class HeaderComponnet extends React.Component<RouteComponentProps> {

    render() {
        const { navigate } = this.props;

        // const history = useHistory();
        // const location = useLocation();
        // const params = useParams();
        // const match = useRouteMatch();
        return (
            <div className={styles['app-header']}>
                <div className={styles['top-header']}>
                    <div className={styles.inner}>
                        <Space wrap>
                            <Typography.Text>
                                Explore a world of travel with React.
                            </Typography.Text>
                            <Dropdown menu={{
                                items: [
                                    { key: "1", label: "English" },
                                    { key: "2", label: "Deutsch" },
                                    { key: "3", label: "Francais" },
                                ]
                            }} >
                                <Button style={{ marginLeft: 15 }} >
                                    <Space>Language<GlobalOutlined /></Space>
                                </Button>
                            </Dropdown>
                        </Space>
                        <Button.Group className={styles['button-group']}>
                            <Button onClick={() => navigate('createAccount')}>Create a free account</Button>
                            <Button onClick={() => navigate('signIn')}>Sign in</Button>
                        </Button.Group>
                    </div>
                </div>
                <Layout.Header className={styles['main-header']}>
                    <span onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" className={styles['App-logo']} />
                        <Typography.Title level={3} className={styles.title}>Travel.com</Typography.Title>
                    </span>
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
        );
    };
}

export const Header = withRouter(HeaderComponnet);