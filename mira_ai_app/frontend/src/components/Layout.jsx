import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem('mira_user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    loadUser();
    window.addEventListener('storage_update', loadUser);
    return () => window.removeEventListener('storage_update', loadUser);
  }, []);

  const getNavClass = (target) => {
    const base = "flex flex-col items-center justify-center px-4 py-2 active:scale-90 transition-all duration-300 ease-out ";
    if (path === target || (target === '/' && path === '/scan')) {
      return base + "bg-gradient-to-tr from-primary to-primary-container text-white rounded-2xl shadow-lg shadow-primary/20";
    }
    return base + "text-slate-400 hover:text-primary";
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32 font-body">
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 h-20 bg-white/70 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          {/* Leaf Icon replacing standard logo */}
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-on-surface font-headline">{t('app_name')}</h1>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          {!user && (
             <button 
               onClick={() => window.dispatchEvent(new Event('open_auth_modal'))}
               className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary-container px-3 py-1.5 rounded-lg shadow-sm transition-colors"
             >
                Login
             </button>
          )}
          <select 
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-2 py-1 text-xs font-bold text-on-surface-variant focus:ring-primary cursor-pointer uppercase tracking-widest shadow-sm"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="hi">HI (हिंदी)</option>
            <option value="bn">BN (বাংলা)</option>
            <option value="mr">MR (मराठी)</option>
            <option value="te">TE (తెలుగు)</option>
            <option value="ta">TA (தமிழ்)</option>
            <option value="gu">GU (ગુજરાતી)</option>
          </select>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary active:scale-95 duration-200 shadow-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
          </button>
        </div>
      </header>
      
      <Outlet />

      <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-2 sm:px-4 pb-8 pt-4 bg-white/80 backdrop-blur-xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.04)] ring-1 ring-outline-variant/10">
        <Link to="/" className={getNavClass('/')}>
          <span className="material-symbols-outlined mb-1 text-xl" style={{fontVariationSettings: (path==='/' || path==='/scan') ? "'FILL' 1" : ""}}>add_photo_alternate</span>
          <span className="font-inter text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-1">{t('nav_scan')}</span>
        </Link>
        <Link to="/history" className={getNavClass('/history')}>
          <span className="material-symbols-outlined mb-1 text-xl" style={{fontVariationSettings: path==='/history' ? "'FILL' 1" : ""}}>history</span>
          <span className="font-inter text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-1">{t('nav_history')}</span>
        </Link>
        <Link to="/weather" className={getNavClass('/weather')}>
          <span className="material-symbols-outlined mb-1 text-xl" style={{fontVariationSettings: path==='/weather' ? "'FILL' 1" : ""}}>wb_sunny</span>
          <span className="font-inter text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-1">{t('nav_weather')}</span>
        </Link>
        <Link to="/profile" className={getNavClass('/profile')}>
          <span className="material-symbols-outlined mb-1 text-xl" style={{fontVariationSettings: path==='/profile' ? "'FILL' 1" : ""}}>person</span>
          <span className="font-inter text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-1">{t('nav_profile')}</span>
        </Link>
      </nav>
    </div>
  );
}
