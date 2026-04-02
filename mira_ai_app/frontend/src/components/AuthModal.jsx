import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  // Selection State
  const [role, setRole] = useState("Field Agronomist");
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { t, i18n } = useTranslation();

  // Telemetry Clock Generator
  useEffect(() => {
    let interval;
    if (isOpen) {
       interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open_auth_modal', handleOpen);

    const storedUser = localStorage.getItem('mira_user');
    let timer;
    if (!storedUser) {
      timer = setTimeout(() => {
        if (!isDismissed) setIsOpen(true);
      }, 10000); 
    }
    
    return () => {
      window.removeEventListener('open_auth_modal', handleOpen);
      if (timer) clearTimeout(timer);
    };
  }, [isDismissed]);

  const handleManualSignUp = () => {
    if (email && password) {
       // Manual mock signup payload respecting selected Role toggle
      localStorage.setItem('mira_user', JSON.stringify({ name: email.split('@')[0], email, role: t(role === "Field Agronomist" ? 'auth_role_agronomist' : 'auth_role_manager') }));
      setIsOpen(false);
      window.dispatchEvent(new Event('storage_update'));
    } else {
      setErrorMsg(t('auth_error_missing', "Please provide email and password."));
    }
  };

  const handleFirebaseGoogleLogin = async () => {
    setErrorMsg('');
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      localStorage.setItem('mira_user', JSON.stringify({ 
         name: user.displayName || "Verified Operator", 
         email: user.email, 
         role: t(role === "Field Agronomist" ? 'auth_role_agronomist' : 'auth_role_manager') // Uses current role
      }));

      setIsOpen(false);
      window.dispatchEvent(new Event('storage_update'));
      
    } catch (error) {
      console.error("Firebase Auth Error:", error.message);
      if (error.code === 'auth/invalid-api-key') {
         setErrorMsg("Configuration required: Please paste your Firebase keys into src/firebase.js");
      } else {
         setErrorMsg(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-[fade-in_0.3s_ease-out]">
      
      {/* Background Image & Immersive Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 blur-[2px]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"></div>

      {/* Main Glassmorphism Login Card */}
      <div className="bg-slate-900/60 backdrop-blur-3xl border border-slate-700/60 p-8 pt-12 pb-10 w-full max-w-[28rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative animate-[fade-in_0.5s_ease-out_forwards] rounded-[2.5rem] text-slate-200 mx-4 flex flex-col">
        
        {/* Top Telemetry Info Bar */}
        <div className="absolute top-0 left-0 right-0 bg-slate-800/40 rounded-t-[2.5rem] border-b border-slate-700/50 px-6 py-3 flex justify-between items-center text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.15em] text-[#22c55e] opacity-90 overflow-hidden">
            <div className="flex items-center gap-2">
               <span className="material-symbols-outlined text-[13px] animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]">satellite_alt</span>
               {t('auth_telemetry_online', "SYS: ONLINE")}
            </div>
            <div className="text-slate-400">{time} UTC</div>
        </div>

        {/* Dismissal Close Button */}
        <button 
          onClick={() => { setIsOpen(false); setIsDismissed(true); }}
          className="absolute top-[4.5rem] right-6 w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-10 text-slate-400 hover:text-white shadow-inner border border-slate-700/50"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Hex Logo Stack */}
        <div className="mt-6 flex flex-col items-center mb-8 relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#115e3b] via-[#1a8c58] to-[#10b981] flex items-center justify-center text-white mb-5 shadow-[0_0_30px_rgba(26,140,88,0.3)] border-2 border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=10')] bg-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
               <span className="material-symbols-outlined text-[42px] drop-shadow-md z-10" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-widest mb-1 font-headline">MIRA<span className="text-[#10b981]">AI</span></h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 opacity-80">{t('auth_subtitle', "Crop Intelligence")}</p>
        </div>



        {errorMsg && (
           <div className="mb-6 text-xs text-center font-bold text-red-400 bg-red-950/50 p-4 rounded-2xl border border-red-900/50 whitespace-pre-line shadow-inner">
               {errorMsg}
           </div>
        )}

        {/* Inputs */}
        <div className="space-y-4 mb-8">
           <div className="relative group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-[20px] transition-colors group-focus-within:text-[#10b981]">badge</span>
              <input 
                 value={email} onChange={(e) => setEmail(e.target.value)} 
                 className="w-full pl-14 pr-5 py-4 bg-slate-950/40 hover:bg-slate-900/80 border border-slate-700/60 rounded-2xl text-sm font-medium text-white focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all outline-none placeholder:text-slate-600 shadow-inner" 
                 type="email" placeholder={t('auth_placeholder_id', "Agronomist ID / Email")} 
              />
           </div>
           <div className="relative group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-[20px] transition-colors group-focus-within:text-[#10b981]">vpn_key</span>
              <input 
                 value={password} onChange={(e) => setPassword(e.target.value)} 
                 className="w-full pl-14 pr-5 py-4 bg-slate-950/40 hover:bg-slate-900/80 border border-slate-700/60 rounded-2xl text-sm font-medium text-white focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all outline-none placeholder:text-slate-600 shadow-inner" 
                 type="password" placeholder={t('auth_placeholder_key', "Passkey / Security Hash")} 
              />
           </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
           {/* Primary Firebase Trigger (Highlighted as requested for security) */}
           <button 
              onClick={handleFirebaseGoogleLogin} 
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-[#115e3b] to-[#1a8c58] hover:from-[#15754a] hover:to-[#22c55e] border border-[#10b981]/40 rounded-2xl font-black text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-white uppercase tracking-widest disabled:opacity-50 shadow-[0_10px_30px_rgba(17,94,59,0.4)]"
           >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" className="w-[18px] h-[18px] drop-shadow-md" />
              {isLoading ? t('auth_status_connecting', "Authenticating Uplink...") : t('auth_google_btn', "Sign in with Google")}
           </button>

           <div className="flex items-center gap-4 px-2 py-1">
             <div className="h-px bg-slate-700 flex-1"></div>
             <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">OR</span>
             <div className="h-px bg-slate-700 flex-1"></div>
           </div>

           {/* Manual Secondary */}
           <button onClick={handleManualSignUp} className="w-full py-4 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-2xl font-black tracking-widest text-xs transition-all uppercase shadow-sm">
             {t('auth_login_btn', "Standard Sign In")}
           </button>
        </div>

        {/* Security Warning Notice */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-500 text-[10px] font-bold pb-4 border-b border-slate-800/60 w-full mb-4">
            <span className="material-symbols-outlined text-[14px] text-[#1a8c58]">shield</span>
            {t('auth_security_notice', "Sign in with Google is recommended for enhanced security.")}
        </div>

        {/* Bottom Footer Telemetry */}
        <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-slate-600 uppercase tracking-[0.15em]">
            <span>Client: v1.4.2_b</span>
            <span className="flex items-center gap-1.5 text-[#10b981] opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
              {t('auth_gps_verified', "GPS Verified Login")}
            </span>
        </div>
      </div>

       {/* Floating Multi-Language Switcher */}
       <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-50">
           <select 
             className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 px-4 py-2.5 rounded-xl text-[10px] font-black focus:outline-none focus:border-[#10b981] cursor-pointer uppercase tracking-widest shadow-2xl hover:text-white transition-colors appearance-none pr-8 relative"
             value={i18n.language}
             onChange={(e) => i18n.changeLanguage(e.target.value)}
             style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=%22%2394a3b8%22 height=%2224%22 viewBox=%220 0 24 24%22 width=%2224%22 xmlns=%22http://www.w3.org/2000/svg%22><path d=%22M7 10l5 5 5-5z%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPositionX: '90%', backgroundPositionY: 'center' }}
           >
             <option className="bg-slate-900 text-white" value="en">English (EN)</option>
             <option className="bg-slate-900 text-white" value="es">Español (ES)</option>
             <option className="bg-slate-900 text-white" value="hi">हिंदी (HI)</option>
             <option className="bg-slate-900 text-white" value="bn">বাংলা (BN)</option>
             <option className="bg-slate-900 text-white" value="mr">मराठी (MR)</option>
             <option className="bg-slate-900 text-white" value="te">తెలుగు (TE)</option>
             <option className="bg-slate-900 text-white" value="ta">தமிழ் (TA)</option>
             <option className="bg-slate-900 text-white" value="gu">ગુજરાતી (GU)</option>
           </select>
        </div>
    </div>
  );
}
