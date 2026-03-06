import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botão de rádio para seleção única em um grupo de opções mutuamente exclusivas.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

// Default
export const Default: Story = {
  args: {
    label: 'Label',
    name: 'default-demo',
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Tamanhos utilizados</h4>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Default</p>
            <Radio label="" name="sizes" value="default" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Selected</p>
            <Radio label="" name="sizes-selected" value="selected" defaultChecked />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Error selected</p>
            <Radio label="" name="sizes-error-sel" value="error-sel" error defaultChecked />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Error unselected</p>
            <Radio label="" name="sizes-error" value="error" error />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Disabled selected</p>
            <Radio label="" name="sizes-dis-sel" value="dis-sel" disabled defaultChecked />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Disabled unselected</p>
            <Radio label="" name="sizes-dis" value="dis" disabled />
          </div>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7080' }}>Utilização com label</h4>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Default</p>
            <Radio label="Label" name="label" value="default" />
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Selected</p>
            <Radio label="Label" name="label-selected" value="selected" defaultChecked />
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Error selected</p>
            <Radio label="Label" name="label-error-sel" value="error-sel" error defaultChecked />
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Error unselected</p>
            <Radio label="Label" name="label-error" value="error" error />
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Disabled selected</p>
            <Radio label="Label" name="label-dis-sel" value="dis-sel" disabled defaultChecked />
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#0C83D9', marginBottom: '8px' }}>Disabled unselected</p>
            <Radio label="Label" name="label-dis" value="dis" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Radio Group Example
export const RadioGroup: Story = {
  render: () => {
    const RadioGroupExample = () => {
      const [selected, setSelected] = useState('option1');
      return (
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#273240' }}>
            Selecione uma opção
          </legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Radio
              label="Opção 1"
              name="group"
              value="option1"
              checked={selected === 'option1'}
              onChange={() => setSelected('option1')}
            />
            <Radio
              label="Opção 2"
              name="group"
              value="option2"
              checked={selected === 'option2'}
              onChange={() => setSelected('option2')}
            />
            <Radio
              label="Opção 3"
              name="group"
              value="option3"
              checked={selected === 'option3'}
              onChange={() => setSelected('option3')}
            />
          </div>
        </fieldset>
      );
    };
    return <RadioGroupExample />;
  },
};

// Error Group
export const ErrorGroup: Story = {
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#273240' }}>
        Campo obrigatório
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio label="Opção 1" name="error-group" value="1" error />
        <Radio label="Opção 2" name="error-group" value="2" error />
        <Radio label="Opção 3" name="error-group" value="3" error />
      </div>
      <p style={{ marginTop: '8px', fontSize: '12px', color: '#FF0000' }}>Selecione uma opção</p>
    </fieldset>
  ),
};

// Disabled Group
export const DisabledGroup: Story = {
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#273240' }}>
        Opções indisponíveis
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio label="Opção 1" name="disabled-group" value="1" disabled defaultChecked />
        <Radio label="Opção 2" name="disabled-group" value="2" disabled />
        <Radio label="Opção 3" name="disabled-group" value="3" disabled />
      </div>
    </fieldset>
  ),
};
