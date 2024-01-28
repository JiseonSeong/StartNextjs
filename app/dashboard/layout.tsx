// Partial rendering:
//     On navigation, only the page components update while the layout won't re-render;

import SideNav from '@/app/ui/dashboard/sidenav';

// '<Layout /> component receives a 'children' prop: the child can either be a page or another layout;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-non w-full md:w-64">
        <SideNav />
      </div>
      {/* 'children' props : could be '/customers', '/invoices' */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
