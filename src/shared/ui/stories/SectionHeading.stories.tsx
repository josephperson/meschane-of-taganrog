import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeadingHighlight, HeadingSubtitle, HeadingTitle, SectionHeading } from '../elements';

const meta: Meta<typeof SectionHeading> = {
  title: 'shared/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  render: () => (
    <SectionHeading>
      <HeadingSubtitle>Подзаголовок секции</HeadingSubtitle>
      <HeadingTitle>
        Это <HeadingHighlight>Заголовок</HeadingHighlight>
      </HeadingTitle>
    </SectionHeading>
  ),
};

export const WithDashSubtitle: Story = {
  render: () => (
    <SectionHeading>
      <HeadingSubtitle withDash>Секция с тире</HeadingSubtitle>
      <HeadingTitle>
        Пример с <HeadingHighlight withUnderline>Подчёркиванием</HeadingHighlight>
      </HeadingTitle>
    </SectionHeading>
  ),
};

export const CenteredTitle: Story = {
  render: () => (
    <SectionHeading className="items-center text-center">
      <HeadingSubtitle>Центрированный</HeadingSubtitle>
      <HeadingTitle>
        <HeadingHighlight>Заголовок</HeadingHighlight> Центр
      </HeadingTitle>
    </SectionHeading>
  ),
};
