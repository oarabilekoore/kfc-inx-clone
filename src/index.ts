import { Application, Router , Layout } from "innerscope";
import { NavBar } from "./components/navbar";

export const KFC_APPLICATION = new Application({
    title: "KFC Innerscope Clone",
    scrollbarvisibility: 'hidden',
})

export const router = new Router(KFC_APPLICATION.root, {
    mode: 'history',
    routes: [
        {
            path: "/",
            component: HomePage,
        }
    ],
})

KFC_APPLICATION.onStart(HomePage)

function HomePage(){
    const page = Layout('linear', KFC_APPLICATION.root);
    page.style.margin = '15px'

    NavBar(page)
}