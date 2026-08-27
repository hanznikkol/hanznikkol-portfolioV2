import BentoGrid from "@/components/cards/BentoGrid";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-base px-4 py-8 md:px-8 lg:px-12">
      <BentoGrid />
      <FloatingChat/>
    </main>
  );
}
