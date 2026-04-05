

export default function About() {
  return (
    <section id="about" className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

      {/* IMAGE */}
      <img
        src={"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg"}
        className="rounded-2xl shadow-xl"
      />

      {/* TEXT */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>

        <p className="text-gray-400">
          Saya adalah fullstack developer yang fokus pada teknologi modern seperti React, Express, dan Supabase.
        </p>
      </div>

    </section>
  );
}