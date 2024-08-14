import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import UploadButton  from './UploadButton';
const Navbar = () => {

  return (
    <nav className="flex w-full items-center justify-between bg-gray-400 p-4 text-black font-semibold">
      <div>Gallery</div>
      <div className='flex gap-4 items-center'>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
