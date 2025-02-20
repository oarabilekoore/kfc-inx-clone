import { Layout, Image, Parent } from "innerscope";

export default function NavBar(root: Parent | HTMLDivElement){
    const nav_body = Layout('linear', root)
    nav_body.childAlignment('left')
    nav_body.style.zIndex = '2000'
    nav_body.style.width = '100%'
    nav_body.style.height = '42px';
    nav_body.style.borderBottomStyle = 'solid'
    nav_body.style.borderBottomColor = 'black'
    nav_body.style.borderBottomWidth = '0.05px'

    const bar_logo: HTMLImageElement = Image(nav_body)
    bar_logo.style.width = '52px';
    bar_logo.style.height = 'auto'

    bar_logo.src = 'https://cdn.tictuk.com/507331967547798/assets/logoMobileHeader.svg'
}

