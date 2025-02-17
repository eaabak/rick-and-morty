"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../lib/api";

export const useCharacters = ({ status, gender, page }: { status: string; gender: string; page: number }) => {
  return useQuery({
    queryKey: ["characters", status, gender, page],
    queryFn: () => fetchCharacters({ status, gender, page }),
  });
};
