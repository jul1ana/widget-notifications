"use client";

import { Rocket, X, Check, Luggage, Heart, Users } from "lucide-react";
import { Notification } from "./Notification";

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="py-4 px-6 flex items-center justify-between bg-zinc-200 dark:bg-zinc-800">
        <span className="font-bold">Notificações</span>

        <button className="font-bold text-xs text-emerald-500 hover:text-emerald-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="px-5 py-2 text-sm bg-zinc-300 text-zinc-500 font-medium dark:bg-zinc-950 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Um novo conteúdo do Desenvolvedor Alask foi publicado no FeeDev! Vem dar uma olhada!" />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Luggage} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa NewRocket." />
            <Notification.Actions>
              <Notification.Action onClick={() => {}} icon={X} />
              <Notification.Action
                onClick={() => {}}
                icon={Check}
                className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div className="px-5 py-2 text-sm bg-zinc-300 text-zinc-500 font-medium dark:bg-zinc-950 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Heart} />
            <Notification.Content text="Juliana Silva e mais 3 pessoas gostaram do seu post no FeeDev." />
            <Notification.Actions>
              <Notification.Action onClick={() => {}} icon={X} />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Users} />
            <Notification.Content text="Você foi mencionado no tópico de Desenvolvimento em TypeScript para voluntários" />
            <Notification.Actions>
              <Notification.Action
                onClick={() => {}}
                icon={Check}
                className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  );
}
