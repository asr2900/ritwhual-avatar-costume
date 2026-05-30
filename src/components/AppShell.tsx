"use client";

type Props = {
  children: React.ReactNode;
};

/** Latar magic · cute · absurd · green — dipakai di semua layar */
export function AppShell({ children }: Props) {
  return (
    <div className="ritual-app relative min-h-screen overflow-hidden text-ritual-text">
      <div className="ritual-app__bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--a" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--b" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--c" aria-hidden />
      <div className="ritual-app__sparkles pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
