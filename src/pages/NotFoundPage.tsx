import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center bg-slate-950 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <div className="grid gap-10 text-center">
            <span className="mx-auto inline-flex h-28 w-28 items-center justify-center rounded-full bg-indigo-500/10 text-4xl font-black text-indigo-300 ring-1 ring-indigo-400/20">
              404
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-300">
                Page not found
              </p>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Oops! We can’t find that page.
              </h1>
              <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                The page you are looking for may have been moved, renamed, or is temporarily unavailable.
                Please use the button below to return home or contact support if you need help.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Go back home
              </Link>
              <a href="#" className="text-sm font-semibold text-slate-200 transition hover:text-white">
                Contact support <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
