import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  country?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organization?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
