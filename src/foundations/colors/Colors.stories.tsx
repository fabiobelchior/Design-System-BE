import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { colors } from '../global-tokens';

const ColorSwatch = ({
  name,
  value,
  cssVar,
  description,
  swatchStyle,
}: {
  name: string;
  value: string;
  cssVar: string;
  description?: string;
  swatchStyle?: CSSProperties;
}) => (
  <div style={{ marginBottom: '16px' }}>
    <div
      style={{
        width: '100%',
        height: '80px',
        backgroundColor: value,
        borderRadius: '10px',
        ...swatchStyle,
      }}
    />
    <div style={{ marginTop: '8px' }}>
      <div style={{ fontWeight: 600, fontSize: '14px', color: '#273240' }}>{name}</div>
      <div style={{ fontSize: '12px', color: '#616161' }}>{value}</div>
      <div
        style={{
          fontSize: '11px',
          color: '#9C9C9C',
          fontFamily: 'monospace',
        }}
      >
        {cssVar}
      </div>
      {description && (
        <div style={{ fontSize: '11px', color: '#9C9C9C', marginTop: '2px' }}>
          {description}
        </div>
      )}
    </div>
  </div>
);

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => (
  <div style={{ marginBottom: '48px', paddingTop: '32px', borderTop: '1px solid #E6E6E6' }}>
    <h3 style={{ marginBottom: '4px', fontSize: '20px', color: '#273240' }}>
      {title}
    </h3>
    {description && (
      <p style={{ color: '#616161', fontSize: '14px', marginBottom: '20px' }}>
        {description}
      </p>
    )}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '20px',
      }}
    >
      {children}
    </div>
  </div>
);

const SubSection = ({ title }: { title: string }) => (
  <div style={{ gridColumn: '1 / -1' }}>
    <h4
      style={{
        fontSize: '16px',
        marginBottom: '4px',
        marginTop: '8px',
        color: '#273240',
      }}
    >
      {title}
    </h4>
  </div>
);

const ColorsPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Colours</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Cores do Design System BE. Use CSS variables:{' '}
      <code>var(--color-brand-primary)</code>
    </p>

    <Section
      title="Cores Variaveis (Whitelabel)"
      description="Cores principais do produto, personalizaveis conforme a identidade visual de cada cliente."
    >
      <ColorSwatch
        name="brandPrimary"
        value={colors.brandPrimary}
        cssVar="--color-brand-primary"
        description="Primary CTA"
      />
      <div style={{ marginBottom: '16px' }}>
        <div
          style={{
            width: '100%',
            height: '80px',
            backgroundColor: colors.brandPrimary,
            filter: 'brightness(0.9)',
            borderRadius: '10px',
          }}
        />
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#273240' }}>
            brandPrimary hover
          </div>
          <div style={{ fontSize: '12px', color: '#616161' }}>
            filter: brightness(0.9)
          </div>
          <div style={{ fontSize: '11px', color: '#9C9C9C', fontFamily: 'monospace' }}>
            --color-brand-primary
          </div>
          <div style={{ fontSize: '11px', color: '#9C9C9C', marginTop: '2px' }}>
            Primary CTA hover (-10% brilho)
          </div>
        </div>
      </div>
    </Section>

    <Section
      title="Cores Neutras"
      description="Tons basicos para estrutura, textos e fundos, garantindo legibilidade e equilibrio."
    >
      <ColorSwatch
        name="gray800"
        value={colors.gray800}
        cssVar="--color-gray-800"
        description="Textos, Icones, Tooltips"
      />
      <ColorSwatch
        name="gray500"
        value={colors.gray500}
        cssVar="--color-gray-500"
      />
      <ColorSwatch
        name="gray400"
        value={colors.gray400}
        cssVar="--color-gray-400"
        description="Icones, Disable Links"
      />
      <ColorSwatch
        name="gray300"
        value={colors.gray300}
        cssVar="--color-gray-300"
        description="Stroke Caixa, Stroke Botoes sec., Stroke Input"
      />
      <ColorSwatch
        name="gray200"
        value={colors.gray200}
        cssVar="--color-gray-200"
        description="Backgrounds, Dividers"
      />
      <ColorSwatch
        name="gray100"
        value={colors.gray100}
        cssVar="--color-gray-100"
        description="Hover Secondary button"
      />
      <ColorSwatch
        name="white"
        value={colors.white}
        cssVar="--color-white"
        swatchStyle={{ border: '1px solid #E6E6E6' }}
      />
    </Section>

    <Section title="Foreground">
      <ColorSwatch
        name="foregroundPrimary"
        value={colors.foregroundPrimary}
        cssVar="--color-foreground-primary"
        description="Texto principal"
      />
    </Section>

    <Section
      title="Cores de Apoio"
      description="Usadas para indicar estados: alerta, erro, sucesso e links."
    >
      <SubSection title="Success" />
      <ColorSwatch
        name="green500"
        value={colors.green500}
        cssVar="--color-success-500"
        description="Feedback positivo, Cards de pacote"
      />
      <ColorSwatch
        name="green100"
        value={colors.green100}
        cssVar="--color-success-100"
        description="Navegacao steps check-out"
      />
      <ColorSwatch
        name="successForeground"
        value={colors.successForeground}
        cssVar="--color-success-foreground"
      />
      <ColorSwatch
        name="successLight"
        value={colors.successLight}
        cssVar="--color-success-light"
      />

      <SubSection title="Error" />
      <ColorSwatch
        name="red500"
        value={colors.red500}
        cssVar="--color-error-500"
        description="Erros, Notificacoes, Icones"
      />
      <ColorSwatch
        name="errorLight"
        value={colors.errorLight}
        cssVar="--color-error-light"
      />

      <SubSection title="Warning" />
      <ColorSwatch
        name="yellow500"
        value={colors.yellow500}
        cssVar="--color-warning-500"
        description="Warning, Icons"
      />
      <ColorSwatch
        name="yellowBackground"
        value={colors.yellowBackground}
        cssVar="--color-warning-bg"
      />
      <ColorSwatch
        name="yellowLight"
        value={colors.yellowLight}
        cssVar="--color-warning-light"
      />

      <SubSection title="Information" />
      <ColorSwatch
        name="blue500"
        value={colors.blue500}
        cssVar="--color-info-500"
        description="Info Modal Icons, Links"
      />
      <ColorSwatch
        name="infoBackground"
        value={colors.infoBackground}
        cssVar="--color-info-bg"
      />
      <ColorSwatch
        name="infoLight"
        value={colors.infoLight}
        cssVar="--color-info-light"
      />
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Colours',
  component: ColorsPage,
};

export default meta;

type Story = StoryObj;

export const AllColours: Story = {};
