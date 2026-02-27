import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function Home() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-cloud-100 to-cloud-200 p-10 shadow-glass">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-ocean-500/15 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-ocean-600/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ocean-500">Move smarter</p>
            <h2 className="font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
              Stay in rhythm with <span className="text-ocean-600">OctoFit</span> Tracker 🎯
            </h2>
            <p className="text-lg text-ink-700">
              A calm, focused space for workouts, teams, and progress. Keep your momentum visible at a
              glance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5"
                to="/activities"
              >
                Get Started
              </Link>
              <Link
                className="rounded-full border border-ocean-600/40 px-6 py-3 text-sm font-semibold text-ocean-600 transition hover:bg-ocean-600/10"
                to="/leaderboard"
              >
                View Leaderboard
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { label: 'Active squads', value: '24', emoji: '🤝' },
              { label: 'Weekly workouts', value: '128', emoji: '🔥' },
              { label: 'Leaderboard jumps', value: '+18%', emoji: '📈' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-[0_18px_30px_rgba(15,17,21,0.1)]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-700">
                  <span>{stat.label}</span>
                  <span>{stat.emoji}</span>
                </div>
                <div className="mt-3 text-3xl font-semibold text-ocean-600">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Users', copy: 'Manage profiles and track progress.', link: '/users', emoji: '🧑‍🤝‍🧑' },
          { title: 'Teams', copy: 'Create squads and push each other forward.', link: '/teams', emoji: '🏆' },
          { title: 'Activities', copy: 'Log workouts and keep a daily rhythm.', link: '/activities', emoji: '🏃‍♀️' },
          { title: 'Workouts', copy: 'Stay on plan with focused sessions.', link: '/workouts', emoji: '💪' },
          { title: 'Leaderboard', copy: 'Climb the ranks and celebrate wins.', link: '/leaderboard', emoji: '🚀' },
        ].map((item) => (
          <Link
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,17,21,0.08)] transition hover:-translate-y-1"
            to={item.link}
            key={item.title}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700">Explore</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-700">{item.copy}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cloud-100 text-ink-900">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link className="text-lg font-semibold text-ink-900" to="/">
              OctoFit Tracker ✨
            </Link>
            <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-ink-700">
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/"
              >
                Home 🏠
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/users"
              >
                Users 👥
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/teams"
              >
                Teams 🏆
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/activities"
              >
                Activities 🏃‍♀️
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/leaderboard"
              >
                Leaderboard 📊
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-ocean-600 text-white' : 'hover:bg-ocean-600/10'
                  }`
                }
                to="/workouts"
              >
                Workouts 💪
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
