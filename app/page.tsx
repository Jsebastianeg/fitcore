export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black tracking-tight mb-4">
          FIT<span className="text-orange-500">CORE</span>
        </h1>
        <p className="text-gray-400 text-xl">Tu entrenamiento. Tu progreso. Tu app.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-orange-500 text-3xl mb-3">💪</div>
          <h2 className="text-xl font-bold mb-2">Workouts</h2>
          <p className="text-gray-400 text-sm">Crea y sigue tus rutinas personalizadas</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-orange-500 text-3xl mb-3">📈</div>
          <h2 className="text-xl font-bold mb-2">Progreso</h2>
          <p className="text-gray-400 text-sm">Visualiza tu evolución semana a semana</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-orange-500 text-3xl mb-3">🔥</div>
          <h2 className="text-xl font-bold mb-2">Streaks</h2>
          <p className="text-gray-400 text-sm">Mantén tu racha de entrenamiento activa</p>
        </div>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all">
        Empezar ahora
      </button>

    </main>
  );
}