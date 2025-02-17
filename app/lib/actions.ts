"use server";

import { fetchCharacters } from "./api";

export async function getCharactersAction({
  status,
  gender,
  page,
}: {
  status: string;
  gender: string;
  page: number;
}) {
  return await fetchCharacters({ status, gender, page });
}

export async function getEpisodes(page = 1) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
  if (!res.ok) throw new Error("Bölümler yüklenemedi!");
  return res.json();
}
