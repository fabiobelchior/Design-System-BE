import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { typography } from '../global-tokens';

const sampleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890';

const weightLabel = (w: number) =>
  w === 400 ? 'Regular' : w === 600 ? 'Semibold' : 'Bold';

const TypeRow = ({
  name,
  style,
  description,
}: {
  name: string;
  style: { fontSize: string; fontWeight: number; lineHeight: string };
  description?: string;
}) => (
  <div
    style={{
      marginBottom: '32px',
      paddingBottom: '32px',
      borderBottom: '1px solid #E6E6E6',
    }}
  >
    <div
      style={{
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        color: '#273240',
        marginBottom: '12px',
      }}
    >
      {sampleText}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        fontSize: '12px',
        color: '#616161',
      }}
    >
      <span style={{ fontWeight: 600, color: '#273240', minWidth: '180px' }}>
        {name}
      </span>
      <span>Tamanho: {style.fontSize}</span>
      <span>Peso: {weightLabel(style.fontWeight)} ({style.fontWeight})</span>
      <span>Altura de linha: {style.lineHeight}</span>
    </div>
    {description && (
      <div style={{ fontSize: '11px', color: '#9C9C9C', marginTop: '4px' }}>
        {description}
      </div>
    )}
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
      <p style={{ color: '#616161', fontSize: '14px', marginBottom: '24px' }}>
        {description}
      </p>
    )}
    {children}
  </div>
);

const TypographyPage = () => (
  <div style={{ fontFamily: 'var(--font-family-primary, Inter, sans-serif)' }}>
    <h2 style={{ marginBottom: '8px', color: '#273240' }}>Typography</h2>
    <p style={{ color: '#616161', marginBottom: '32px' }}>
      Sistema tipografico do Design System BE. Font family: <strong>Inter</strong>.
    </p>

    <Section
      title="Heading"
      description="Utilizadas para titulos e secoes que organizam a hierarquia de conteudo, destacando informacoes importantes."
    >
      <TypeRow
        name="Heading 3XL 32 700"
        style={typography.heading3xl}
        description="Nome do hotel (pagina de detalhes do hotel)"
      />
      <TypeRow
        name="Heading 2XL 24 700"
        style={typography.heading2xl}
        description="Pagina titlos, subtitlos de secoes"
      />
      <TypeRow
        name="Heading L 20 700"
        style={typography.headingL}
        description="Titulos de cards, precos"
      />
      <TypeRow
        name="Heading M 18 600"
        style={typography.headingMSemibold}
        description="Titulos de Hotels, quartos e pacotes"
      />
      <TypeRow
        name="Heading M 18 700"
        style={typography.headingMBold}
        description="Titulos de Hotels, quartos e pacotes"
      />
      <TypeRow
        name="Heading S 16 600"
        style={typography.headingSSemibold}
        description="Titulos de modais, Filtros, Servicos e Tarifas e voo"
      />
      <TypeRow
        name="Heading S 16 700"
        style={typography.headingSBold}
        description="Titulos de modais, Filtros, Servicos e Tarifas e voo"
      />
    </Section>

    <Section
      title="Body"
      description="Usada para blocos de texto continuo, responsavel pela maior parte da comunicacao escrita."
    >
      <TypeRow
        name="Body L 16 400"
        style={typography.bodyL}
        description="Textos secundarios maiores"
      />
      <TypeRow
        name="Body M 14 400"
        style={typography.bodyM}
        description="Labels de CTAs primarios e secundarios | Descricao de hotel, quartos, tarifas"
      />
      <TypeRow
        name="Body M 14 600"
        style={typography.bodyMSemibold}
        description="Labels de CTAs primarios e secundarios | Descricao de hotel, quartos, tarifas"
      />
      <TypeRow
        name="Body M 14 700"
        style={typography.bodyMBold}
        description="Labels de CTAs primarios e secundarios | Descricao de hotel, quartos, tarifas"
      />
      <TypeRow
        name="Body S 13 400"
        style={typography.bodyS}
        description="Textos auxiliares com menor destaque"
      />
      <TypeRow
        name="Body S 13 600"
        style={typography.bodySSemibold}
        description="Textos auxiliares com maior destaque"
      />
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographyPage,
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
