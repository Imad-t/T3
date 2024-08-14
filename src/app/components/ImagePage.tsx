import { getImage } from "~/server/queries";

export default async function PhotoModal(props:{id: number}) {
  const image = await getImage(props.id);
  return (
    <img src={image.url} alt="img" className="w-96" />
  );
}