import {Dialog, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import {FC, Fragment, memo} from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

const ImageModal: FC<ImageModalProps> = memo(({isOpen, onClose, imageSrc, alt}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={onClose}
                    className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-4">
                  <Image
                    src={imageSrc}
                    alt={alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{objectFit: 'contain'}}
                  />
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