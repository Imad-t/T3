import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  if (Number.isNaN(props.id)) throw new Error("Invalid image id");
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt="img" className="flex-shrink object-contain" />
      </div>
      <div className="flex w-64 flex-col flex-shrink-0 p-4 border-l-2">
        <div className="text-lg font-semibold">{image.name}</div>
      </div>
    </div>
  );
}
