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
    <div className="flex flex-wrap gap-1 p-1"> 
    {images.map((image, index ) => (
        <img key={image.id} src={image.url} className="h-48" alt="image"/>
    ))}
    </div>

   </main>
  );
}
