"use client";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';
const Navbar = () => {

  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between bg-gray-400 p-4 text-black font-semibold">
      <div>Gallery</div>
      <div className='flex'>
        <SignedIn>
          <UploadButton 
          endpoint='imageUploader'
          onClientUploadComplete={() => router.refresh()}
          />
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
