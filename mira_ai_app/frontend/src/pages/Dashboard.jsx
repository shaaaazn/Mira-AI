import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Handlers for drag and drop
  const onDragOver = (e) => { e.preventDefault(); setIsDragOver(true); };
  const onDragLeave = (e) => { e.preventDefault(); setIsDragOver(false); };
  const onDrop = async (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  };

  const processFile = async (selectedFile) => {
    setFile(selectedFile);
    setLoading(true);
    setResult(null);
    
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await fetch('http://localhost:8000/api/predict', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data?.data);
    } catch (err) {
      console.error("Prediction failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 px-6 max-w-2xl mx-auto pb-24 space-y-8 animate-[fade-in_0.3s_ease-out]">
      {/* Upload Section */}
      <section 
        className={`relative aspect-[4/3] sm:aspect-video w-full rounded-[2rem] overflow-hidden bg-surface-container-lowest shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-4 transition-all duration-300 ease-in-out ${isDragOver ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-outline-variant/40 border-dashed hover:border-primary/50'} flex flex-col items-center justify-center p-6 text-center cursor-pointer`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={handleUploadClick}
      >
        {file ? (
          <img src={URL.createObjectURL(file)} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity" alt="Scanned plant" />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
              <span className="material-symbols-outlined text-5xl">add_photo_alternate</span>
            </div>
            <h3 className="text-2xl font-extrabold text-on-surface tracking-tight font-headline">{t('scan_target')}</h3>
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{t('scan_or')}</p>
          </div>
        )}

        <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-md flex flex-col items-center justify-center">
             <div className="scan-line absolute w-full top-0 animate-[scan_2s_ease-in-out_infinite]"></div>
             <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6 shadow-lg"></div>
             <p className="text-sm font-bold text-primary tracking-widest uppercase animate-pulse drop-shadow-sm bg-white/80 px-4 py-2 rounded-full">{t('scan_detecting')}</p>
          </div>
        )}
      </section>

      {/* Result Glassmorphism Section */}
      {result && (
        <section className="animate-[fade-in_0.5s_ease-out_forwards]">
          <h2 className="text-2xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">{t('scan_result_title')}</h2>
          
          <div className="bg-white/60 backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-white/80 relative overflow-hidden">
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-30 pointer-events-none ${result.severity === 'High' ? 'bg-error' : 'bg-primary'}`}></div>
            
            <div className="flex justify-between items-start border-b border-outline-variant/20 pb-6 mb-6">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">{t('scan_disease')}</p>
                <h3 className="text-3xl font-black text-on-surface leading-tight text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface-variant font-headline">{result.prediction}</h3>
              </div>
              <div className="text-right shrink-0 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/20">
                <span className="text-3xl font-black text-primary leading-none block">{(result.confidence * 100).toFixed(0)}%</span>
                <p className="text-[9px] mt-2 text-on-surface-variant font-bold uppercase tracking-[0.15em]">{t('scan_accuracy')}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-black text-on-surface uppercase tracking-wider mb-3">
                   <span className="material-symbols-outlined text-tertiary">warning</span> {t('scan_cause')}
                </h4>
                <div className="bg-tertiary/5 p-5 rounded-2xl border border-tertiary/15 shadow-inner">
                   <p className="text-on-surface-variant leading-relaxed font-medium">
                     According to the AI dataset, this pattern indicates a fungal or resource-based infection likely caused by high humidity combined with sub-optimal soil draining. Rapid expansion of lesions on standard crops usually hints at immediate environment stressors.
                   </p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-black text-on-surface uppercase tracking-wider mb-3">
                   <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>healing</span> {t('scan_solution')}
                </h4>
                <div className="bg-primary/5 p-5 rounded-2xl border border-primary/15 shadow-inner">
                  <ul className="space-y-4 font-medium text-on-surface-variant">
                    {result.recommendations.map((r, i) => (
                      <li key={i} className="flex gap-3 leading-snug"><span className="text-primary font-black mt-1">•</span> {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <button className="w-full py-4 px-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all uppercase tracking-widest">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>psychiatry</span>
                {t('scan_button')}
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
