import { getServerSession } from 'next-auth';
import UserInfo from './UserInfo';
import Link from 'next/link';
import { authOptions } from '@/lib/authOptions';
import LogoutButton from './LogoutButton';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log("Session -------------------->", session);
  return (
    <div className='w-10/12 mx-auto flex justify-around'>
      <div>
        <p className='text-3xl font-bold text-red-500'> Logo </p>
      </div>

      <div className='space-x-6 font-bold text-lg'>
        <Link href="/products"> Products </Link>
        <Link href="/dashboard/add-product"> Add Product </Link>
      </div>

      <div>
        <p className='text-xl text-green-500 font-bold'> FROM CLIENT COMPONENT: </p>
        <UserInfo />
        <p className='text-xl text-green-500 font-bold'> FROM SERVER COMPONENT: </p>
        <p> {JSON.stringify(session)} </p>
      </div>

      <div>
        {
          session?.user ?
            <LogoutButton />
            :
            <div>
              <div className='space-x-'>
                <Link href='/login' className='btn bg-blue-500'> Login </Link>
                <Link href='/signup' className='btn bg-orange-500'> SignUp </Link>
              </div>
            </div>
        }

      </div>
    </div>
  );
};

export default Navbar;