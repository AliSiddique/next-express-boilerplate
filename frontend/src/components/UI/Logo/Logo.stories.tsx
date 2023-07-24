import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Logo"

const meta: Meta<typeof Button> = {
    title: "Logo",
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    },
}

export default meta
type Story = StoryObj<typeof Button>
export const Default: Story = {
    args: {
        title: "heddbfbfdbdfdbfllo",
        textColour: "black",
        rounded: true,
    },
}

export const saassaPrimary: Story = {
    args: {
        title: "hello",
        textColour: "black",
        rounded: true,
    },
}

export const hththtSecondary: Story = {
    args: {
        title: "hello",
        textColour: "white",
        showSub: true,
        rounded: false,
    },
}
