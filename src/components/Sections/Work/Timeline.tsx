import {BriefcaseIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, memo, useCallback, useEffect, useState} from 'react';

import type {TimelineItem} from '../../../data/dataDef';
import moxaLogo from '../../../images/MOXA-logo.svg';
import ImageModal from '../../ImageModal';

const Timeline: FC<{items: TimelineItem[]}> = memo(({items}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // 監聽點擊事件
  useEffect(() => {
    const handleImageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // 處理 protocol-gateway-image 點擊
      if (
        target.classList.contains('protocol-gateway-image') ||
        (target.closest('.group') && target.closest('.group')?.querySelector('.protocol-gateway-image'))
      ) {
        setModalImageSrc('/images/mgate_use_case.jpg');
        setModalAlt('MGate Use Case');
        setIsModalOpen(true);
      }
      // 處理 media-converter-image 點擊
      if (
        target.classList.contains('media-converter-image') ||
        (target.closest('.group') && target.closest('.group')?.querySelector('.media-converter-image'))
      ) {
        setModalImageSrc('/images/converter_use_case.svg');
        setModalAlt('Media Converter Use Case');
        setIsModalOpen(true);
      }
    };

    document.addEventListener('click', handleImageClick);
    return () => {
      document.removeEventListener('click', handleImageClick);
    };
  }, []);

  return (
    <>
      <div className="space-y-6">
        {items.map((item, index) => {
          const {title, date, location, content} = item;

          // 獲取公司地點
          const getCompanyLocation = () => {
            if (title === 'Embedded Software Engineer') {
              return 'Taipei, Taiwan';
            }
            // 可以根據其他職位添加更多地點
            return '';
          };

          // 獲取公司 logo
          const getCompanyLogo = () => {
            if (title === 'Embedded Software Engineer') {
              return <Image alt="MOXA Logo" className="h-16 w-16 object-contain" height={64} src={moxaLogo} width={64} />;
            }
            return <BriefcaseIcon className="h-16 w-16 text-orange-500" />;
          };

          return (
            <div key={`${title}-${index}`} className="flex flex-col pb-8 last:pb-0">
              {/* 工作內容區域 */}
              <div className="flex gap-3">
                {/* Logo 區域 */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">{getCompanyLogo()}</div>

                {/* 內容區域 */}
                <div className="flex-1">
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <h2 className="text-xl font-bold">{title}</h2>
                    </div>
                    <div className="mb-3">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-700">{location}</span>
                        <span className="text-gray-400 text-sm">{date} | {getCompanyLocation()}</span>
                      </div>
                    </div>
                    <div className="leading-relaxed text-gray-700">{content}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 模態框 */}
      <ImageModal alt={modalAlt} imageSrc={modalImageSrc} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
});

Timeline.displayName = 'Timeline';
export default Timeline; 