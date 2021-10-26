import { createButton } from "./Button"
import '../styles.css';

export default {
  title: "Example/MyStory",
  argTypes: {
    // label: { control: "text" },
    // primary: { control: "boolean" },
    // backgroundColor: { control: "color" },
    // size: {
    //   control: { type: "select", options: ["small", "medium", "large"] }
    // },
    // onClick: { action: "onClick" }
  }
}

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  return `<nav class="navigation bordered">
    <ul class="navigation__list">
      <li class="active">Sobre mi</li>
      <li>Proyectos</li>
      <li>Exp. Laboral</li>
      <li>Contacto</li>
      <li>Blog</li>
    </ul>
  </nav>`
  // return createButton({ label, ...args });
}

export const Simple = Template.bind({})
Simple.args = {}
