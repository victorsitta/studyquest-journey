import { useNavigate, Link } from "react-router-dom";
import { Lock, CheckCircle, Play } from "lucide-react";
import { useGame } from "@/contexts/GameContext";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const { user, phases } = useGame();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="sticky top-0 z-10 bg-card/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{user.avatar}</span>
            <div>
              <p className="font-bold text-foreground text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground">Nível {user.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>XP</span>
                <span>{user.xp}/{user.maxXp}</span>
              </div>
              <Progress value={(user.xp / user.maxXp) * 100} className="h-3 rounded-full bg-muted [&>div]:bg-quest-gold [&>div]:rounded-full" />
            </div>
            <Link to="/profile" className="text-2xl hover:scale-110 transition-transform duration-300">
              👤
            </Link>
          </div>
        </div>
      </div>

      {/* Journey Map */}
      <div className="max-w-md mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-foreground text-center mb-10 animate-fade-in">
          🗺️ Mapa da Jornada
        </h2>

        <div className="flex flex-col items-center gap-2">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
              {/* Connector line */}
              {index > 0 && (
                <div className={`w-0.5 h-8 ${phase.unlocked ? "bg-quest-mint" : "bg-muted"} rounded-full`} />
              )}

              {/* Phase node */}
              <button
                onClick={() => phase.unlocked && !phase.completed && navigate("/play", { state: { phaseId: phase.id } })}
                disabled={!phase.unlocked}
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold
                  shadow-sm transition-all duration-300
                  ${phase.completed
                    ? "bg-quest-mint text-foreground hover:-translate-y-1 cursor-pointer"
                    : phase.unlocked
                      ? "bg-quest-blue text-foreground hover:-translate-y-1 hover:shadow-md cursor-pointer"
                      : "bg-quest-locked text-muted-foreground cursor-not-allowed"
                  }
                `}
              >
                {phase.completed ? (
                  <CheckCircle className="w-8 h-8" />
                ) : phase.unlocked ? (
                  <Play className="w-8 h-8" />
                ) : (
                  <Lock className="w-6 h-6" />
                )}
              </button>

              {/* Phase label */}
              <div className="mt-2 text-center">
                <p className={`font-bold text-sm ${phase.unlocked ? "text-foreground" : "text-muted-foreground"}`}>
                  {phase.title}
                </p>
                <p className="text-xs text-muted-foreground">{phase.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
