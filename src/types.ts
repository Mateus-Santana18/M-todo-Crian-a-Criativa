export interface Activity {
  id: string;
  title: string;
  category: string;
  ageGroup: string;
  image: string;
  description: string;
  materials: string[];
  steps: string[];
  benefit: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  likes: string;
  time: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
