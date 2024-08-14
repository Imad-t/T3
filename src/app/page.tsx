import { SignedIn, SignedOut } from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

// Dynamique routes
export const dynamic ="force-dynamic";

async function Images(){
  const images = await getMyImages();
return (
  <div className="flex flex-wrap gap-2 p-2"> 
    {[...images,...images,...images].map((img ) => (
      <div key={img.id} className="flex flex-col h-40 w-48">     
       <Link href={`/image/${img.id}`}>
       <Image src={img.url} 
        style={{objectFit: "contain"}}
        width={400} 
        height={400} 
        alt="image"/>
        </Link>
        <p className="text-center">{img.name}</p>
      </div>
    ))}
    </div>
)
};


export default async function HomePage() {
  return (
   <main >
    <SignedOut>
      <div className="flex items-center justify-center h-full mt-4 text-2xl font-semibold text-gray-200">
        Please sign in to view content.
      </div>
    </SignedOut>
    <SignedIn>
      <Images />
    </SignedIn>
   </main>
  );
}
