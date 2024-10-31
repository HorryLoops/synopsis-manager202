import React, { useState } from 'react';
import { Film } from '../types/film';
import { Save } from 'lucide-react';

interface FilmFormProps {
  onSave: (film: Omit<Film, 'id'>) => void;
  onCancel: () => void;
}

export default function FilmForm({ onSave, onCancel }: FilmFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    year: new Date().getFullYear(),
    synopsis: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, scenes: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Add New Film</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="director" className="block text-sm font-medium text-gray-700">
            Director
          </label>
          <input
            type="text"
            id="director"
            value={formData.director}
            onChange={(e) => setFormData({ ...formData, director: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <input
            type="number"
            id="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="synopsis" className="block text-sm font-medium text-gray-700">
            Synopsis
          </label>
          <textarea
            id="synopsis"
            value={formData.synopsis}
            onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          <Save size={16} />
          Save Film
        </button>
      </div>
    </form>
  );
}