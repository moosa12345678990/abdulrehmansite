import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/blog-img-wide.jpg';
import marvisto from '@/public/images/marvistofirst.png';
import marvistosec from '@/public/images/marvistosec.png';
import marvistothird from '@/public/images/marvistothird.png';
import dukaan from '@/public/images/dukaan.png';
import to from '@/public/images/to.png';
import door from '@/public/images/door.png';
import arifs from '@/public/images/arifs.png';
import silk from '@/public/images/silk.png';
import idn from  '@/public/images/in.png';
export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "Recent",
    title2Span: "Works",
    description:
      "A curated selection of projects where design, development, and strategy were used to solve real business problems and deliver practical results.",
  },

  projects: [
    {
      title: 'Marvisto',
      slug: 'marvisto',
      description:
        'Marvisto needed a professional digital presence to clearly communicate trust, expertise, and service value to potential clients.',
      services: [
        { name: 'Web Design' },
        { name: 'Web Development' },
        { name: 'Brand Strategy' },
      ],
      client: 'Marvisto',
     projectLink: {
  title: 'Live Preview',
  url: 'https://marvisto.com',
},

      duration: '4 weeks',
      budget: 'Under 1 Lakh',
      content:
        'The challenge was to create a clean and conversion-focused website that builds credibility and guides visitors toward action. The solution involved structured layouts, clear messaging, and performance-focused development.',
      mainImage: marvisto,
      mainImageWide: marvisto,
      images: [
        { image: marvistosec },
        { image: marvistothird },
      ],
      categories: [
        { name: 'Business Website' },
        { name: 'Brand Strategy' },
        { name: 'Web Development' },
      ],
    },

    {
      title: 'Dukaan To Door (Taiba Store)',
      slug: 'dukaantodoor',
      description:
        'Taiba Store required an eCommerce website that presents products clearly while offering a smooth and user-friendly shopping experience.',
      services: [
        { name: 'UI / UX Design' },
        { name: 'Web Development' },
        { name: 'eCommerce Setup' },
      ],
      client: 'Taiba Store',
      projectLink: {
        title: 'Live Preview',
        url: 'http://www.dukantodoor.com/',
      },
      duration: '3 weeks',
      budget: 'Under 50K',
      content:
        'The main problem was organizing products in a simple and elegant way. A clean interface, intuitive navigation, and mobile-first design were implemented to improve usability and customer engagement.',
      mainImage: dukaan,
      mainImageWide: dukaan,
      images: [
        { image: to },
        { image: door },
      ],
      categories: [
        { name: 'eCommerce' },
        { name: 'UI / UX' },
        { name: 'Web Design' },
      ],
    },

    {
      title: 'Arif Silk Industries',
      slug: 'arif-silk-industries',
      description:
        'Arif Silk Industries needed a corporate website that reflects its manufacturing scale, legacy, and long-term vision.',
      services: [
        { name: 'Web Design' },
        { name: 'Web Development' },
        { name: 'Content Structuring' },
      ],
      client: 'Arif Silk Industries',
      projectLink: {
        title: 'Live Preview',
        url: 'https://www.arifsilkindustries.com/',
      },
      duration: '5 weeks',
      budget: 'Under 1 Lakh',
      content:
        'The challenge was to present detailed manufacturing information in a clear and professional format. The solution focused on structured content, corporate visuals, and a refined layout to build trust.',
      mainImage: arifs,
      mainImageWide: arifs,
      images: [
        { image: silk },
       
      ],
      categories: [
        { name: 'Corporate Website' },
        { name: 'Textile Industry' },
        { name: 'Brand Identity' },
      ],
    },

    // {
    //   title: 'RA Textiles',
    //   slug: 'ra-textiles',
    //   description:
    //     'RA Textiles wanted a modern website to showcase fabric quality and brand values without unnecessary complexity.',
    //   services: [
    //     { name: 'Web Design' },
    //     { name: 'Web Development' },
    //   ],
    //   client: 'RA Textiles',
    //   projectLink: {
    //     title: 'Live Preview',
    //     url: '#',
    //   },
    //   duration: '3 weeks',
    //   budget: 'Under 50K',
    //   content:
    //     'The focus was on visual clarity and brand storytelling. A minimal layout and clear presentation were used to help visitors quickly understand the products and quality standards.',
    //   mainImage: PortfolioImg,
    //   mainImageWide: MainImage,
    //   images: [
    //     { image: PortfolioImg },
    //     { image: PortfolioImg },
    //   ],
    //   categories: [
    //     { name: 'Textile Website' },
    //     { name: 'Brand Showcase' },
    //     { name: 'Web Design' },
    //   ],
    // },
  ],
};
