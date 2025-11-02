export interface Image {
  id: string;
  url: string;
  ownerId: string;
  ownerType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  entity: string;       //to represent department / Club / Cell
  // publisher: string;    // Person or org name
  eventTime: string;    // ISO date string
  location: string;
  coverpic?: Image;     // single image
  biopics: Image[];     // multiple images
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  ContributedBy?: string;
}

export interface Location {


  CreatedAt: Date;
  locationId: string;
  name: string;
  description: string;
  locationType: string;
  status: Status;
  avgRating: number;
  reviewCount: number;
  tag: string;
  contact: string;
  time: string;
  coverpic: string;
  biopics: string[];


}
export enum Status {
  "approved",
  "pending",
  "rejected",
  "rejectedByBot",
}
