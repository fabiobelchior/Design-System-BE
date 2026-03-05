import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors, spacing, fontSize, fontWeight, radius, shadows } from './index';

const TokenTable = ({
  title,
  tokens,
  cssPrefix,
}: {
  title: string;
  tokens: Record<string, string | number>;
  cssPrefix: string;
}) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{ marginBottom: '12px' }}>{title}</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #EDEEF2' }}>
          <th style={{ textAlign: 'left', padding: '8px 12px' }}>Token</th>
          <th style={{ textAlign: 'left', padding: '8px 12px' }}>CSS Variable</th>
          <th style={{ textAlign: 'left', padding: '8px 12px' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key} style={{ borderBottom: '1px solid #EDEEF2' }}>
            <td style={{ padding: '8px 12px', fontWeight: 500 }}>{key}</td>
            <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '12px', color: '#6B7080' }}>
              --{cssPrefix}-{key}
            </td>
            <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '12px' }}>{String(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GlobalTokensPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px' }}>Global Tokens</h2>
    <p style={{ color: '#6B7080', marginBottom: '32px' }}>
      All design tokens available in the system. These are the raw values that power the design system foundations.
    </p>
    <TokenTable title="Colors" tokens={colors} cssPrefix="color" />
    <TokenTable title="Spacing" tokens={spacing} cssPrefix="spacing" />
    <TokenTable title="Font Size" tokens={fontSize} cssPrefix="font-size" />
    <TokenTable title="Font Weight" tokens={fontWeight} cssPrefix="font-weight" />
    <TokenTable title="Radius" tokens={radius} cssPrefix="radius" />
    <TokenTable title="Shadows" tokens={shadows} cssPrefix="shadow" />
  </div>
);

const meta: Meta = {
  title: 'Foundations/Global Tokens',
  component: GlobalTokensPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
