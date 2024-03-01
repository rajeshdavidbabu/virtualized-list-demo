const itemHeight = 35; // Adjustable global variable

export const NonVirtualizedList = ({
  numberOfItems,
}: {
  numberOfItems: number;
}) => {
  const listItems = Array.from({ length: numberOfItems }, (_, index) => (
    <ListItem key={index} index={index} />
  ));

  return (
    <ul
      className="overflow-y-scroll w-full h-[500px] border-2 border-black"
      onScroll={(e) => {
        console.log('Scrolling ', e.currentTarget.scrollTop);
      }}
    >
      {listItems}
    </ul>
  );
};

const ListItem = ({ index }: { index: number }) => {
  return (
    <li style={{ height: `${itemHeight}px` }} className="text-center">
      List Item Index - {index}
    </li>
  );
};
