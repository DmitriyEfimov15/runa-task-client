import { useUserStore } from "../store/user";
import { setUserSelector } from "../store/selectors";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/authApi";
import { IGetProfileResponse } from "../types";
import { useEffect } from "react";

export const useGetProfile = () => {
  const setUser = useUserStore(setUserSelector);

  const query = useQuery<IGetProfileResponse, Error>({
    queryKey: ["profile"],
    queryFn: getProfile,
    retry: false,
    enabled: false
  });

  useEffect(() => {
    if (query.data?.user) {
      setUser(query.data.user);
    } else if (query.isError) {
      setUser(null);
    }
  }, [query.data, query.isError, setUser]);

  return query;
};
