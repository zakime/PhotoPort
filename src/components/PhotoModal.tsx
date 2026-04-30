import type { Photo } from "../data/photos";

type PhotoModalProps = {
  photo: Photo | null;
  onClose: () => void;
};

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={photo.title}>
      <div className="modal-content">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <img className="modal-image" src={photo.imageUrl} alt={photo.title} />
        <div className="modal-info">
          <h3>{photo.title}</h3>
          <p>{photo.category}</p>
        </div>
      </div>
    </div>
  );
}
