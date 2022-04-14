export type User = {
  login: string;
  password: string;
  ordersListId: string;
  refreshToken: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  avatar?: string;
  email?: string;
};