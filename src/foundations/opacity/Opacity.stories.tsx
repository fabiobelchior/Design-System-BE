import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { opacity, gradients } from '../global-tokens';

const checkerboard = `repeating-conic-gradient(#d3d3d3 0% 25%, #fff 0% 50%) 0 0 / 16px 16px`;

const OpacitySwatch = ({
  name,
  value,
  cssVar,
  description,
}: {
  name: string;
  value: string;
  cssVar: string;
  description?: string;
}) => (
  <div style={{ marginBottom: '16px' }}>
    <div
      style={{
        width: '100%',
        height: '80px',
        borderRadius: '10px',
        background: checkerboard,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: value,
          borderRadius: '10px',
        }}
      />
    </div>
    <div style={{ marginTop: '8px' }}>
      <div style={{ fontWeight: 600, fontSize: '14px', color: '#273240' }}>
        {name}
      </div>
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
  <div
    style={{
      marginBottom: '48px',
      paddingTop: '32px',
      borderTop: '1px solid #E6E6E6',
    }}
  >
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

const OpacityPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Opacity</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Combinacoes de cor + opacidade utilizadas no produto. Cada variacao define
      um grau de opacidade aplicado sobre uma cor base.
    </p>

    <Section
      title="Variacoes de opacidade utilizando White"
      description="Overlay transparente com branco, para sobreposicoes sobre imagens e fundos."
    >
      <OpacitySwatch
        name="White 60%"
        value={opacity.white60}
        cssVar="--opacity-white-60"
        description="Overlay transparente sobre imagens"
      />
      <OpacitySwatch
        name="White 75%"
        value={opacity.white75}
        cssVar="--opacity-white-75"
        description="Overlay para fundo semi-visivel"
      />
      <OpacitySwatch
        name="White 30%"
        value={opacity.white30}
        cssVar="--opacity-white-30"
        description="Separadores, Background semi-transparente"
      />
    </Section>

    <Section
      title="Variacoes de opacidade utilizando Gray-800"
      description="Overlay escuro para sobreposicoes e interfaces."
    >
      <OpacitySwatch
        name="Gray-800 40%"
        value={opacity.gray800_40}
        cssVar="--opacity-gray800-40"
        description="Uso em interfaces/overlays"
      />
      <OpacitySwatch
        name="Gray-800 70%"
        value={opacity.gray800_70}
        cssVar="--opacity-gray800-70"
        description="Overlays escuros"
      />
    </Section>

    <Section
      title="Gradientes"
      description="Gradientes de opacidade utilizados no produto."
    >
      <div style={{ marginBottom: '16px' }}>
        <div
          style={{
            width: '100%',
            height: '80px',
            borderRadius: '10px',
            background: checkerboard,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: gradients.whiteOverlay60,
              borderRadius: '10px',
            }}
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#273240' }}>
            White 60% Gradient
          </div>
          <div style={{ fontSize: '12px', color: '#616161' }}>
            White 60% → transparent
          </div>
          <div
            style={{
              fontSize: '11px',
              color: '#9C9C9C',
              fontFamily: 'monospace',
            }}
          >
            --gradient-white-overlay-60
          </div>
          <div style={{ fontSize: '11px', color: '#9C9C9C', marginTop: '2px' }}>
            Circuito de passagem de fotos da galeria
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Opacity',
  component: OpacityPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
