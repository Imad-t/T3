import { getImage } from "~/server/queries";
export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);
  const image = await getImage(id);
  return <div>
    <img src={image.url} alt="img" className="w-96" />
  </div>;
}