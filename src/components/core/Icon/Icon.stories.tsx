import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { iconNames } from './iconRegistry';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de icone SVG. Utiliza o icon registry com 157 icones extraidos do Figma. Suporta tamanho e cor customizaveis via props.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'aviao',
    size: 24,
  },
};

export const AllIcons: Story = {
  args: {
    name: 'cadeado',
    size: 0,
  },

  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '24px',
      }}
    >
      {iconNames.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 8px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
          }}
        >
          <Icon name={name} size={24} />
          <span
            style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              wordBreak: 'break-word',
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      {[16, 20, 24, 32, 48].map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon name="aviao" size={size} />
          <span style={{ fontSize: '12px', color: '#666' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Icon name="aviao" size={32} style={{ color: '#1a73e8' }} />
      <Icon name="check" size={32} style={{ color: '#34a853' }} />
      <Icon name="erro" size={32} style={{ color: '#ea4335' }} />
      <Icon name="warning" size={32} style={{ color: '#fbbc04' }} />
      <Icon name="info" size={32} style={{ color: '#4285f4' }} />
    </div>
  ),
};
