import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './store/AppContext'
import Layout from './components/Layout'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { CoursesPage, CourseDetailPage } from './pages/CoursesPage'
import FlashcardsPage from './pages/FlashcardsPage'
import LearnPage from './pages/LearnPage'
import CodeLabPage from './pages/CodeLabPage'
import SessionPage from './pages/SessionPage'
import NotesPage from './pages/NotesPage'
import CalendarPage from './pages/CalendarPage'
import ProgressPage from './pages/ProgressPage'
import SettingsPage from './pages/SettingsPage'

function Routed() {
  const { profile } = useApp()

  if (!profile) {
    return (
      <Routes>
        <Route path="*" element={<Onboarding />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/codelab" element={<CodeLabPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/session/:kind" element={<SessionPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routed />
      </HashRouter>
    </AppProvider>
  )
}
