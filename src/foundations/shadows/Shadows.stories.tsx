import type { Meta, StoryObj } from '@storybook/react-vite';
import { shadows } from '../global-tokens';

const ShadowsPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '24px' }}>Shadows</h2>
    <p style={{ color: '#6B7080', marginBottom: '32px' }}>
      Box shadow tokens used for elevation across the design system.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
      {Object.entries(shadows).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '120px',
              height: '80px',
              backgroundColor: '#FFFFFF',
              boxShadow: value,
              borderRadius: '8px',
              margin: '0 auto 12px',
              border: name === 'none' ? '1px solid #EDEEF2' : 'none',
            }}
          />
          <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
          <div style={{ fontSize: '11px', color: '#6B7080', maxWidth: '180px', margin: '0 auto' }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Shadows',
  component: ShadowsPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
