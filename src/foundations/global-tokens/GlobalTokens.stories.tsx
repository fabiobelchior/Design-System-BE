import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  radius,
  shadows,
  opacity,
} from './index';

const TokenTable = ({
  title,
  tokens,
}: {
  title: string;
  tokens: Record<string, string | number>;
}) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{ marginBottom: '12px', color: '#273240' }}>{title}</h3>
    <table
      style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}
    >
      <thead>
        <tr style={{ borderBottom: '2px solid #E6E6E6' }}>
          <th style={{ textAlign: 'left', padding: '8px 12px' }}>Token</th>
          <th style={{ textAlign: 'left', padding: '8px 12px' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key} style={{ borderBottom: '1px solid #E6E6E6' }}>
            <td style={{ padding: '8px 12px', fontWeight: 500 }}>{key}</td>
            <td
              style={{
                padding: '8px 12px',
                fontFamily: 'monospace',
                fontSize: '12px',
              }}
            >
              {String(value)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GlobalTokensPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Global Tokens</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Todos os design tokens disponiveis no sistema.
    </p>
    <TokenTable title="Colors" tokens={colors} />
    <TokenTable title="Spacing" tokens={spacing} />
    <TokenTable title="Font Size" tokens={fontSize} />
    <TokenTable title="Font Weight" tokens={fontWeight} />
    <TokenTable title="Line Height" tokens={lineHeight} />
    <TokenTable title="Radius" tokens={radius} />
    <TokenTable title="Shadows" tokens={shadows} />
    <TokenTable title="Opacity" tokens={opacity} />
  </div>
);

const meta: Meta = {
  title: 'Foundations/Global Tokens',
  component: GlobalTokensPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
