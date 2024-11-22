import ServicoCard from "@/components/ServicoCard"; // Importando o componente ServicoCard

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <ServicoCard /> {/* Usando o componente ServicoCard */}
      </div>
    </main>
  );
}
