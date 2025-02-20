import { Div, Image, Paragraph, Span, Parent, StyleSheet, Layout } from "innerscope"
import './foodcard.css'

type Item = {
    name: string,
    image : string,
    price : string
}
export default function FoodCard (parent: Parent | HTMLDivElement, ItemProps: Item) {
    const root = Div(parent);
    root.id = 'foodcard'
    root.classList.add('center', 'vertical')

    const img = Image(root)
    img.src = ItemProps.image
    img.style.width = 'inherit'

    Span(root).textContent = ItemProps.name

    const priceBox = Div( root)
    priceBox.id = 'pricebox';
    priceBox.classList.add("center")

    const price = Paragraph(priceBox)
    price.textContent =  'BWP' + ItemProps.price

}