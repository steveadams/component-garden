import Eucalyptus from "../components/Eucalyptus";

export default function Index() {
  return (
    <main className="h-full max-h-screen w-screen overflow-hidden bg-green-50 px-16 py-4">
      <Eucalyptus className="pointer-events-none absolute -inset-48 max-h-screen text-green-100 opacity-50" />

      <section
        title="Main content"
        className="relative mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center"
      >
        <svg
          className="absolute -left-24 z-0 text-yellow-100/75"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M48.2,-14.2C56.8,10.8,54.2,41,35.9,55.8C17.6,70.6,-16.4,70,-40.2,53.2C-64,36.4,-77.6,3.4,-69.1,-21.3C-60.7,-46,-30.4,-62.4,-5.3,-60.7C19.8,-59,39.6,-39.1,48.2,-14.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="prose relative z-10">
          <h1 className="z-10 font-serif font-normal text-green-700">
            Component Garden
          </h1>
          <h2 className="font-serif font-extralight italic">
            Robust, reliable, composable:
          </h2>

          <p>
            Headless react components driven by state machines, designed to get
            along and grow together.
          </p>

          <p>Currently sprouting, check back soon!</p>
        </div>
      </section>
    </main>
  );
}
