import { Link } from "react-router-dom";
import { BookOpen, Gamepad2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="text-2xl font-bold text-foreground tracking-tight">
          🎮 StudyQuest
        </span>
        <Link to="/auth">
          <Button variant="outline" className="rounded-full px-6 font-semibold">
            Entrar
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-20 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">
          Aprender é a sua maior aventura
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-lg">
          Uma plataforma gamificada feita para você conquistar conhecimento fase por fase, como em um jogo de verdade.
        </p>
        <Link to="/auth" className="mt-8">
          <Button className="rounded-full px-10 py-6 text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm transition-all duration-300 hover:-translate-y-1">
            Começar 🚀
          </Button>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<BookOpen className="w-8 h-8" />}
          title="Trilha de Estudos"
          description="Avance por fases organizadas com conteúdos do 1º ano do Ensino Médio."
          color="bg-primary/30"
        />
        <FeatureCard
          icon={<Gamepad2 className="w-8 h-8" />}
          title="Jogos Interativos"
          description="Responda questões no formato de quiz e ganhe recompensas a cada acerto."
          color="bg-secondary/30"
        />
        <FeatureCard
          icon={<Star className="w-8 h-8" />}
          title="Sistema de XP"
          description="Ganhe pontos de experiência, suba de nível e desbloqueie conquistas."
          color="bg-accent/30"
        />
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => (
  <div className="rounded-3xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center gap-4">
    <div className={`rounded-full p-4 ${color}`}>{icon}</div>
    <h3 className="text-xl font-bold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default Landing;
