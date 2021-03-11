import Carousel from "."

const Story = {
  title: 'Example/Carousel',
  component: Carousel
}

const Template = (args) => <Carousel {...args} />

export const Default = Template.bind({})
Default.args = {
  slides: ["Swashbuckling", "with", "Code"]
}

export default Story