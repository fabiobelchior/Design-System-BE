import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botao utilizado para acoes principais e secundarias. Suporta diferentes variantes, tamanhos, icones e estado de loading.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="link" disabled>Link</Button>
    </div>
  ),
};

// Loading
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="secondary" loading>Loading</Button>
    </div>
  ),
};

// With Icon
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.333 8h9.334M8.667 4L12.667 8l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" icon={<ArrowIcon />}>With Icon</Button>
      <Button variant="secondary" icon={<ArrowIcon />}>With Icon</Button>
      <Button variant="tertiary" icon={<ArrowIcon />}>With Icon</Button>
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Button variant="primary" fullWidth>Full Width Button</Button>
    </div>
  ),
};

// Examples
export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Form Actions</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary">Submit</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Destructive Action</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="tertiary">Keep</Button>
          <Button variant="primary">Delete</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Navigation</h4>
        <Button variant="link" icon={<ArrowIcon />}>View all items</Button>
      </div>
    </div>
  ),
};
