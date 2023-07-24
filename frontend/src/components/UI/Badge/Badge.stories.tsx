import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./Badge"

const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    },
}

export default meta
type Story = StoryObj<typeof Badge>
export const BadgeDefaultDefault: Story = {
    args: {
        title: "d",
        textColour: "black",
    },
}

export const BadgePrimary: Story = {
    args: {
        title: "hello",
        textColour: "text-red-600",
    },
}

export const BadgeSecondary: Story = {
    args: {
        title: "hello",
        textColour: "text-green-600",
    },
}
