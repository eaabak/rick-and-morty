import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getCharactersAction } from "./lib/actions";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

interface Props {
  searchParams: Record<string, string | undefined>;
}

export default async function HomePage({ searchParams }: Props) {
  const status = searchParams.status || "";
  const gender = searchParams.gender || "";
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  if (isNaN(page) || page < 1) {
    return notFound();
  }

  const initialData = await getCharactersAction({ status, gender, page });

  if (!initialData || initialData.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <Filters />
        <p className="text-center text-gray-500">Sonuç bulunamadı.</p>
      </div>
    );
  }

  const queryClient = new QueryClient();
  await queryClient.setQueryData(["characters", { status, gender, page }], initialData);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="container mx-auto p-4">
        <div className="sticky top-[72px] z-40 bg-white py-2 mt-4 shadow-sm rounded-lg">
          <Filters />
        </div>
        <CharacterList characters={initialData} />
        <Pagination />
      </div>
    </HydrationBoundary>
  );
}
