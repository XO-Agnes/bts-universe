import { useState } from 'react';
import type { Album } from '@/data/discography';

export default function AlbumCard({ album }: { album: Album }) {
  const [showTracks, setShowTracks] = useState(false);

  return (
    <article className="group border border-rule p-5 md:p-6 transition-all duration-500 hover:border-accent/60 hover:bg-panel">
      {/* Album Artwork */}
      <div className="relative aspect-square mb-5 border border-rule bg-gradient-to-br from-panel to-ink overflow-hidden">
        <img
          src={album.artwork}
          alt={`${album.title} album artwork`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

        {/* Type badge */}
        <span className="absolute top-3 left-3 text-[9px] tracking-ultra text-accent border border-accent/40 px-2 py-1 bg-ink/70 backdrop-blur-sm">
          {album.type}
        </span>
      </div>

      {/* Info */}
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-xs tracking-wide2 text-accent">{album.year}</p>
        <p className="text-[10px] tracking-wide2 text-muted">
          {album.trackCount} TRACKS
        </p>
      </div>

      <h3 className="display text-lg md:text-xl text-paper leading-tight mb-3 line-clamp-2">
        {album.title}
      </h3>

      <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
        {album.description}
      </p>

      {/* Lead Track */}
      <div className="flex items-center gap-2 pt-3 border-t border-rule">
        <span className="text-[10px] tracking-ultra text-muted uppercase">
          Lead
        </span>
        <span className="text-xs text-paper truncate">
          {album.leadTrack}
        </span>
      </div>

      {/* Tracklist Button */}
      <button
        type="button"
        onClick={() => setShowTracks(!showTracks)}
        className="w-full mt-4 pt-3 border-t border-rule text-[10px] tracking-ultra text-accent uppercase text-left hover:text-paper transition-colors duration-300 flex items-center justify-between"
      >
        <span>{showTracks ? 'Hide Tracklist' : 'View Tracklist'}</span>

        <span className="text-sm">
          {showTracks ? '−' : '+'}
        </span>
      </button>

      {/* Tracklist */}
      {showTracks && (
        <div className="mt-4 border-t border-rule pt-4">
          <ol className="space-y-2">
            {album.tracks.map((track, index) => (
              <li
                key={`${album.id}-${index}`}
                className="flex items-start gap-3 text-xs text-muted"
              >
                <span className="text-accent text-[10px] min-w-[20px]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-paper/80 leading-relaxed">
                  {track}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}