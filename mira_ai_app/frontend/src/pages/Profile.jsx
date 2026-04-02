import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load initial user state
    const loadUser = () => {
      const stored = localStorage.getItem('mira_user');
      setUser(stored ? JSON.parse(stored) : null);
    };

    loadUser();

    // Listen for cross-component storage updates (like from AuthModal)
    window.addEventListener('storage_update', loadUser);
    return () => window.removeEventListener('storage_update', loadUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('mira_user');
    setUser(null);
  };

  return (
    <main className="pt-24 px-6 space-y-8 max-w-lg mx-auto pb-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">{t('profile_title')}</h1>
        {user && (
          <button onClick={handleLogout} className="text-error text-sm font-bold bg-error/10 px-4 py-2 rounded-xl active:scale-95 transition-transform">
            Logout
          </button>
        )}
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm border border-outline-variant/20 flex flex-col items-center relative overflow-hidden transition-all duration-300">
        
        {/* Dynamic User Check */}
        {user ? (
           <>
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white text-4xl font-black mb-4 shadow-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold text-on-surface">{user.name}</h2>
            <p className="text-sm font-medium text-on-surface-variant mb-6">{user.email}</p>

            <div className="w-full bg-surface-container-low rounded-xl p-4 mb-4 border border-outline-variant/10">
              <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2 mb-2">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Role</span>
                <span className="text-sm font-bold text-on-surface">{user.role || t('profile_sector')}</span>
              </div>
              <div className="flex justify-between items-center bg-primary/5 -mx-4 -mb-4 p-4 rounded-b-xl border-t border-primary/10">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Status</span>
                <span className="text-sm font-black text-primary">Active Subscriber</span>
              </div>
            </div>

            <button className="w-full py-4 mt-6 bg-surface-container text-primary rounded-xl font-black tracking-widest uppercase text-sm shadow-sm active:scale-95 transition-all border border-primary/20 hover:bg-primary/5">
              {t('profile_edit')}
            </button>
           </>
        ) : (
           <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-2">
                 <span className="material-symbols-outlined text-4xl">person_off</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Not Signed In</h2>
              <p className="text-sm font-medium text-on-surface-variant">Please sign in or wait 10 seconds for the authentication modal.</p>
           </div>
        )}
      </div>
    </main>
  );
}
