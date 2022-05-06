import Eucalyptus from "../components/Eucalyptus";
import Sage from "../components/Sage";

export default function Index() {
  return (
    <main className="h-full max-h-screen w-screen overflow-hidden bg-gradient-to-tl from-green-100 to-green-50 px-16 py-4">
      <Eucalyptus className="pointer-events-none absolute inset-0 max-h-screen text-slate-400/5" />

      <section
        title="Main content"
        className="relative mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center sm:max-w-lg"
      >
        <div className="prose relative z-10">
          <h1 className="relative -left-12 z-0 flex items-center gap-x-2 font-serif text-3xl font-normal text-green-700 sm:-left-24 sm:gap-x-4 sm:text-4xl">
            <svg
              className="absolute z-0 -translate-x-24 text-rose-200/50 sm:-translate-x-48"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M48.2,-14.2C56.8,10.8,54.2,41,35.9,55.8C17.6,70.6,-16.4,70,-40.2,53.2C-64,36.4,-77.6,3.4,-69.1,-21.3C-60.7,-46,-30.4,-62.4,-5.3,-60.7C19.8,-59,39.6,-39.1,48.2,-14.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <Sage className="z-10 w-20 flex-shrink-0 text-purple-700" />
            <span className="z-10">Component Garden</span>
          </h1>

          <span className="prose relative z-20">
            <h2 className="font-serif font-extralight italic">
              Robust, reliable, composable:
            </h2>
            <p>
              Headless react components driven by state machines, designed to
              get along and grow together.
            </p>
            <p>
              <strong>Progress:</strong> <abbr title="Sprouting">🌱</abbr>
            </p>
          </span>
        </div>
      </section>
    </main>
  );
}
