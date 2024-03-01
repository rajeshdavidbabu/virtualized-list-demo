import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="flex flex-col items-center mt-24 h-[100vh]">
      Load the routes to see the difference in rendering time between
      non-virtual, virtual, and virtual-optimized lists.:
      <div>
        <Link to="/non-virtual" className="text-blue-500">
          /non-virtual
        </Link>
      </div>
      <div>
        <Link to="/virtual" className="text-blue-500">
          /virtual
        </Link>
      </div>
      <div>
        <Link to="/virtual-optimized" className="text-blue-500">
          /virtual-optimized
        </Link>
      </div>
    </div>
  );
}
