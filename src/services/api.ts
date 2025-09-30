const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://sollara-garden-07.onrender.com/api';

class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    if (this.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(username: string, password: string) {
    const response = await this.request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    
    this.token = response.token;
    localStorage.setItem('authToken', response.token);
    return response;
  }

  async verifyToken() {
    return this.request<{ valid: boolean; user: any }>('/auth/verify');
  }

  logout() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  // Hero methods
  async getHeroContent() {
    return this.request<any>('/hero');
  }

  async updateHeroContent(data: any) {
    return this.request<any>('/hero', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Carousel methods
  async getCarouselImages() {
    return this.request<any[]>('/carousel');
  }

  async addCarouselImage(data: { url: string; alt: string; title?: string; description?: string }) {
    return this.request<any>('/carousel', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCarouselImage(id: string, data: any) {
    return this.request<any>(`/carousel/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCarouselImage(id: string) {
    return this.request<any>(`/carousel/${id}`, {
      method: 'DELETE',
    });
  }

  // Footer methods
  async getFooterContent() {
    return this.request<any>('/footer');
  }

  async updateFooterContent(data: any) {
    return this.request<any>('/footer', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Form methods
  async submitContactForm(data: { name: string; email: string; phone: string; message?: string }) {
    return this.request<any>('/forms/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getFormSubmissions(page = 1, limit = 10) {
    return this.request<{ submissions: any[]; pagination: any }>(`/forms/submissions?page=${page}&limit=${limit}`);
  }

  async deleteFormSubmission(id: string) {
    return this.request<any>(`/forms/submissions/${id}`, {
      method: 'DELETE',
    });
  }

  // Upload methods
  async uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${this.baseURL}/upload/image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async uploadImages(files: File[]) {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    const response = await fetch(`${this.baseURL}/upload/images`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async deleteImage(filename: string) {
    return this.request<any>(`/upload/image/${filename}`, {
      method: 'DELETE',
    });
  }

  async getUploadedFiles() {
    return this.request<{ files: any[] }>('/upload/files');
  }

  // Health check
  async healthCheck() {
    return this.request<{ status: string; message: string; timestamp: string }>('/health');
  }
}

export const apiService = new ApiService();
export default apiService;