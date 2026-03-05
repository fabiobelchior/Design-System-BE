import type { Meta, StoryObj } from '@storybook/react-vite';
import { stroke } from '../global-tokens';

const usageMap: Record<string, string> = {
  thin: 'Dividers, Bordar de cards, Bordas de inputs, Botoes secundarios e terciarios, Radio buttons, Checkboxes',
};

const StrokePage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Stroke</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Padronizacao e utilizacao dos strokes no design system.
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '32px',
      }}
    >
      {Object.entries(stroke).map(([name, value]) => (
        <div key={name}>
          <div
            style={{
              width: '120px',
              height: '120px',
              border: '1px solid #E6E6E6',
              borderRadius: '8px',
              margin: '0 auto 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: 0,
                borderTop: `${value} solid #273240`,
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#273240',
              }}
            >
              {value}
            </span>
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
              --stroke-{name}
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
  title: 'Foundations/Stroke',
  component: StrokePage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
