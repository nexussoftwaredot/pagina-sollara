
export interface CarouselImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
  file?: File;
}

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

export interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  creci: string;
  cnpj: string;
}

export interface AdminContextType {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroVideoUrl: string;
  heroVideoType: 'file' | 'youtube';
  heroBackgroundImage: string;
  setHeroTitle: (title: string) => void;
  setHeroSubtitle: (subtitle: string) => void;
  setHeroDescription: (description: string) => void;
  setHeroVideoUrl: (url: string) => void;
  setHeroVideoType: (type: 'file' | 'youtube') => void;
  setHeroBackgroundImage: (url: string) => void;
  updateHeroContent: () => Promise<void>;

  // Carousel
  carouselImages: CarouselImage[];
  addCarouselImage: (image: CarouselImage) => Promise<void>;
  removeCarouselImage: (id: string) => Promise<void>;
  updateCarouselImage: (id: string, image: Partial<CarouselImage>) => Promise<void>;

  // Form Submissions
  formSubmissions: FormSubmission[];
  addFormSubmission: (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => Promise<void>;

  // Footer
  footerContent: FooterContent;
  setFooterContent: (content: FooterContent) => void;
  updateFooterContent: () => Promise<void>;
}
