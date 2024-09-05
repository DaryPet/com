import Image from 'next/image';
import SidebarItem from './sidebar-item';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-50 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <div className="text-white p-8">Тест Sidebar</div>
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="icons/Frame 1000003593.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="icons/squares-2x2.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            width={18}
            height={18}
            src="icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
