import { Link } from "react-router";

const Error = () => {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50/50 px-4 sm:px-8">
      {/* Blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />

      {/* Two-column on md+, stacked on mobile */}
      <div className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Left — illustration */}
        <div className="flex flex-col items-center">
          {/* Book spines */}
          <div className="flex items-end justify-center gap-2">
            <div className="flex h-20 w-6 flex-col rounded-t-lg bg-linear-to-b from-emerald-400 to-emerald-600 shadow-md">
              <div className="mx-auto mt-2 h-0.5 w-3 rounded-full bg-white/50" />
              <div className="mx-auto mt-1 h-0.5 w-3 rounded-full bg-white/30" />
            </div>
            <div className="flex h-28 w-8 flex-col rounded-t-lg bg-linear-to-b from-slate-700 to-slate-900 shadow-lg">
              <div className="mx-auto mt-2 h-0.5 w-4 rounded-full bg-white/20" />
              <div className="mx-auto mt-1 h-0.5 w-4 rounded-full bg-white/10" />
            </div>
            <div className="flex h-16 w-6 flex-col rounded-t-lg bg-linear-to-b from-orange-400 to-orange-600 shadow-md">
              <div className="mx-auto mt-2 h-0.5 w-3 rounded-full bg-white/50" />
            </div>
            <div className="flex h-24 w-5 flex-col rounded-t-lg bg-linear-to-b from-cyan-400 to-cyan-600 shadow-md">
              <div className="mx-auto mt-2 h-0.5 w-2.5 rounded-full bg-white/40" />
              <div className="mx-auto mt-1 h-0.5 w-2.5 rounded-full bg-white/25" />
            </div>
            <div className="flex h-14 w-6 flex-col rounded-t-lg bg-linear-to-b from-violet-400 to-violet-600 shadow-md">
              <div className="mx-auto mt-2 h-0.5 w-3 rounded-full bg-white/40" />
            </div>
            <div className="flex h-18 w-5 flex-col rounded-t-lg bg-linear-to-b from-slate-300 to-slate-400 shadow">
              <div className="mx-auto mt-2 h-0.5 w-2.5 rounded-full bg-white/60" />
            </div>
          </div>
          {/* Shelf */}
          <div className="h-3 w-64 rounded-sm bg-linear-to-r from-amber-900 via-amber-700 to-amber-900 shadow-lg" />
          {/* Shadow under shelf */}
          <div className="h-1.5 w-56 rounded-full bg-amber-900/20 blur-sm" />

          {/* 404 below shelf */}
          <div className="relative mt-6 select-none">
            <span className="block text-8xl font-black leading-none tracking-tighter text-slate-100 sm:text-9xl">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-black leading-none tracking-tighter sm:text-9xl">
              <span className="text-slate-800">4</span>
              <span className="text-emerald-500">0</span>
              <span className="text-slate-800">4</span>
            </span>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Page Not Found
          </span>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Oops!&nbsp;
            <span className="text-emerald-500">Wrong shelf.</span>
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to something good.
          </p>

          <div className="my-6 h-px w-full max-w-xs bg-slate-100 md:max-w-none" />

          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <Link
              to="/"
              className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700"
            >
              ← Back to Home
            </Link>
            <Link
              to="/listedBooks"
              className="rounded-full border border-emerald-300 bg-emerald-50 px-7 py-3 text-sm font-semibold text-emerald-700 transition duration-200 hover:bg-emerald-100"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
