import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);
  if(Number.isNaN(id)) throw new Error('Invalid image id');
  
  return (
    <Modal>
      <FullPageImageView id={id} />
    </Modal>
  );
}
