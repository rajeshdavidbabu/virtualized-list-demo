import { VirtualizedListOptimized } from '~/components/virtualized-list-optimized';

export const numberOfItems = 100000;

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className={'text-lg font-bold'}>Rendering {numberOfItems}</h1>
      <VirtualizedListOptimized numberOfItems={numberOfItems} />
    </div>
  );
}
