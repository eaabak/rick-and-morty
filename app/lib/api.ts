const API_URL = "https://rickandmortyapi.com/api/character";

export interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export const fetchCharacters = async ({
  status = "",
  gender = "",
  page = 1,
}: {
  status?: string;
  gender?: string;
  page?: number;
}): Promise<{
  length: number;
  results: Character[];
}> => {
  const res = await fetch(`${API_URL}?status=${status}&gender=${gender}&page=${page}`);

  if (!res.ok) throw new Error("Failed to fetch characters");

  return res.json();
};