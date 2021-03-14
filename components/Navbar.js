export default function Navbar({ user }) {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <p className='text-2xl font-bold text-grey-800'>auth0-todo</p>
      <div className='flex'>
        {user && (
          <a
            href='/api/auth/logout'
            className='py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
          >
            Logout
          </a>
        )}
        {!user && (
          <a
            href='/api/auth/login'
            className='py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
