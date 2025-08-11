'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

import {
  Container,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  ImageViewer,
  Section,
  SectionHeading,
} from '@/shared/ui';

import meschane1 from '../assets/images/meschane-1.jpg';
import meschane2 from '../assets/images/meschane-2.jpg';
import meschane3 from '../assets/images/meschane-3.jpg';

const MESCHANE_IMAGES = [meschane1, meschane2, meschane3];

export const PhotoSection = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>('');
  const [openViewer, setOpenViewer] = useState<boolean>(false);

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
    setOpenViewer(true);
  };

  return (
    <Section className="flex bg-background-secondary" id="photo-section">
      <Container className="flex gap-16 py-16">
        <SectionHeading>
          <HeadingSubtitle withDash>Фото на память</HeadingSubtitle>
          <HeadingTitle>
            Мещане <br />
            <HeadingHighlight>
              <span className="whitespace-nowrap">г. Таганрога</span>
            </HeadingHighlight>
          </HeadingTitle>
        </SectionHeading>
        <div className="flex gap-8">
          {MESCHANE_IMAGES.map((image) => (
            <div className="basis-1/3" key={image.src}>
              <Image
                className="aspect-2/3 size-full cursor-pointer rounded-xl object-cover transition-transform hover:scale-105"
                src={image}
                alt="Фотография мещан"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </Container>
      <ImageViewer
        open={openViewer}
        onOpenChange={setOpenViewer}
        image={selectedImage}
        alt="Увеличенная фотография мещан"
      />
    </Section>
  );
};
