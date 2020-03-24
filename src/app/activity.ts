export type ActivityType = "active" | "complete" | "bookmark"
export interface Activity {
  id: number;
  name: string;
  type: ActivityType
}