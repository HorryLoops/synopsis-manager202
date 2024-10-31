import React from 'react';
import { Film } from '../types/film';
import { Film as FilmIcon, Plus } from 'lucide-react';

interface FilmListProps {
  films: Film[];
  onSelectFilm: (film: Film) => void;
  onAddFilm: () => void;
}

export default function FilmList({ films, onSelectFilm, onAddFilm }: FilmListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Films</h2>
        <button
          onClick={onAddFilm}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          Add Film
        </button>
      </div>
      <div className="space-y-4">
        {films.map((film) => (
          <div
            key={film.id}
            onClick={() => onSelectFilm(film)}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-500 cursor-pointer transition-all"
          >
            <FilmIcon className="text-indigo-600" size={24} />
            <div>
              <h3 className="font-semibold text-gray-800">{film.title}</h3>
              <p className="text-sm text-gray-600">
                {film.director} • {film.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}