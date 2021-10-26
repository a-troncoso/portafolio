export default {
  title: "Example/Dropdown",
  argTypes: {}
}

const Template = args => {
  return `<div>Hola soy el Dropdown</div>`
}

export const Simple = Template.bind({})
Simple.args = {
  user: {}
}
