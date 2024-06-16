import { SidebarNavItem } from './SidebarNavItem';

export default function Sidebar() {
  return (
    <div className='h-screen fixed w-64 flex flex-col bg-gray-800 rounded-e-lg'>
      <div className='p-4'>
        <h1 className='font-bold text-2xl text-white uppercase tracking-wider'>
          Eduhub <i className='text-blue-500'>Admin</i>
        </h1>
      </div>
      <div className='flex-grow'>
        <SidebarNavItem />
      </div>
    </div>
  );
}
