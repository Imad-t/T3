import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  if (Number.isNaN(props.id)) throw new Error("Invalid image id");
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId); 

console.log(uploaderInfo)
  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt="img" className="flex-shrink object-contain" />
      </div>
      <div className="flex w-64 flex-col flex-shrink-0 border-l-2 gap-2">
        <div className="text-lg font-semibold text-center border-b-2 p-2">{image.name}</div>
        <div className="flex flex-col px-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.username}</span>
        </div>
        <div className="flex flex-col px-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
