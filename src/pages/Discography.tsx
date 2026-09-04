import { albums } from '@/data/discography';
import PageHeader from '@/components/PageHeader';
import AlbumCard from '@/components/AlbumCard';

export default function Discography() {
  return (
    <div>
      <PageHeader
        index="THE ARCHIVE"
        title="DISCOGRAPHY"
        subtitle="A structured archive of the BTS discography — from debut single to anthology. Each release is a chapter in the ever-growing universe."
      />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        {/* Filter bar (visual only, placeholder for future filtering) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-rule">
          <span className="text-[10px] tracking-ultra text-muted uppercase mr-4">Filter:</span>
          {['All', 'Single', 'EP', 'Album', 'Anthology'].map((type, i) => (
            <button
              key={type}
              className={`text-xs tracking-wide2 font-semibold border px-4 py-2 transition-colors ${
                i === 0
                  ? 'border-accent text-accent'
                  : 'border-rule text-muted hover:border-accent/50 hover:text-paper'
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>
    </div>
  );
}
