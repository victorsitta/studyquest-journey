

## StudyQuest — Frontend Gamificado de Estudos

### Design System
- **Fonte**: Lexend (Google Fonts) — sem serifa, projetada para acessibilidade
- **Paleta Mix Completo**: fundo off-white (#F5F5F0), azul pastel (#B8D8E8), verde menta (#A8E6CF), lilás (#C9B8E8), dourado suave (#D4C8A8)
- **Bordas**: `rounded-full` ou `rounded-3xl` em todos os elementos
- **Sombras**: muito suaves (`shadow-sm`)
- **Animações**: apenas `transition-all duration-300` para fade-in e elevação leve no hover
- **Proibido**: neon, cores vibrantes, preto puro (#000), elementos piscando

### Dados Mockados (localStorage + React state)
- Usuário fake com nome, avatar, nível e XP
- 6 fases no mapa (3 desbloqueadas, 3 bloqueadas)
- 5 questões de múltipla escolha por fase (conteúdo 1º ano EM)
- 6 badges (3 conquistados, 3 bloqueados)
- Login/cadastro mock que salva no state e redireciona ao dashboard

### Páginas

**1. Landing Page (`/`)**
- Navbar com logo "StudyQuest" e botão "Entrar" → `/auth`
- Hero: "Aprender é a sua maior aventura" + botão grande "Começar"
- 3 cards: Trilha de Estudos, Jogos Interativos, Sistema de XP

**2. Autenticação (`/auth`)**
- Abas Login / Cadastro com inputs grandes
- Botão de confirmar redireciona para `/dashboard`

**3. Dashboard / Mapa (`/dashboard`)**
- Topbar fixa: avatar + barra de progresso de XP
- Trilha vertical linear (estilo Duolingo): botões circulares conectados por linha pontilhada
- Fases desbloqueadas (verdes) clicáveis → `/play`; bloqueadas (cinza + cadeado)

**4. Tela de Jogo (`/play`)**
- Interface de foco total, sem navbar
- Card central com questão + 4 alternativas grandes
- Ao responder: modal suave de feedback ("Nível Concluído!" ou "Tente novamente" com dica)
- XP incrementado ao acertar

**5. Perfil (`/profile`)**
- Cabeçalho com avatar, nome e nível
- Grid de badges: ativas (coloridas) e bloqueadas (cinza com cadeado)

