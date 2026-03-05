import type { Meta, StoryObj } from '@storybook/react-vite';
import { radius } from '../global-tokens';

const RadiusPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '24px' }}>Corner Radius</h2>
    <p style={{ color: '#6B7080', marginBottom: '32px' }}>
      Border radius tokens used for rounded corners across the design system.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '24px' }}>
      {Object.entries(radius).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#2E6CF6',
              borderRadius: value,
              margin: '0 auto 12px',
            }}
          />
          <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
          <div style={{ fontSize: '12px', color: '#6B7080' }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Radius',
  component: RadiusPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
