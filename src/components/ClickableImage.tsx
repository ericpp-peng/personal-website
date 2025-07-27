import Image from 'next/image';
import {FC, memo, useCallback,useState} from 'react';

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
      <Image alt={alt} height={height} onClick={handleClick} src={src} style={style} width={width} />
      <ImageModal alt={popupAlt} imageSrc={popupSrc} isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
});

ClickableImage.displayName = 'ClickableImage';
export default ClickableImage;
