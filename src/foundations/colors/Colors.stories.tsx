import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '../global-tokens';

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
    <div
      style={{
        width: '48px',
        height: '48px',
        backgroundColor: value,
        borderRadius: '8px',
        border: '1px solid #EDEEF2',
      }}
    />
    <div>
      <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
      <div style={{ fontSize: '12px', color: '#6B7080' }}>{value}</div>
    </div>
  </div>
);

const ColorGroup = ({
  title,
  group,
}: {
  title: string;
  group: Record<string, string>;
}) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '8px' }}>
      {Object.entries(group).map(([name, value]) => (
        <ColorSwatch key={name} name={name} value={value} />
      ))}
    </div>
  </div>
);

const groupColors = (colorTokens: Record<string, string>) => {
  const groups: Record<string, Record<string, string>> = {};
  for (const [key, value] of Object.entries(colorTokens)) {
    const group = key.replace(/\d+$/, '');
    if (!groups[group]) groups[group] = {};
    groups[group][key] = value;
  }
  return groups;
};

const ColorsPage = () => {
  const grouped = groupColors(colors);
  return (
    <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
      <h2 style={{ marginBottom: '24px' }}>Colours</h2>
      <p style={{ color: '#6B7080', marginBottom: '32px' }}>
        The colour palette defines all colours used across the design system.
        Use the CSS variable format: <code>var(--color-primary-500)</code>
      </p>
      {Object.entries(grouped).map(([group, tokens]) => (
        <ColorGroup key={group} title={group.charAt(0).toUpperCase() + group.slice(1)} group={tokens} />
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Colours',
  component: ColorsPage,
};

export default meta;

type Story = StoryObj;

export const AllColours: Story = {};
