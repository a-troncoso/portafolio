export default {
  title: "Example/Banner",
  argTypes: {}
}

const Template = args => {
  return `<div>Hola soy el Banner</div>`
}

export const Simple = Template.bind({})
Simple.args = {
  user: {}
}
