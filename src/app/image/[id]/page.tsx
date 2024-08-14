import FullPageImageView from "~/app/components/full-image-page";
export default  function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);
  return( <div className="h-full">
    <FullPageImageView id={id} />
  </div>);
}