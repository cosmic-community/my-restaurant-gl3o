export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    display_order?: number;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: MenuCategory;
    dietary_info?: string[];
    featured_item?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    location_name?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    reservation_url?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    map_coordinates?: string;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number;
    review_text?: string;
    review_date?: string;
    location?: Location;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}