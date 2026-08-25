export default function AnnouncementBar() {
  return (
    <div className="relative z-40 bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-stone-100 text-center py-2.5 px-4">
      <p className="text-xs font-body font-semibold tracking-[2px] uppercase">
        <span className="text-amber-300">🔥 Now Open Till 1 AM</span>
        <span className="mx-3 text-amber-600">·</span>
        Dine-In &amp; Drive-Through Available
        <span className="mx-3 text-amber-600">·</span>
        <a href="tel:+919714707576" className="text-amber-300 hover:text-white transition-colors underline-offset-2 hover:underline">
          Call: 097147 07576
        </a>
      </p>
    </div>
  );
}
