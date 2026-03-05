import type { Meta, StoryObj } from '@storybook/react-vite';
import { shadows } from '../global-tokens';

const usageMap: Record<string, string> = {
  shadow1: 'Comboboxes, Dropdowns, Modais',
};

const ShadowsPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Shadows</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Padronizacao e utilizacao das sombras no design system.
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '32px',
      }}
    >
      {Object.entries(shadows).map(([name, value]) => (
        <div key={name}>
          <div
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: '#FFFFFF',
              boxShadow: value,
              borderRadius: '8px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 600,
              color: '#273240',
            }}
          >
            {name}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 600, fontSize: '14px', color: '#273240' }}>
              {name}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: '#9C9C9C',
                fontFamily: 'monospace',
              }}
            >
              --shadow-{name === 'shadow1' ? '1' : name}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: '#9C9C9C',
                fontFamily: 'monospace',
                marginTop: '2px',
                maxWidth: '200px',
                margin: '2px auto 0',
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: '12px', color: '#616161', marginTop: '4px' }}>
              {usageMap[name]}
            </div>
          </div>
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
