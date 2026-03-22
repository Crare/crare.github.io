import React, { useEffect, useRef } from "react";
import { GalleryItem } from "../types";

type GalleryModalProps = {
  galleryModal: {
    open: boolean;
    title: string;
    items: GalleryItem[];
    index: number;
  };
  closeGalleryModal: () => void;
  showPrevGalleryImage: () => void;
  showNextGalleryImage: () => void;
};

const GalleryModal = ({
  galleryModal,
  closeGalleryModal,
  showPrevGalleryImage,
  showNextGalleryImage,
}: GalleryModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!galleryModal.open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGalleryModal();
      }
      if (event.key === "ArrowLeft" && galleryModal.items.length > 1) {
        showPrevGalleryImage();
      }
      if (event.key === "ArrowRight" && galleryModal.items.length > 1) {
        showNextGalleryImage();
      }

      if (event.key === "Tab" && modalPanelRef.current) {
        const focusableElements = Array.from(
          modalPanelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement | null;

        if (!modalPanelRef.current.contains(activeElement)) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement).focus();
          return;
        }

        if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }

        if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryModal.open, galleryModal.items.length, closeGalleryModal, showNextGalleryImage, showPrevGalleryImage]);

  if (!galleryModal.open || !galleryModal.items[galleryModal.index]) {
    return null;
  }

  return (
    <div
      className="gallery-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      aria-describedby="gallery-modal-instructions"
      onClick={closeGalleryModal}
    >
      <div className="gallery-modal-panel" ref={modalPanelRef} onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="gallery-modal-close"
          onClick={closeGalleryModal}
          aria-label="Close image gallery"
          ref={closeButtonRef}
        >
          x
        </button>
        {galleryModal.items.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-modal-nav gallery-modal-prev"
              onClick={showPrevGalleryImage}
              aria-label="Show previous image"
            >
              Previous
            </button>
            <button
              type="button"
              className="gallery-modal-nav gallery-modal-next"
              onClick={showNextGalleryImage}
              aria-label="Show next image"
            >
              Next
            </button>
          </>
        )}
        <img
          className="gallery-modal-image"
          src={galleryModal.items[galleryModal.index].full}
          alt={galleryModal.items[galleryModal.index].alt}
          decoding="async"
        />
        <div className="gallery-modal-meta">
          <span id="gallery-modal-title">{galleryModal.title}</span>
          <span>
            {galleryModal.index + 1} / {galleryModal.items.length}
          </span>
        </div>
        <p id="gallery-modal-instructions" className="sr-only">
          Use left and right arrow keys to change image. Press escape to close the gallery.
        </p>
      </div>
    </div>
  );
};

export default GalleryModal;
