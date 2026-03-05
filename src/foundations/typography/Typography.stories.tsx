import type { Meta, StoryObj } from '@storybook/react-vite';
import { fontSize, fontWeight } from '../global-tokens';

const TypographyPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '24px' }}>Typography</h2>
    <p style={{ color: '#6B7080', marginBottom: '32px' }}>
      Typography scale and font weights used across the design system.
    </p>

    <h3 style={{ marginBottom: '16px' }}>Font Sizes</h3>
    <div style={{ marginBottom: '32px' }}>
      {Object.entries(fontSize).map(([name, size]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '16px' }}>
          <span style={{ width: '80px', fontSize: '12px', color: '#6B7080' }}>
            {name} ({size})
          </span>
          <span style={{ fontSize: size }}>
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </div>

    <h3 style={{ marginBottom: '16px' }}>Font Weights</h3>
    <div>
      {Object.entries(fontWeight).map(([name, weight]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '12px' }}>
          <span style={{ width: '120px', fontSize: '12px', color: '#6B7080' }}>
            {name} ({weight})
          </span>
          <span style={{ fontSize: '18px', fontWeight: weight }}>
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographyPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
