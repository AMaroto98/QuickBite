import { createContext, useState } from "react";
import { ILocationContext } from "../types/context/ILocationContext";
import { IProvider } from "../types/context/IProvider";

export const LocationContext = createContext<ILocationContext>({
  location: "",
  setLocation: () => {},
});

export function LocationProvider({ children }: IProvider) {
  const [location, setLocation] = useState<string>("Landing");

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
