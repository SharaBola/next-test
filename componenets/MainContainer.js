import NavBar from "./NavBar";
import Head from "next/head";
import {useState} from "react";

const MainContainer = ({children, keywords}) => {

    return (
        <>
            <Head>
                <meta keywords={"users, gamzat" + keywords }></meta>
                <title> страница</title>
            </Head>
            <div className="NavBar">
                <NavBar href={"/"} text={"Главная"}></NavBar>
                <NavBar href={"/users"} text={"Список пользователей"}></NavBar>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
