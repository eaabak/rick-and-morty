import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Character } from '../lib/api';

interface Props {
  characters: {
    results: Character[];
  };
}

export default function CharacterList({ characters }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8 container">
      {characters?.results?.map((character: Character) => {
        const firstEpisode =
          character.episode.length > 0 ? character.episode[0].split('/').pop() : null;

        return (
          <Card
            key={character.id}
            className="overflow-hidden shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative w-full h-64">
              <Image
                src={character.image}
                alt={character.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">{character.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className={`text-xs px-2 py-1 rounded-full ${
                    character.status === 'Alive'
                      ? 'bg-green-200 text-green-800 border-green-400'
                      : character.status === 'Dead'
                      ? 'bg-red-200 text-red-800 border-red-400'
                      : 'bg-gray-300 text-gray-800 border-gray-400'
                  }`}
                >
                  {character.status}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs px-2 py-1 bg-blue-200 text-blue-800 border-blue-400 rounded-full"
                >
                  {character.gender}
                </Badge>
              </div>

              {firstEpisode && (
                <div className="flex items-center gap-2 text-sm text-gray-600 ">
                  İlk Görünüm:
                  <p className='font-medium'>Bölüm {firstEpisode}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
