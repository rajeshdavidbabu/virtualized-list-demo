import { useState } from 'react';

const itemHeight = 35; // Adjustable global variable
const windowHeight = 500; // Adjustable global variable
const overscan = 20; // Number of extra items to render before the visible range

export const VirtualizedList = ({
  numberOfItems,
}: {
  numberOfItems: number;
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    numberOfItems,
    Math.floor((scrollTop + windowHeight) / itemHeight) + overscan
  );

  const generateRows = () => {
    let items: JSX.Element[] = [];
    for (let i = startIndex; i < endIndex; i++) {
      items.push(<ListItem key={i} index={i} />);
    }

    return items;
  };

  return (
    <div
      className="overflow-y-scroll w-full border-2 border-black relative"
      style={{ height: `${windowHeight}px` }}
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div
        style={{
          height: `${numberOfItems * itemHeight}px`,
        }}
      >
        {generateRows()}
      </div>
    </div>
  );
};

const ListItem = ({ index }: { index: number }) => {
  return (
    <div
      style={{
        height: `${itemHeight}px`,
        top: `${itemHeight * index}px`,
        backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
      }}
      className="text-center w-full absolute"
    >
      List Item Index - {index}
    </div>
  );
};
