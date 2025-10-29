import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * YouTube Play Icon SVG (Tailwind version uses currentColor for easy styling)
 */
const PlayIcon = (props) => (
  <svg
    className="w-8 h-8 md:w-9 md:h-9 ml-1" // Adjusted size and slight margin
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M6 3l12 9-12 9z" />
  </svg>
);

/**
 * A reusable video player component that displays a glowing play button
 * on a thumbnail. Clicking the button opens the video in a modal popup.
 *
 * NOTE: Assumes Tailwind CSS and the custom 'glow-red' config are available.
 * * @param {object} props
 * @param {string} props.youtubeId - The unique ID of the YouTube video (e.g., 'dQw4w9WgXcQ').
 * @param {string} props.title - The title or description of the video for accessibility.
 * @param {string} [props.thumbnailUrl] - Custom thumbnail URL. If not provided, it uses the default YouTube high-quality thumbnail.
 */
const Video = ({ youtubeId, title, thumbnailUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default YouTube high-quality thumbnail
  const defaultThumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const finalThumbnailUrl = thumbnailUrl || defaultThumbnailUrl;

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // Construct the full embed URL with autoplay enabled for a better modal experience
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  // --- Modal Component (Rendered via Portal) ---
  const VideoModal = () => {
    if (!isOpen) return null;

    return createPortal(
      // Backdrop: fixed, full screen, centered, high z-index, and the key 75% opacity
      <div
        className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-75 p-5"
        onClick={closeModal}
      >
        <div
          // Content Container: relative for close button, max width, 16:9 ratio, dark background
          className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
          // Stop propagation so clicking the video area doesn't close the modal
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button: absolute, top/right offset, large text, white, high z-index */}
          <button
            className="absolute -top-8 -right-8 text-white text-4xl font-bold cursor-pointer opacity-80 hover:opacity-100 transition-opacity z-[1001] md:top-2 md:right-2"
            onClick={closeModal}
            aria-label="Close Video Player"
          >
            &times;
          </button>

          {/* Iframe: full width/height, no border */}
          <iframe
            className="w-full h-full rounded-lg"
            src={embedUrl}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>,
      document.body // Portal target
    );
  };

  // --- Main Player Preview Component ---
  return (
    // Container: relative, max width, 16:9 ratio, rounded, shadow
    <div className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
      <div
        // Preview Area: full size, background image, center content, interactive
        className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
        style={{ backgroundImage: `url(${finalThumbnailUrl})` }}
        onClick={openModal}
        role="button"
        tabIndex="0"
        aria-label={`Play video: ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openModal();
          }
        }}
      >
        {/* Play Button: The Glowing Part */}
        <button
          // Size, shape, dark background, text color, z-index, transitions
          className="relative w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center border-none z-10 
                     transition-all duration-300 hover:scale-110
                     shadow-glow-red animate-pulse-glow"
          onClick={openModal}
          aria-label="Play Video"
        >
          <PlayIcon />
        </button>
      </div>
      <VideoModal />
    </div>
  );
};

export default Video;
