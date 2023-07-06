import { capitalize } from '@ruan/utils/formatters';
import { Button } from '@ruan/design-system/components';

export default function Home() {
  return (
    <div>
      <div>{capitalize('Hello World!')}</div>
      <Button>Enviar</Button>
    </div>
  );
}
