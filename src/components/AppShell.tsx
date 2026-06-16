"use client";

type Props = {
  children: React.ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div className="ritual-app relative min-h-screen text-ritual-text">
      <div className="ritual-app__bg pointer-events-none fixed inset-0" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--a pointer-events-none fixed" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--b pointer-events-none fixed" aria-hidden />
      <div className="ritual-app__orb ritual-app__orb--c pointer-events-none fixed" aria-hidden />
      <div
        className="ritual-app__sparkles pointer-events-none fixed inset-0"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
