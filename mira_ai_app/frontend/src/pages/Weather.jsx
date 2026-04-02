import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Weather() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate searching logic for UI purposes
  };

  return (
    <main className="pt-24 px-6 space-y-8 max-w-lg mx-auto pb-10">
      <div className="mb-6 animate-[fade-in_0.3s_ease-out]">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">{t('weather_title')}</h1>
        <p className="text-sm font-medium text-on-surface-variant max-w-[250px] leading-relaxed">{t('weather_subtitle')}</p>
      </div>
      
      {/* Dynamic Search Bar */}
      <form onSubmit={handleSearch} className="relative w-full animate-[fade-in_0.4s_ease-out_forwards]">
         <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
         <input 
           type="text" 
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           placeholder={t('weather_search_placeholder')}
           className="w-full h-14 pl-12 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 text-sm font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all"
         />
      </form>

      {/* Main Weather Card */}
      <div className="w-full rounded-[2.5rem] bg-gradient-to-tr from-primary to-primary-container text-white p-8 relative overflow-hidden shadow-xl shadow-primary/20 animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="flex justify-between items-start relative z-10">
          <div>
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-container"><span className="material-symbols-outlined text-sm">location_on</span>Sector 4B</span>
            <h2 className="text-6xl font-black mt-2 tracking-tighter">72°</h2>
            <p className="text-lg font-bold mt-1 opacity-90">Fairfield County</p>
          </div>
          <span className="material-symbols-outlined text-6xl text-primary-container drop-shadow-md" style={{fontVariationSettings: "'FILL' 1"}}>partly_cloudy_day</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 animate-[fade-in_0.6s_ease-out_forwards]">
        <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm flex flex-col items-center justify-center border border-outline-variant/10">
          <span className="material-symbols-outlined text-3xl mb-3 text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>water_drop</span>
          <span className="text-2xl font-black text-on-surface">42%</span>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Humidity</span>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm flex flex-col items-center justify-center border border-outline-variant/10">
          <span className="material-symbols-outlined text-3xl mb-3 text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>air</span>
          <span className="text-2xl font-black text-on-surface">12 mph</span>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">{t('weather_wind')}</span>
        </div>
      </div>

      <section className="animate-[fade-in_0.65s_ease-out_forwards]">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-sm font-bold tracking-widest text-on-surface-variant uppercase">{t('weather_insights')}</h2>
          <div className="h-px bg-outline-variant/30 flex-1"></div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex gap-4">
            <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">spoke</span>
            <div>
              <h3 className="text-sm font-black text-on-surface mb-1">Optimal Spraying Window</h3>
              <p className="text-xs font-medium text-on-surface-variant leading-relaxed opacity-90">Low wind and 0% precipitation planned for the next 4 hours. Ideal conditions for pesticide application.</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex gap-4">
            <span className="material-symbols-outlined text-tertiary shrink-0 mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
            <div>
              <h3 className="text-sm font-black text-on-surface mb-1">Humidity Warning</h3>
              <p className="text-xs font-medium text-on-surface-variant leading-relaxed opacity-90">High humidity expected overnight. Monitor corn fields for potential blight development tomorrow morning.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
