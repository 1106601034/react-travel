import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { HomePage, SignInPage, CreateAccountPage, DetailPage, NotFoundPage } from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signIn" element={<SignInPage />} />
                    <Route path="/createAccount" element={<CreateAccountPage />} />
                    <Route path="/detail/:detailID" element={<DetailPage />} />

                    <Route element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div >
    );
}
export default App;
