import { postcss } from "tailwindcss";
import { db } from "~/server/db";

const imgUrls = ["https://utfs.io/f/647fd81f-c235-4cba-af29-53280d0e6514-ve28ll.png",
  "https://utfs.io/f/d7f751a9-d0ee-41f3-86d4-2848ecb4a302-jg9rdf.png",
  "https://utfs.io/f/bffbe71e-8021-4e85-ac75-8b8c14a9f107-wkf9ly.png",
  "https://utfs.io/f/76707c7e-2d65-4330-84c5-dcaa64a2b4f7-qssda6.png"
]
const mockImages = imgUrls.map((url, index) => ({
  id: index +1 ,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
   <main >
    <div className="flex flex-wrap gap-1 p-1">
    {posts.map((post) => (
      <div key={post.id} className="flex items-center">{post.name}</div>
      ))}  
    {mockImages.map((image, index ) => (
        <img key={image.id} src={image.url} className="h-48" alt="image"/>
    
    ))}
    </div>

   </main>
  );
}
