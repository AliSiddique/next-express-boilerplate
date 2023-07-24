import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Toasts"

const meta: Meta<typeof Button> = {
    title: "Toasts",
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    },
}

export default meta
type Story = StoryObj<typeof Button>
export const dfgdfgDefault: Story = {
    args: {
        title: "hefdfgdsofgifgollo",
        textColour: "black",
        rounded: true,
    },
}

export const gdfgdfdfgPrimary: Story = {
    args: {
        title: "hello",
        textColour: "black",
        rounded: true,
    },
}

export const sdffdsfsdSecondary: Story = {
    args: {
        title: "hello",
        textColour: "white",
        showSub: true,
        rounded: false,
    },
}
