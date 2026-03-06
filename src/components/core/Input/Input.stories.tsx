import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto com label flutuante. Suporta estados de erro, texto auxiliar, contagem de caracteres e ação terciária.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
  },
  args: {
    label: 'Label/Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default
export const Default: Story = {
  args: {
    label: 'Label/Placeholder',
  },
};

// Required
export const Required: Story = {
  args: {
    label: 'Label/Placeholder',
    required: true,
  },
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Label/Placeholder',
    helperText: 'Texto informativo',
  },
};

// With Character Count
export const WithCharacterCount: Story = {
  args: {
    label: 'Label/Placeholder',
    maxLength: 25,
  },
};

// With Tertiary Action
export const WithTertiaryAction: Story = {
  args: {
    label: 'Label/Placeholder',
    tertiaryAction: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="6" stroke="#0C83D9" strokeWidth="1.2" />
          <path d="M8 7v4M8 5.5v.01" stroke="#0C83D9" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        Ação terciária
      </span>
    ),
  },
};

// Error State
export const Error: Story = {
  args: {
    label: 'Label/Placeholder',
    error: 'Descrição do erro',
    defaultValue: 'Preenchimento',
  },
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Input label="Label/Placeholder" disabled />
      <Input label="Label" disabled defaultValue="Preenchimento" />
    </div>
  ),
};

// All Interaction States
export const InteractionStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Estado normal</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Default</p>
            <Input label="Label/Placeholder" />
          </div>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Filled</p>
            <Input label="Label" defaultValue="Preenchimento" />
          </div>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Character count</p>
            <Input label="Label" defaultValue="Texto Descritivo" maxLength={100} />
          </div>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Desabilitado</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Disabled</p>
            <Input label="Label/Placeholder" disabled />
          </div>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Disabled filled</p>
            <Input label="Label" disabled defaultValue="Preenchimento" />
          </div>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Estado de erro</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Error</p>
            <Input label="Label/Placeholder" error="Descrição do erro" defaultValue="Preenchimento" />
          </div>
          <div style={{ width: '180px' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Error Filled</p>
            <Input label="Label" error="Descrição do erro" defaultValue="Preenchimento" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Variations Overview
export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ width: '180px' }}>
        <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Default</p>
        <Input label="Label/Placeholder" />
      </div>
      <div style={{ width: '180px' }}>
        <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Required field</p>
        <Input label="Label/Placeholder" required />
      </div>
      <div style={{ width: '180px' }}>
        <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Informative tooltip</p>
        <Input label="Label/Placeholder" helperText="Texto informativo" />
      </div>
      <div style={{ width: '180px' }}>
        <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '4px' }}>Character count</p>
        <Input label="Label/Placeholder" maxLength={25} />
      </div>
    </div>
  ),
};
