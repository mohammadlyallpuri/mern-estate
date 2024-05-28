import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header() {
  const currentUserFromStore = useSelector(state => state.user.currentUser);
  const [currentUser, setCurrentUser] = useState(currentUserFromStore);

  useEffect(() => {
    setCurrentUser(currentUserFromStore);
  }, [currentUserFromStore]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>Lyallpuri</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hidden sm:inline text-slate-700 hover:underline'>
            <Link to='/about'>About</Link>
          </li>
          <li className='text-slate-700 hover:underline'>
            <Link to='/profile'>
              {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar || '/default-avatar.png'} alt='profile'  />
              ) : (
                'Sign in'
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;