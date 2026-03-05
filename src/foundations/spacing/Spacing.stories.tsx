import type { Meta, StoryObj } from '@storybook/react-vite';
import { spacing } from '../global-tokens';

const SpacingPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Spacing</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Padronizacao e utilizacao dos espacamentos no design system. Usados em margens e
      paddings.
    </p>

    <div>
      {Object.entries(spacing).map(([name, value]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '12px',
          }}
        >
          <span style={{ width: '50px', fontSize: '14px', fontWeight: 600, color: '#273240' }}>
            {value}
          </span>
          <div
            style={{
              width: value,
              height: '24px',
              backgroundColor: '#B8DBF8',
              borderRadius: '2px',
              minWidth: name === '0' ? '1px' : undefined,
            }}
          />
          <span
            style={{
              fontSize: '11px',
              color: '#9C9C9C',
              fontFamily: 'monospace',
            }}
          >
            --spacing-{name}
          </span>
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
