# TrainerForge

**Launch Your Branded Fitness App in Minutes**

TrainerForge is a white-label personal training platform built for hybrid personal trainers and boutique gyms. It empowers trainers to get up and running in minutes, onboard clients fast, and manage workouts, habits, and communication in one place.

---

## 🎯 MVP Features

- ✅ Trainer onboarding with instant setup
- ✅ Client onboarding with fitness goals
- ✅ GPT-style AI assistant to generate workout plans
- ✅ Basic workout/habit structure (via backend schema)
- 🛠️ Modular design for future add-ons (calendar, referrals, nutrition)

---

## 🛠 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express + Prisma
- **Database**: PostgreSQL (via Supabase or Replit DB)
- **Infra**: Replit-ready scaffold with `.replit`, `replit.nix`
- **Build Tool**: Turbo for monorepo management

---

## 🚀 Getting Started

### 1. Clone this repo or import into Replit

### 2. Add a `.env` file with:
```env
DATABASE_URL=your_postgres_url_here
```

### 3. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

### 4. Start the app:
```bash
npm run dev
```

---

## 💡 Future Roadmap

- 📆 Calendar + scheduling integration
- 🍎 Meal plan and nutrition tracking
- 🧠 GPT-powered plan updates & feedback loop
- 🔄 Client check-ins, habit scoring, and referrals
- 📱 Smartwatch/fitness tracker integration (Phase 2+)

---

## 🙌 Vision

TrainerForge helps personal trainers bridge the in-person and digital coaching experience without sacrificing quality, time, or brand identity.

> Built for trainers who want to coach more — and hustle less.