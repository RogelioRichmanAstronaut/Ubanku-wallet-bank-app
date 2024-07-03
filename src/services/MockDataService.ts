export type User = {
  phoneNumber: string;
  name: string;
  email: string;
  dream: string;
  university: string;
  referralCode: string | null;
  pin: string;
  trustDevice: boolean;
};

const users: User[] = [];

export const registerUser = (user: User) => {
  users.push(user);
};

export const findUserByPhoneNumber = (phoneNumber: string) => {
  return users.find(user => user.phoneNumber === phoneNumber);
};

export const updateUser = (phoneNumber: string, updatedUser: Partial<User>) => {
  const user = users.find(user => user.phoneNumber === phoneNumber);
  if (user) {
    Object.assign(user, updatedUser);
  }
};
