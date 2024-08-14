import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  
  if (Number.isNaN(props.id)) throw new Error("Invalid image id");
  const image = await getImage(props.id);
  return <img src={image.url} alt="img" className="w-96" />;
}
