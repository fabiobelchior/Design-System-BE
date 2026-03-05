import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacing } from '../global-tokens';

const SpacingPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '24px' }}>Spacing</h2>
    <p style={{ color: '#6B7080', marginBottom: '32px' }}>
      Spacing scale used for padding, margins, and gaps throughout the design system.
      Use the CSS variable format: <code>var(--spacing-lg)</code>
    </p>

    <div>
      {Object.entries(spacing).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <span style={{ width: '60px', fontSize: '14px', fontWeight: 600 }}>{name}</span>
          <span style={{ width: '50px', fontSize: '12px', color: '#6B7080' }}>{value}</span>
          <div
            style={{
              width: value,
              height: '24px',
              backgroundColor: '#2E6CF6',
              borderRadius: '4px',
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Spacing',
  component: SpacingPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
