import { Story, Meta } from '@storybook/react';
import { InputText, InputTextProps } from './input-text';

export default {
    component: InputText,
    title: 'InputText',
} as Meta;

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
