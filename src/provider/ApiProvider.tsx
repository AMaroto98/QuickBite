import { createContext, useEffect, useState } from "react";
import { IApiContext } from "../types/context/IApiContext";
import { IFood } from "../types/IFood";
import { IProvider } from "../types/context/IProvider";
import { getFood } from "../services/http/api";

export const ApiContext = createContext<IApiContext>({
  apiData: [],
});

export function ApiProvider({ children }: IProvider) {
  const [apiData, setApiData] = useState<IFood[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getFood();
      setApiData(newData);
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        apiData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
