import React from "react";
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps, } from "../../helpers/withRouter";
import store from "../../redux/store";
import { LanguageState } from "../../redux/languageReducer";
import { withTranslation, WithTranslation } from "react-i18next";

interface State extends LanguageState { }

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation, State> {

    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = {
            language: storeState.language,
            languageList: storeState.languageList,
        };
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange = () => {
        const storeState = store.getState();
        this.setState({
            language: storeState.language,
            languageList: storeState.languageList,
        });
    }

    menuClickHandler = (e) => {
        if (e.key === "new") {
            const action = {
                type: "add_language",
                payload: { code: "new_lang", name: "jk" }
            }
            store.dispatch(action);
        } else {
            const action = {
                type: "change_language",
                payload: e.key,
            };
            store.dispatch(action);
        }
    };

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
                            <Dropdown.Button
                                style={{ marginLeft: 15 }}
                                overlay={
                                    <Menu
                                        onClick={this.menuClickHandler}
                                        items={[
                                            ...this.state.languageList.map((l) => {
                                                return { key: l.code, label: l.name };
                                            }),
                                            { key: "new", label: "Add..." },
                                        ]}
                                    />
                                }
                                icon={<GlobalOutlined />}
                            >
                                {this.state.language === "en" ? "English" : "Mandarin"}
                            </Dropdown.Button>
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

export const Header = withTranslation()(HeaderComponent);