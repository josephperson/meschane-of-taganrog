'use client';

import Image from 'next/image';
import { useState } from 'react';

import { PhotoViewer } from '@/features/photo-viewing';
import { type Photo } from '@/entities/photo';
import {
  Container,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
  SectionHeading,
} from '@/shared/ui';

import meschane1 from '../assets/images/meschane-1.jpg';
import meschane2 from '../assets/images/meschane-2.jpg';
import meschane3 from '../assets/images/meschane-3.jpg';

const MESCHANE_PHOTOS: Photo[] = [
  {
    image: meschane1,
    title: 'Семья мещан города Таганрога',
    years: [1898, 1902],
    author: 'И.К. Майков',
  },
  {
    image: meschane2,
    title: 'Мещане Таганрога',
    years: [1891, 1898],
    author: 'С.С. Исакович',
  },
  {
    image: meschane3,
    title: 'Портрет мещанина',
    years: [1902, 1909],
    author: 'В. Петрыковский',
  },
];

export const PhotoSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [openViewer, setOpenViewer] = useState<boolean>(false);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
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
          {MESCHANE_PHOTOS.map((photo) => {
            const { image } = photo;
            return (
              <div className="basis-1/3" key={image.src}>
                <Image
                  className="aspect-2/3 size-full cursor-pointer rounded-xl object-cover object-bottom transition-transform hover:scale-105"
                  src={image}
                  alt="Фотография мещан"
                  onClick={() => handlePhotoClick(photo)}
                />
              </div>
            );
          })}
        </div>
      </Container>
      {selectedPhoto && (
        <PhotoViewer
          open={openViewer}
          onOpenChange={setOpenViewer}
          photo={selectedPhoto}
          alt="Увеличенная фотография мещан"
        />
      )}
    </Section>
  );
};
