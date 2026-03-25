import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useGame();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <span className="text-3xl font-bold text-foreground">🎮 StudyQuest</span>
        </div>

        <div className="rounded-3xl bg-card p-8 shadow-sm">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full rounded-full bg-muted mb-6">
              <TabsTrigger value="login" className="flex-1 rounded-full font-semibold">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="flex-1 rounded-full font-semibold">
                Cadastro
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="font-semibold">E-mail</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-full h-12 text-base px-5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-pass" className="font-semibold">Senha</Label>
                  <Input
                    id="login-pass"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-full h-12 text-base px-5"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full h-12 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300">
                  Entrar
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="reg-name" className="font-semibold">Nome</Label>
                  <Input
                    id="reg-name"
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-full h-12 text-base px-5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email" className="font-semibold">E-mail</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-full h-12 text-base px-5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-pass" className="font-semibold">Senha</Label>
                  <Input
                    id="reg-pass"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-full h-12 text-base px-5"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full h-12 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300">
                  Cadastrar
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
