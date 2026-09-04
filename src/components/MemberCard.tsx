import { Link } from 'react-router-dom';
import type { Member } from '@/data/members';

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article
      className="group relative border border-rule transition-all duration-500 hover:border-accent/50 overflow-hidden"
    >
      {/* World visual */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-panel to-ink">

        {/* Member image */}
        <img
          src={member.image}
          alt={member.stageName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

        {/* Member color glow */}
        <div
          className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 35%, ${member.color}, transparent 70%)`,
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(167,123,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,123,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* World name as oversized ghost text */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="display text-2xl md:text-3xl text-muted/15 group-hover:text-accent/25 transition-colors duration-700 text-center leading-tight">
            {member.worldName}
          </span>
        </div>

        {/* Member initial watermark */}
        <span className="absolute bottom-4 right-4 display text-6xl md:text-7xl text-muted/10 group-hover:text-accent/15 transition-colors duration-700">
          {member.stageName.charAt(0)}
        </span>

        {/* Easter egg hint — appears on hover */}
        <div className="absolute bottom-4 left-4 max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-egg">
          <p className="text-[9px] tracking-wide2 text-accent/70 uppercase leading-tight">
            ✦ {member.easterEgg}
          </p>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/20 transition-colors duration-500" />
      </div>

      {/* Info bar */}
      <div className="p-5 md:p-6">
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-[9px] tracking-ultra text-accent">
            {member.role}
          </p>

          <p className="display text-2xl ghost-text">
            {String(member.order).padStart(2, '0')}
          </p>
        </div>

        <h3 className="display text-2xl md:text-3xl text-paper mb-1">
          {member.stageName}
        </h3>

        <p className="text-xs text-muted mb-3">
          {member.birthName}
        </p>

        <p className="text-xs text-muted leading-relaxed mb-4 italic">
          "{member.tagline}"
        </p>

        {/* World elements */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.worldElements.map((el) => (
            <span
              key={el}
              className="text-[10px] border border-rule px-2 py-1 text-muted tracking-wide2"
            >
              {el.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Action link */}
        <Link
          to={`/members/${member.id}`}
          className="group/btn inline-flex items-center gap-3 border border-rule px-4 py-2.5 hover:border-accent transition-all duration-300 w-full"
        >
          <span className="text-[10px] tracking-wide2 font-semibold text-paper group-hover/btn:text-accent transition-colors">
            {member.worldAction}
          </span>

          <span className="flex-1 h-px bg-rule group-hover/btn:bg-accent transition-colors" />

          <span className="text-[10px] tracking-wide2 text-muted group-hover/btn:text-accent transition-colors">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}