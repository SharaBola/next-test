import Link from "next/link";
import NavBar from "../componenets/NavBar";
import Head from "next/head"
import MainContainer from "../componenets/MainContainer";
export default function Index () {
    return (
            <MainContainer keywords={"main container"}>
                <h1>Главная страница</h1>
                <style jsx>
                    {`
                  
                  .NavBar {
                    background: bisque;
                    padding: 10px;
                  }
                  
                `}
                </style>
            </MainContainer>
    )
}

