import { Application, Router , Layout } from "innerscope";
import NavBar from "./components/navbar";
import FoodCard from "./components/foodcard";

export const KFC_APPLICATION = new Application({
    title: "KFC Innerscope Clone",
    scrollbarvisibility: 'hidden',
})

KFC_APPLICATION.onStart(HomePage)

function HomePage(){
    const page = Layout('linear', KFC_APPLICATION.root);
    page.style.margin = '15px'

    NavBar(page)

    FoodCard(page, { 
        image : "https://cdn.tictuk.com/6107062840879639/708fe29d-8fc3-67a3-ed5a-62079a99d66b.png?a=341336d9-0519-5228-9d67-ce20324f9ca5",
        price : "287.90",
        name : "10 Piece Family Treat"})
}