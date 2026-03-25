import { Link } from "react-router-dom";
import { useGame } from "@/contexts/GameContext";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Lock } from "lucide-react";

const Profile = () => {
  const { user, badges } = useGame();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-lg mx-auto px-6 pt-6">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6">
          <ArrowLeft className="w-5 h-5" /> Voltar
        </Link>
      </div>

      <div className="max-w-lg mx-auto px-6 animate-fade-in">
        {/* Profile Card */}
        <div className="rounded-3xl bg-card p-8 shadow-sm text-center mb-8">
          <div className="text-6xl mb-4">{user.avatar}</div>
          <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
          <p className="text-muted-foreground font-semibold mt-1">Nível {user.level}</p>
          <div className="mt-4 max-w-xs mx-auto">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>XP</span>
              <span>{user.xp}/{user.maxXp}</span>
            </div>
            <Progress value={(user.xp / user.maxXp) * 100} className="h-3 rounded-full bg-muted [&>div]:bg-quest-gold [&>div]:rounded-full" />
          </div>
        </div>

        {/* Badges */}
        <h2 className="text-xl font-bold text-foreground mb-4">🏆 Minhas Conquistas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-10">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-3xl p-6 text-center shadow-sm transition-all duration-300 ${
                badge.unlocked
                  ? "bg-card hover:-translate-y-1 hover:shadow-md"
                  : "bg-muted/50 opacity-60"
              }`}
            >
              <div className="text-4xl mb-2">
                {badge.unlocked ? badge.icon : <Lock className="w-8 h-8 mx-auto text-muted-foreground" />}
              </div>
              <p className={`font-bold text-sm ${badge.unlocked ? "text-foreground" : "text-muted-foreground"}`}>
                {badge.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
