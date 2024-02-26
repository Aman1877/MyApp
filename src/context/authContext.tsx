import {
  SetStateAction,
  Dispatch,
  createContext,
  useState,
  ReactNode,
} from "react";

export type User = {
  userName: string;
  email: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}
const defaultState = {
  user: {
    userName: "",
    email: "",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(defaultState);

type userProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: userProviderProps) {
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
