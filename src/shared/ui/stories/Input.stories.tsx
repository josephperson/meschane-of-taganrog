import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '../common';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean',
      description: 'Добавляет границу вокруг поля ввода',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-заполнитель',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает поле ввода',
    },
    'data-error': {
      control: 'boolean',
      description: 'Отображает ошибку (data-error=true)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст',
    bordered: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Ошибка ввода',
    bordered: true,
    'data-error': true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Поле отключено',
    bordered: true,
    disabled: true,
  },
};

export const Borderless: Story = {
  args: {
    placeholder: 'Без рамки',
    bordered: false,
  },
};
