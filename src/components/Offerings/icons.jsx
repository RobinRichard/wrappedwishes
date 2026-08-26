// Small line-art icon set for the "What I make" cards.
// Kept separate from Offerings.jsx so the markup there stays readable.

export const icons = {
  celebration: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 38 L18 14 L34 30 L10 38Z" strokeLinejoin="round" />
      <circle cx="30" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="37" cy="18" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <path d="M13 33l3 3" strokeLinecap="round" />
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="10" y="20" width="28" height="18" rx="2" />
      <path d="M10 26h28" />
      <path d="M24 20v18" />
      <path d="M24 20c-3-6-11-6-11 0 3 0 8 0 11 0z" />
      <path d="M24 20c3-6 11-6 11 0-3 0-8 0-11 0z" />
    </svg>
  ),
  scissors: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="16" cy="14" r="4" />
      <circle cx="16" cy="34" r="4" />
      <path d="M19 17 L38 36" />
      <path d="M19 31 L38 12" />
    </svg>
  ),
  frame: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <rect x="15" y="15" width="18" height="18" rx="1" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="8" y="20" width="32" height="18" rx="2" />
      <path d="M8 27h32" />
      <path d="M24 20v18" />
      <path d="M24 20c-2-8-12-8-12 0z" />
      <path d="M24 20c2-8 12-8 12 0z" />
    </svg>
  ),
};
