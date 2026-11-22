export interface MaternityAlbum {
  id: string;
  title: string;
  type: "maternity" | "birthday";
  category: string;
  src: string;
  coverSrc: string;
  count: string;
  photos: string[];
}

export const maternityAlbums: MaternityAlbum[] = [
  {
    id: "1",
    title: "Zaynab's Turns into Two",
    type: "birthday",
    category: "Indoor Birthday Celebration",
    src: "/images/birthday/album1/P3.jpg",
    coverSrc: "/images/birthday/album1/P22.jpg",
    count: "30 Photos",
    photos: [
        "/images/birthday/album1/P1.jpg",
        "/images/birthday/album1/P2.jpg",
        "/images/birthday/album1/P3.jpg",
        "/images/birthday/album1/P4.jpg",
        "/images/birthday/album1/P5.jpg",
        "/images/birthday/album1/P6.jpg",
        "/images/birthday/album1/P7.jpg",
        "/images/birthday/album1/P8.jpg",
        "/images/birthday/album1/P9.jpg",
        "/images/birthday/album1/P10.jpg",
        "/images/birthday/album1/P11.jpg",
        "/images/birthday/album1/P12.jpg",
        "/images/birthday/album1/P13.jpg",
        "/images/birthday/album1/P14.jpg",
        "/images/birthday/album1/P15.jpg",
        "/images/birthday/album1/P16.jpg",
        "/images/birthday/album1/P17.jpg",
        "/images/birthday/album1/P18.jpg",
        "/images/birthday/album1/P19.jpg",
        "/images/birthday/album1/P20.jpg",
        "/images/birthday/album1/P21.jpg",
        "/images/birthday/album1/P22.jpg",
        "/images/birthday/album1/P23.jpg",
        "/images/birthday/album1/P24.jpg",
        "/images/birthday/album1/P25.jpg",
        "/images/birthday/album1/P26.jpg",
        "/images/birthday/album1/P27.jpg",
        "/images/birthday/album1/P28.jpg",
        "/images/birthday/album1/P29.jpg",
        "/images/birthday/album1/P30.jpg",
    ],
  },
];