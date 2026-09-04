import { eras } from '@/data/eras';
import PageHeader from '@/components/PageHeader';
import EraCard from '@/components/EraCard';

export default function Eras() {
  return (
    <div>
      <PageHeader
        index="CHRONOLOGY"
        title="ERAS"
        subtitle="A chronological journey through the universe. Each era is a chapter — a shift in sound, story, and meaning that built upon the last. Enter any era to travel through its world."
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="relative">
          <div className="space-y-24 md:space-y-32">
            {eras.map((era, i) => (
              <div key={era.id} className="relative">
                <EraCard era={era} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
