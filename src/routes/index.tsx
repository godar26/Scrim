import { createFileRoute } from "@tanstack/react-router";
import { Handbook } from "@/components/codex/handbook";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Handbook />;
}
