import React from 'react';
import { Scene } from '../types/film';
import { Camera, MessageSquare, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface SceneDetailProps {
  scene: Scene;
  onPrevScene: () => void;
  onNextScene: () => void;
  hasNextScene: boolean;
  hasPrevScene: boolean;
}

export default function SceneDetail({ 
  scene, 
  onPrevScene, 
  onNextScene, 
  hasNextScene, 
  hasPrevScene 
}: SceneDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button
            onClick={onPrevScene}
            disabled={!hasPrevScene}
            className={`p-2 rounded-full ${
              hasPrevScene 
                ? 'text-gray-600 hover:bg-gray-100' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNextScene}
            disabled={!hasNextScene}
            className={`p-2 rounded-full ${
              hasNextScene 
                ? 'text-gray-600 hover:bg-gray-100' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative h-64 mb-6">
        <img
          src={scene.imageUrl}
          alt={scene.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{scene.name}</h2>
          <p className="text-gray-600 mt-2">{scene.description}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {scene.duration}
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={16} />
            {scene.dialogue.length} lines
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Camera size={20} className="text-indigo-600" />
            Camera Shots
          </h3>
          <div className="space-y-3">
            {scene.shots.map((shot, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-800">{shot.type}</div>
                <div className="text-sm text-gray-600 mt-1">{shot.description}</div>
                <div className="text-sm text-gray-500 mt-1">{shot.duration}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <MessageSquare size={20} className="text-indigo-600" />
            Dialogue
          </h3>
          <div className="space-y-3">
            {scene.dialogue.map((line, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-800">{line.character}</div>
                <div className="text-sm text-gray-600 mt-1">"{line.line}"</div>
                <div className="text-sm text-gray-500 mt-1">{line.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}