import React, { useState } from "react";

type ProfilePhotoProps = {
  className: string;
  size: number;
};

const ProfilePhoto = ({ className, size }: ProfilePhotoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <button
      type="button"
      className={`profile-photo-frame profile-photo-trigger ${className}${isAnimating ? " profile-photo-trigger-active" : ""}`}
      aria-label="Animate profile photo"
      onClick={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <img
        src="/images/juho-profile-photo.jpg"
        alt="Portrait of Juho Heikkinen"
        className="profile-photo"
        width={size}
        height={size}
      />
    </button>
  );
};

export default ProfilePhoto;
