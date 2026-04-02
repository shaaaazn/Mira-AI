import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function History() {
  const { t } = useTranslation();
  const [historyItems, setHistoryItems] = useState([
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRT1-skv41DYZgV4vGEIGFKgvWoF2XfkQyRxREK-cp-m4ZMOQOmWNglZCn0elotuHLUeZ_yFBABaS5m96li2nkz-uTeqMM4sqWzCv3ow3HibCydMCnjtouZDScwFiQMnbVcdFJoHqphNOnWJXj40sccO-UJPbGlxFUx3iYPSOFj02SqIgVJURz2lTbKie9WbAMtlDPdFN1WtKsxgMXG_mttFJs_Gh67ckobJ9UWhlYIsGj4JBxvRICC1Gwvfavgrsu7tnbBIFo43k",
      crop: "Corn (Maize)",
      disease: "Northern Leaf Blight",
      status: "CRITICAL",
      date: "Oct 24, 2023",
      time: "14:32",
      isDeleting: false
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeJ95zHtzUv9qQG83XlEqr4660j_U335Q8z5U3k0t1_u1p4bKqA-dIOMQOqT9kO1Zc7g4O5hVv6YyQ2jM2jWv5xGq2j3b8Zc4qD_mO2f7jI9tB4P_b3P_sX_H1pWqN_fM-Wn1tS_d0oKxJ9LqYw6yZ9vX5bP0zQkI4G2eP1lO2H2rJq5zK8s9qO2eQx4jK_0hJ4gH_uWvE",
      crop: "Tomato",
      disease: "Healthy",
      status: "OPTIMAL",
      date: "Oct 24, 2023",
      time: "09:15",
      isDeleting: false
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRT1-skv41DYZgV4vGEIGFKgvWoF2XfkQyRxREK-cp-m4ZMOQOmWNglZCn0elotuHLUeZ_yFBABaS5m96li2nkz-uTeqMM4sqWzCv3ow3HibCydMCnjtouZDScwFiQMnbVcdFJoHqphNOnWJXj40sccO-UJPbGlxFUx3iYPSOFj02SqIgVJURz2lTbKie9WbAMtlDPdFN1WtKsxgMXG_mttFJs_Gh67ckobJ9UWhlYIsGj4JBxvRICC1Gwvfavgrsu7tnbBIFo43k",
      crop: "Wheat",
      disease: "Rust (Puccinia)",
      status: "WARNING",
      date: "Oct 22, 2023",
      time: "16:45",
      isDeleting: false
    }
  ]);

  const handleDelete = (id) => {
    // Start deletion animation
    setHistoryItems(prev => prev.map(item => item.id === id ? { ...item, isDeleting: true } : item));
    // Actually remove it after transition duration (300ms)
    setTimeout(() => {
      setHistoryItems(prev => prev.filter(item => item.id !== id));
    }, 400); 
  };

  return (
    <main className="pt-24 px-6 space-y-8 max-w-lg mx-auto pb-10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">{t('history_title')}</h1>
          <p className="text-sm font-medium text-on-surface-variant max-w-[200px] leading-relaxed">{t('history_subtitle')}</p>
        </div>
      </div>
      
      <section className="space-y-4">
         <div className="flex items-center gap-3">
           <h2 className="text-sm font-bold tracking-widest text-on-surface-variant uppercase">{t('history_recent')}</h2>
           <div className="h-px bg-outline-variant/30 flex-1"></div>
         </div>
         
         <div className="space-y-4">
           {historyItems.map((item) => (
             <div 
               key={item.id} 
               className={`bg-surface-container-lowest p-4 rounded-[1.5rem] shadow-sm flex gap-4 items-center border border-outline-variant/10 transition-all duration-400 ease-in-out ${item.isDeleting ? 'opacity-0 scale-95 translate-x-10' : 'opacity-100 scale-100'}`}
             >
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-surface-container shadow-inner">
                  <img src={item.image} alt={item.crop} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 min-w-0 py-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                      item.status === 'CRITICAL' ? 'bg-error/10 text-error' : 
                      item.status === 'WARNING' ? 'bg-tertiary/10 text-tertiary' : 'bg-primary/10 text-primary'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-on-surface truncate text-base mb-0.5 leading-tight">{item.crop}</h3>
                  <p className="text-xs font-semibold text-on-surface-variant mb-2 truncate">{item.disease}</p>
                  
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>{item.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>{item.time}</span>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col gap-2">
                  <button onClick={() => handleDelete(item.id)} className="w-9 h-9 rounded-full bg-error/5 hover:bg-error/15 text-error flex items-center justify-center transition-colors active:scale-90" title={t('history_delete')}>
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
             </div>
           ))}
           {historyItems.length === 0 && (
             <div className="text-center py-12">
               <span className="material-symbols-outlined text-4xl text-outline mb-2">inbox</span>
               <p className="text-on-surface-variant font-medium text-sm">No recent scans.</p>
             </div>
           )}
         </div>
      </section>
    </main>
  );
}
