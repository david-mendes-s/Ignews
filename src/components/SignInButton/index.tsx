import { FaGithub } from 'react-icons/fa'; 
import {FiX} from 'react-icons/fi';

export default function SignInButton() {

  const isUserLoggedIn = false;
  
  return isUserLoggedIn ? (
    <button className='flex items-center justify-between h-12 px-6 bg-gray-700
                       rounded-full hover:brightness-90 hover:duration-200 text-white'>
      <FaGithub className='w-5 h-5 mr-4 fill-green-600'/>
      David Mendes
      <FiX className='w-5 h-5 ml-3 text-[#737388]'/>
    </button>
  ) : (
    <button className='flex items-center justify-between h-12 px-6 bg-gray-700
                       rounded-full hover:brightness-90 hover:duration-200'>
      <FaGithub className='w-5 h-5 mr-4 fill-yellow-400'/>
      Sign in with Github
    </button>
  );
}
