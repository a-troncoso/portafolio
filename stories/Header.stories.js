export default {
  title: "Example/Header",
  argTypes: {}
}

const Template = args => {
  return `<div>Hola soy el Header</div>`
}

export const Simple = Template.bind({})
Simple.args = {
  user: {}
}
