import { SignedIn, SignedOut } from "@clerk/nextjs";
import { postcss } from "tailwindcss";
import { db } from "~/server/db";

// Dynamique routes
export const dynamic ="force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model, {desc}) =>desc(model.id),
  });
  return (
   <main >
    <SignedOut>
      <div className="flex items-center justify-center h-full mt-4 text-2xl font-semibold text-gray-200">
        Please sign in to view content.
      </div>
    </SignedOut>
    <SignedIn>
    <div className="flex flex-wrap gap-1 p-1"> 
    {images.map((img, index ) => (
      <div key={img.id} className="flex flex-col">
        <img src={img.url} className="h-48" alt="image"/>
        <p className="text-center">{img.name}</p>
      </div>
    ))}
    </div>
    </SignedIn>
   </main>
  );
}
