import { Parent, Div, Anchor } from "innerscope"
import { router } from "..";

export function Nav(parent: Parent | HTMLDivElement) {
    const switch_body = Div(parent);
    const navItems = ['Menu', 'Find a KFC Near You', 'Your Wallet']

    const menu = Anchor(navItems[0], switch_body)

    const map = Anchor(navItems[1], switch_body)

    const account = Anchor(navItems[2], switch_body)
}