import { NonVirtualizedList } from '~/components/non-virtualized-list';

export const numberOfItems = 1;

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className={'text-lg font-bold'}>Rendering {numberOfItems}</h1>
      <NonVirtualizedList numberOfItems={numberOfItems} />
    </div>
  );
}
