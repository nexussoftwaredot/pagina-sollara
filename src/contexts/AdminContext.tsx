
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminContextType, CarouselImage, FormSubmission, FooterContent } from '@/types/admin';
import { defaultCarouselImages, defaultFooterContent, defaultHeroData } from '@/data/defaultData';
import apiService from '@/services/api';
import { useAuth } from './AuthContext';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  // Hero Section State
  const [heroTitle, setHeroTitle] = useState(defaultHeroData.title);
  const [heroSubtitle, setHeroSubtitle] = useState(defaultHeroData.subtitle);
  const [heroDescription, setHeroDescription] = useState(defaultHeroData.description);
  const [heroVideoUrl, setHeroVideoUrl] = useState(defaultHeroData.videoUrl);
  const [heroVideoType, setHeroVideoType] = useState<'file' | 'youtube'>(defaultHeroData.videoType);
  const [heroBackgroundImage, setHeroBackgroundImage] = useState(defaultHeroData.backgroundImage);

  // Footer State
  const [footerContent, setFooterContent] = useState<FooterContent>(defaultFooterContent);

  // Carousel State
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>(defaultCarouselImages);

  // Form Submissions State
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);

  // Load data from API
  useEffect(() => {
    loadDataFromAPI();
  }, [isAuthenticated]);

  // Load form submissions when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadFormSubmissions();
    }
  }, [isAuthenticated]);

  const loadFormSubmissions = async () => {
    try {
      const submissionsData = await apiService.getFormSubmissions();
      if (submissionsData?.submissions) {
        setFormSubmissions(submissionsData.submissions);
        console.log('Form submissions loaded:', submissionsData.submissions);
      }
    } catch (error) {
      console.error('Error loading form submissions:', error);
    }
  };

  const loadDataFromAPI = async () => {
    try {
      // Load hero content
      try {
        const heroData = await apiService.getHeroContent();
        if (heroData) {
          setHeroTitle(heroData.title);
          setHeroSubtitle(heroData.subtitle);
          setHeroDescription(heroData.description);
          setHeroVideoUrl(heroData.video_url);
          setHeroVideoType(heroData.video_type);
          setHeroBackgroundImage(heroData.background_image);
        }
      } catch (error) {
        console.error('Error loading hero content:', error);
      }

      // Load carousel images
      try {
        const carouselData = await apiService.getCarouselImages();
        if (carouselData) {
          setCarouselImages(carouselData);
        }
      } catch (error) {
        console.error('Error loading carousel images:', error);
      }

      // Load footer content
      try {
        const footerData = await apiService.getFooterContent();
        if (footerData) {
          setFooterContent({
            companyName: footerData.company_name,
            tagline: footerData.tagline,
            description: footerData.description,
            creci: footerData.creci,
            cnpj: footerData.cnpj
          });
        }
      } catch (error) {
        console.error('Error loading footer content:', error);
      }

      // Form submissions are loaded separately when authenticated
    } catch (error) {
      console.error('Error loading data from API:', error);
    }
  };

  const addCarouselImage = async (image: CarouselImage) => {
    try {
      await apiService.addCarouselImage(image);
      setCarouselImages(prev => [...prev, image]);
    } catch (error) {
      console.error('Error adding carousel image:', error);
      throw error;
    }
  };

  const removeCarouselImage = async (id: string) => {
    try {
      await apiService.deleteCarouselImage(id);
      setCarouselImages(prev => prev.filter(img => img.id !== id));
    } catch (error) {
      console.error('Error removing carousel image:', error);
      throw error;
    }
  };

  const updateCarouselImage = async (id: string, updates: Partial<CarouselImage>) => {
    try {
      await apiService.updateCarouselImage(id, updates);
      setCarouselImages(prev => prev.map(img => 
        img.id === id ? { ...img, ...updates } : img
      ));
    } catch (error) {
      console.error('Error updating carousel image:', error);
      throw error;
    }
  };

  const addFormSubmission = async (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => {
    try {
      await apiService.submitContactForm(submission);
      // Reload form submissions to get the latest data from the database
      await loadFormSubmissions();
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  };

  const updateHeroContent = async () => {
    try {
      await apiService.updateHeroContent({
        title: heroTitle,
        subtitle: heroSubtitle,
        description: heroDescription,
        video_url: heroVideoUrl,
        video_type: heroVideoType,
        background_image: heroBackgroundImage
      });
    } catch (error) {
      console.error('Error updating hero content:', error);
      throw error;
    }
  };

  const updateFooterContent = async () => {
    try {
      await apiService.updateFooterContent(footerContent);
    } catch (error) {
      console.error('Error updating footer content:', error);
      throw error;
    }
  };

  return (
    <AdminContext.Provider value={{
      heroTitle,
      heroSubtitle,
      heroDescription,
      heroVideoUrl,
      heroVideoType,
      heroBackgroundImage,
      setHeroTitle,
      setHeroSubtitle,
      setHeroDescription,
      setHeroVideoUrl,
      setHeroVideoType,
      setHeroBackgroundImage,
      updateHeroContent,
      carouselImages,
      addCarouselImage,
      removeCarouselImage,
      updateCarouselImage,
      formSubmissions,
      addFormSubmission,
      footerContent,
      setFooterContent,
      updateFooterContent
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
