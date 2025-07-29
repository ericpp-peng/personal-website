import {Dialog, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, Fragment, memo, useMemo} from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

const ImageModal: FC<ImageModalProps> = memo(({isOpen, onClose, imageSrc, alt}) => {
  const imageStyle = useMemo(() => ({objectFit: 'contain' as const}), []);

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button
                    className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onClick={onClose}>
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-4">
                  {imageSrc.includes('converter_use_case.svg') && (
                    <div className="mb-4 text-center">
                      <h3 className="text-2xl font-bold text-orange-500">Subway Station</h3>
                    </div>
                  )}
                  {imageSrc.includes('mgate_use_case.jpg') && (
                    <div className="mb-4 text-center">
                      <h3 className="text-2xl font-bold text-orange-500">Electric Power Industry</h3>
                    </div>
                  )}
                  <Image
                    alt={alt}
                    className="h-auto w-full rounded-lg"
                    height={600}
                    src={imageSrc}
                    style={imageStyle}
                    width={800}
                  />
                  {imageSrc.includes('mgate_use_case.jpg') && (
                    <div className="mt-4 text-center text-xs text-gray-500">
                      <a 
                        href="https://ipc2u.com/news/product-news/mgate-5119-t-iec-61850-gateway-for-power-engineering/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-700 underline"
                      >
                        Source: ipc2u.com
                      </a>
                    </div>
                  )}

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

ImageModal.displayName = 'ImageModal';
export default ImageModal;
