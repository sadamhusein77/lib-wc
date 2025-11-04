import type { Meta, StoryObj } from '@storybook/react'
import MyButton from './MyButton'

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  args: {
    label: 'Click Me',
  },
}

export default meta
type Story = StoryObj<typeof MyButton>

export const Primary: Story = {
  args: { label: 'Click Me' },
}

export const WithAction: Story = {
  args: { label: 'Click Me', onClick: () => alert('Hello from Storybook!') },
}
