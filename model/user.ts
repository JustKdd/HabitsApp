export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  age?: number;
  gender?: "male" | "female" | "non-binary" | "other";
  messagePreference: "positive" | "medium" | "harsh";
}
