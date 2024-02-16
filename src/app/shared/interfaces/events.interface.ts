export interface Events {
  _id: string;
  title: string;
  date: Date[];
  description: string;
  location: string;
  category: string;
  from: string;
  to: string;
  image: string;
  allowJoin: boolean;
  hasTime: boolean;
  joinedUsers: string[];
}
