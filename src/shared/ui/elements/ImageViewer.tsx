import Image, { type StaticImageData } from 'next/image';
import { type ReactNode } from 'react';

import { DialogTitle } from '@radix-ui/react-dialog';

import { Dialog, DialogContent } from '@/shared/ui';

type ImageViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: StaticImageData;
  alt?: string;
  caption?: string;
  children?: ReactNode;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const {
    open,
    onOpenChange,
    image,
    alt = 'Увеличенное изображение',
    caption = '',
    children,
  } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex-col gap-8" aria-describedby={''} innerStroke>
        <Image className="h-[50vh] w-auto rounded-xl" src={image} alt={alt} />
        {caption && <DialogTitle className="text-center">{caption}</DialogTitle>}
        {children}
      </DialogContent>
    </Dialog>
  );
};
