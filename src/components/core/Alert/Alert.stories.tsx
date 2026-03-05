import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de alerta para feedback ao usuario. Disponivel em 4 variantes: info, error, warning e success.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'error', 'warning', 'success'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Seu cartao nao sera cobrado',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum dictum quam in faucibus.',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="info" title="Informacao">
        Geralmente utilizado para informar coisas que nao afetam o usuario ou o
        fluxo.
      </Alert>
      <Alert variant="error" title="Erro">
        Utilizado para todos os feedbacks negativos.
      </Alert>
      <Alert variant="warning" title="Aviso">
        Utilizado para avisos de feedback, ou interferencias leves ao fluxo.
      </Alert>
      <Alert variant="success" title="Sucesso">
        Utilizado para todos os feedbacks positivos.
      </Alert>
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="info" title="Seu cartao nao sera cobrado" />
      <Alert variant="error" title="Ocorreu um erro ao processar o pagamento" />
      <Alert variant="warning" title="Sua sessao expira em 5 minutos" />
      <Alert variant="success" title="Reserva confirmada com sucesso" />
    </div>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Seu cartao nao sera cobrado',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum dictum quam in faucibus. Etiam quis ante justo.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Erro ao processar pagamento',
    children:
      'Verifique os dados do cartao e tente novamente. Se o problema persistir, entre em contato com o suporte.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Atencao',
    children:
      'Sua sessao expira em 5 minutos. Salve suas alteracoes para evitar perda de dados.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Reserva confirmada',
    children:
      'Sua reserva foi confirmada com sucesso. Voce recebera um email com os detalhes.',
  },
};
