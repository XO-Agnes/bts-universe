import { members } from '@/data/members';
import PageHeader from '@/components/PageHeader';
import MemberCard from '@/components/MemberCard';

export default function Members() {
  return (
    <div>
      <PageHeader
        index="SEVEN WORLDS"
        title="MEMBERS"
        subtitle="Seven distinct voices, seven interconnected worlds. Each member carries their own light, their own story — together they form a single universe. Step into each world to discover what makes it unique."
      />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Hint strip */}
        <div className="mt-16 text-center">
          <p className="text-[10px] tracking-ultra text-muted uppercase">
            ✦ Each world holds a hidden easter egg — hover to discover
          </p>
        </div>
      </section>
    </div>
  );
}
