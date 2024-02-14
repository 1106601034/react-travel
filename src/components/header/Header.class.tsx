import React from "react";
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps, } from "../../helpers/withRouter";
import store from "../../redux/store";
import { LanguageState } from "../../redux/language/languageReducer";
import { withTranslation, WithTranslation } from "react-i18next";
import {
    addLanguageActionCreator,
    changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/store";

// interface State extends LanguageState { }

const mapStateToProps = (state: RootState) => {
    return {
        language: state.language,
        languageList: state.languageList,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeLanguage: (code: "en" | "zh") => {
            const action = changeLanguageActionCreator(code);
            dispatch(action);
        },
        addLanguage: (name: string, code: string) => {
            const action = addLanguageActionCreator(name, code);
            dispatch(action);
        },
    };
};

type PropsType =
    RouteComponentProps & // typr of router props react-router
    WithTranslation & // type of props of i18n
    ReturnType<typeof mapStateToProps> & // type of map of redux store
    ReturnType<typeof mapDispatchToProps>; // type of map of redux dispatch

class HeaderComponent extends React.Component<PropsType> {
    // constructor(props) {
    //     super(props);
    //     const storeState = store.getState();
    //     this.state = {
    //         language: storeState.language,
    //         languageList: storeState.languageList,
    //     };
    //     store.subscribe(this.handleStoreChange);
    // }

    handleStoreChange = () => {
        const storeState = store.getState();
        this.setState({
            language: storeState.language,
            languageList: storeState.languageList,
        });
    }

    menuClickHandler = (e) => {
        if (e.key === "new") {
            const action = addLanguageActionCreator("jk", "new_lang")
            store.dispatch(action);
        } else {
            const action = changeLanguageActionCreator(e.key)
            store.dispatch(action);
        }
    };

    render() {
        const { navigate, t } = this.props;
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
                                {t("header.slogan")}.
                            </Typography.Text>
                            <Dropdown.Button
                                style={{ marginLeft: 15 }}
                                overlay={
                                    <Menu
                                        onClick={this.menuClickHandler}
                                        items={[
                                            ...this.props.languageList.map((l) => {
                                                return { key: l.code, label: l.name };
                                            }),
                                            { key: "new", label: "Add..." },
                                        ]}
                                    />
                                }
                                icon={<GlobalOutlined />}
                            >
                                {this.props.language === "en" ? "English" : "Mandarin"}
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

export const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(
            HeaderComponent
        )
    )
);
