import { render } from '@testing-library/react';

import { mdiAbTesting } from '@mdi/js';

import Icon from './Icon';

describe('Components/Icon - Teste do componente de ícone', () => {
  it('Renderização de um ícone - medium', () => {
    const container = render(<Icon icon={mdiAbTesting} />);
    const icon = container.queryByRole('img');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('height')).toBe("24");
    expect(icon?.getAttribute('width')).toBe("24");
  });

  it('Renderização de um ícone - small', () => {
    const container = render(<Icon icon={mdiAbTesting} size='small' />);
    const icon = container.queryByRole('img');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('height')).toBe("16");
    expect(icon?.getAttribute('width')).toBe("16");
  });
});