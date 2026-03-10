import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { 
  Dumbbell, 
  Menu, 
  X, 
  PlayCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import { useAppContext } from '@/src/context/AppContext';
import { cn } from '@/src/lib/utils';

const COURSE_MODULES = [
  {
    id: 'basics',
    title: 'Basics',
    lessons: [
      { id: 'b1', title: 'Stance & Guard', duration: '5:20' },
      { id: 'b2', title: 'Footwork Fundamentals', duration: '8:45' },
      { id: 'b3', title: 'The Jab', duration: '6:15' },
      { id: 'b4', title: 'The Cross', duration: '7:30' },
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Techniques',
    lessons: [
      { id: 'a1', title: 'Head Movement', duration: '10:12' },
      { id: 'a2', title: 'Counter Punching', duration: '12:05' },
      { id: 'a3', title: 'Creating Angles', duration: '9:40' },
    ]
  },
  {
    id: 'elbows',
    title: 'Elbows',
    lessons: [
      { id: 'e1', title: 'Horizontal Elbow', duration: '4:50' },
      { id: 'e2', title: 'Upward Elbow', duration: '5:15' },
    ]
  },
  {
    id: 'knees',
    title: 'Knees',
    lessons: [
      { id: 'k1', title: 'Straight Knee', duration: '6:20' },
      { id: 'k2', title: 'Spear Knee', duration: '5:45' },
    ]
  },
  {
    id: 'combos',
    title: 'Combinations',
    lessons: [
      { id: 'c1', title: 'Dutch Kickboxing Combos', duration: '15:30' },
      { id: 'c2', title: 'Muay Thai Clinch Combos', duration: '18:20' },
    ]
  }
];

export default function DashboardPage() {
  const { logout, hasPurchased } = useAppContext();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    basics: true
  });
  const [currentLesson, setCurrentLesson] = useState(COURSE_MODULES[0].lessons[0]);

  // Redirect if not purchased (in a real app, this would be handled by a protected route wrapper)
  React.useEffect(() => {
    if (!hasPurchased) {
      navigate('/purchase');
    }
  }, [hasPurchased, navigate]);

  if (!hasPurchased) return null;

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNextLesson = () => {
    // Find current module and lesson index
    let currentModIdx = -1;
    let currentLessIdx = -1;
    
    COURSE_MODULES.forEach((mod, mIdx) => {
      const lIdx = mod.lessons.findIndex(l => l.id === currentLesson.id);
      if (lIdx !== -1) {
        currentModIdx = mIdx;
        currentLessIdx = lIdx;
      }
    });

    if (currentModIdx !== -1 && currentLessIdx !== -1) {
      const currentMod = COURSE_MODULES[currentModIdx];
      if (currentLessIdx < currentMod.lessons.length - 1) {
        // Next lesson in same module
        setCurrentLesson(currentMod.lessons[currentLessIdx + 1]);
      } else if (currentModIdx < COURSE_MODULES.length - 1) {
        // First lesson in next module
        const nextMod = COURSE_MODULES[currentModIdx + 1];
        setExpandedModules(prev => ({ ...prev, [nextMod.id]: true }));
        setCurrentLesson(nextMod.lessons[0]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col md:flex-row selection:bg-red-600/30">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800 z-30 relative">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-red-600" />
          <span className="font-bold text-lg tracking-tight">STRIKING MASTERY</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-zinc-900 border-r border-zinc-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl tracking-tight hidden md:inline-block">STRIKING MASTERY</span>
            <span className="font-bold text-xl tracking-tight md:hidden">MENU</span>
          </div>
          <button 
            className="md:hidden p-2 -mr-2 text-zinc-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Course Content
          </div>
          
          <div className="space-y-1">
            {COURSE_MODULES.map((module) => (
              <div key={module.id} className="px-2">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
                >
                  <span>{module.title}</span>
                  {expandedModules[module.id] ? (
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  )}
                </button>
                
                {expandedModules[module.id] && (
                  <div className="mt-1 space-y-1 px-3 pb-2">
                    {module.lessons.map((lesson) => {
                      const isActive = currentLesson.id === lesson.id;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLesson(lesson);
                            setIsSidebarOpen(false); // Close mobile sidebar on select
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left",
                            isActive 
                              ? "bg-red-600/10 text-red-500 font-medium" 
                              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                          )}
                        >
                          <PlayCircle className={cn("w-4 h-4 shrink-0", isActive ? "text-red-500" : "text-zinc-500")} />
                          <span className="truncate flex-1">{lesson.title}</span>
                          <span className="text-xs text-zinc-600">{lesson.duration}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors w-full px-3 py-2 rounded-md hover:bg-zinc-800"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <div className="p-4 md:p-8 max-w-5xl mx-auto w-full">
          
          {/* Video Player Placeholder */}
          <div className="aspect-video bg-black rounded-2xl overflow-hidden relative border border-zinc-800 shadow-2xl mb-8 group">
            <img 
              src={`https://picsum.photos/seed/${currentLesson.id}/1920/1080`} 
              alt={currentLesson.title}
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600/90 text-white rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all shadow-lg shadow-red-600/20">
                <PlayCircle className="w-10 h-10 ml-1" />
              </button>
            </div>
            
            {/* Fake Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-1 bg-zinc-600 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-red-600 w-1/3"></div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <span>1:24 / {currentLesson.duration}</span>
                <span className="uppercase tracking-wider">HD</span>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
              <p className="text-zinc-400 max-w-2xl leading-relaxed">
                In this lesson, Coach Marcus breaks down the mechanics of the {currentLesson.title.toLowerCase()}. Pay close attention to the footwork and weight transfer, as these are critical for generating power without losing balance.
              </p>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleNextLesson}
              className="shrink-0 flex items-center gap-2 h-12"
            >
              Next Lesson
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Instructor Notes */}
          <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span>Keep your chin tucked and hands high at all times.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span>Rotate your hips to generate power, don't just use your arms.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span>Always return to your defensive stance immediately after striking.</span>
              </li>
            </ul>
          </div>

        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
