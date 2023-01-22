import "../../styles/home.css";
import Header from "../../components/Header/Header";
import Game from "../../utils/game";
import React, {useEffect} from "react";


export default function Home()
{

    const root3 = document.getElementById("3root");

    useEffect(() =>
{
        new Game();
        if (root3)

            if (root3.children.length > 1)
                root3.removeChild(root3.children[0]);

        return () =>
{
            if (root3)
                root3.innerHTML = "";
        };
    }, [root3]);



    return (
        <>
            <Header hidePath={true}/>
        </>
    );
}

