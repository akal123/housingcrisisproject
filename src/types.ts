export interface HousingListing {
  id: string;
  title: string;
  address: string;
  neighborhood: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  availableDate: string;
  commuteTimeMap: { [key: string]: number }; // Work location -> commute in minutes
  imageUrl: string;
  subsidyAccepted: boolean;
  transitAccess: 'Excellent'| 'Good' | 'Moderate';
  description: string;
}

export interface AssistanceProgram {
  id: string;
  name: string;
  provider: string;
  type: 'Rent' | 'Downpayment' | 'Utility' | 'Transit';
  eligibilityDescription: string;
  maxBenefit: string;
  applyUrl: string;
}

export interface TimelineEvent {
  time: string;
  activity: string;
  activityEs: string;
  impact: string;
  impactEs: string;
  iconName: string;
}

export interface Partner {
  name: string;
  role: string;
  roleEs: string;
  logoColorClass: string;
  description: string;
  descriptionEs: string;
}

export interface RoadmapStep {
  period: string;
  periodEs: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  milestones: string[];
  milestonesEs: string[];
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}
