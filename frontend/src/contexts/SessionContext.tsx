import { createContext } from "react";

interface SessionContextState {
  name: string;
  description: string;
}

export const SessionContext = createContext<SessionContextState>({} as SessionContextState);

export const SessionProvider: React.FC = ({ children }) => {
  return (
    <SessionContext.Provider value={{ name: '', description: '' }}>
      {children}
    </SessionContext.Provider>
  )
}