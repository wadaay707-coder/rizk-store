export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-accent mb-4">RIZK STORE</h1>
        <p className="text-xl text-gray-400 mb-8">
          Premium Luxury Smartphone E-Commerce Website
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition">
            <h2 className="text-2xl font-bold text-accent mb-2">Premium Design</h2>
            <p className="text-gray-400">
              Luxury aesthetics with modern glassmorphism
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition">
            <h2 className="text-2xl font-bold text-accent mb-2">Bilingual</h2>
            <p className="text-gray-400">
              Full English & Arabic support with RTL
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition">
            <h2 className="text-2xl font-bold text-accent mb-2">Fast & Smooth</h2>
            <p className="text-gray-400">
              Optimized performance with smooth animations
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
