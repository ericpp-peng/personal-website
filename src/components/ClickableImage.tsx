import {FC, memo, useState, useCallback} from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface ClickableImageProps {
  src: string;
  alt: string;
  popupSrc: string;
  popupAlt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

const ClickableImage: FC<ClickableImageProps> = memo(({src, alt, popupSrc, popupAlt, width, height, style}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Image 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        style={style}
        onClick={handleClick}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClose}
        imageSrc={popupSrc}
        alt={popupAlt}
      />
    </>
  );
});

ClickableImage.displayName = 'ClickableImage';
export default ClickableImage; 