import React, { useState } from 'react';
import { Film } from './types/film';
import FilmList from './components/FilmList';
import SceneDetail from './components/SceneDetail';
import FilmForm from './components/FilmForm';
import filmsData from './data/films.json';
import { Clapperboard } from 'lucide-react';

function App() {
  const [films, setFilms] = useState<Film[]>(filmsData.films);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);

  const handleAddFilm = (film: Omit<Film, 'id'>) => {
    const newFilm: Film = {
      ...film,
      id: `${film.title.toLowerCase().replace(/\s+/g, '-')}-${film.year}`,
    };
    setFilms([...films, newFilm]);
    setShowForm(false);
  };

  const handlePrevScene = () => {
    if (selectedSceneIndex > 0) {
      setSelectedSceneIndex(selectedSceneIndex - 1);
    }
  };

  const handleNextScene = () => {
    if (selectedFilm && selectedSceneIndex < selectedFilm.scenes.length - 1) {
      setSelectedSceneIndex(selectedSceneIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Clapperboard className="text-indigo-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Film Synopsis Manager</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            {!showForm ? (
              <FilmList
                films={films}
                onSelectFilm={(film) => {
                  setSelectedFilm(film);
                  setSelectedSceneIndex(0);
                }}
                onAddFilm={() => setShowForm(true)}
              />
            ) : (
              <FilmForm
                onSave={handleAddFilm}
                onCancel={() => setShowForm(false)}
              />
            )}
          </div>

          <div className="lg:col-span-2">
            {selectedFilm && selectedFilm.scenes.length > 0 && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedFilm.title}</h2>
                  <p className="text-gray-600">{selectedFilm.synopsis}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    Scene {selectedSceneIndex + 1} of {selectedFilm.scenes.length}
                  </div>
                </div>
                
                <SceneDetail 
                  scene={selectedFilm.scenes[selectedSceneIndex]}
                  onPrevScene={handlePrevScene}
                  onNextScene={handleNextScene}
                  hasPrevScene={selectedSceneIndex > 0}
                  hasNextScene={selectedSceneIndex < selectedFilm.scenes.length - 1}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;