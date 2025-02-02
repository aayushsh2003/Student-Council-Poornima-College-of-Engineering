interface ClubMilestone {
  year: number;
  event: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Event {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  images?: string[];
}

interface MembershipFees {
  amount: number;
  period: string;
  includes: string[];
}

interface GalleryItem {
  title: string;
  image: string;
  description: string;
}

interface Resource {
  title: string;
  type: string;
  description: string;
}

interface SocialMedia {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  github?: string;
  linkedin?: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  meetingTime: string;
  socialMedia: SocialMedia;
}

export interface Club {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  history: {
    founded: string;
    milestones: ClubMilestone[];
  };
  team: TeamMember[];
  events: {
    upcoming: Event[];
    past: Event[];
  };
  membership: {
    requirements: string[];
    benefits: string[];
    fees: MembershipFees;
  };
  gallery: GalleryItem[];
  resources: Resource[];
  contact: ContactInfo;
}