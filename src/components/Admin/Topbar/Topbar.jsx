export default function Topbar() {
  const handleSignOut = () => {};

  return (
    <div className="h-16 flex items-center justify-end px-4 border-b ">
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer hover:text-gray-300">User Profile</div>
        <div className="cursor-pointer hover:text-gray-300">Settings</div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer hover:text-gray-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
