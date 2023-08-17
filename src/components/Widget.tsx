import { Rocket } from "lucide-react";

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>

        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-950">
          <div className="px-8 py-4 flex items-start gap-6 bg-zinc-900">
            <Rocket className="w-6 h-6 mt-3 text-violet-500" />

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-100">
                Você recebeu um convite para fazer parte da empresa NewRocket.
              </p>

              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-4 flex items-start gap-6 bg-zinc-900">
            <Rocket className="w-6 h-6 mt-3 text-violet-500" />

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-100">
                Você recebeu um convite para fazer parte da empresa NewRocket.
              </p>

              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-950">
          <div className="px-8 py-4 flex items-start gap-6 bg-zinc-900">
            <Rocket className="w-6 h-6 mt-3 text-violet-500" />

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-100">
                Você recebeu um convite para fazer parte da empresa NewRocket.
              </p>

              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-4 flex items-start gap-6 bg-zinc-900">
            <Rocket className="w-6 h-6 mt-3 text-violet-500" />

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-100">
                Você recebeu um convite para fazer parte da empresa NewRocket.
              </p>

              <div className="flex items-center gap-1 text-xxs text-zinc-400">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
