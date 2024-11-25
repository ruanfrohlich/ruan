import { capitalize } from '@ruan/utils/formatters';

export default function Home() {
  return (
    <div>
      <div>{capitalize('Hello World!')}</div>
    </div>
  );
}
