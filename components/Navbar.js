export default function Navbar() {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <p className='text-2xl font-bold text-grey-800'>My To-dos</p>
      <div className='flex'>
        <a
          href='/api/logout'
          className='py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
        >
          Logout
        </a>
        <a
          href='/api/login'
          className='py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
        >
          Login
        </a>
      </div>
    </nav>
  );
}
