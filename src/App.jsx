import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Legend } from 'recharts'
import { BrainCircuit, Waves, ShieldCheck, Sprout, Users, Radar, ArrowRight } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const rainfallData = [
  { month: 'Jan', rainfall: 62, average: 44 },
  { month: 'Feb', rainfall: 74, average: 52 },
  { month: 'Mar', rainfall: 108, average: 71 },
  { month: 'Apr', rainfall: 164, average: 96 },
  { month: 'May', rainfall: 230, average: 140 },
  { month: 'Jun', rainfall: 281, average: 188 },
]

const distributionData = [
  { basin: 'Godavari', surplus: 84, allocated: 66 },
  { basin: 'Krishna', surplus: 42, allocated: 58 },
  { basin: 'Pennar', surplus: 30, allocated: 46 },
  { basin: 'Cauvery', surplus: 18, allocated: 34 },
]

const steps = [
  'AI ingests rainfall, reservoir, and river telemetry in real time.',
  'Hydrological models predict flood peaks and drought windows basin-wise.',
  'Optimization engine simulates transfer corridors with ecological constraints.',
  'Decision cockpit recommends release schedules and monitors execution.',
]

const impact = [
  { icon: ShieldCheck, title: 'Flood Risk Mitigation', value: '38%' },
  { icon: Sprout, title: 'Irrigation Reliability', value: '2.4M ha' },
  { icon: Radar, title: 'Prediction Accuracy', value: '91.6%' },
  { icon: Users, title: 'Communities Benefited', value: '12.7M' },
]

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 } }

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-10 py-20 ${className}`}>{children}</section>
)

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-300 selection:text-slate-900">
      <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-slate-950/50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <div className="font-semibold tracking-tight">Jala Chakra</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-300">
            {['Problem', 'Solution', 'Dashboard', 'Pilot', 'Team'].map((i) => <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-white focus-visible:outline focus-visible:outline-emerald-400 rounded-sm">{i}</a></li>)}
          </ul>
          <a href="#dashboard" className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold">Live Model</a>
        </nav>
      </header>

      <main className="scroll-smooth">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.2),transparent_40%),linear-gradient(180deg,#020617_0%,#0b1120_100%)]" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="absolute -bottom-20 left-0 right-0 h-64 bg-gradient-to-r from-cyan-400/20 via-emerald-400/30 to-cyan-400/20 blur-3xl" />
          <motion.div {...fadeUp} className="relative text-center max-w-4xl mt-20">
            <p className="uppercase tracking-[0.24em] text-cyan-300 text-xs mb-5">AI-Powered National Water Intelligence</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Link Rivers Intelligently.<br/>Balance Water Equitably.</h1>
            <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto">Jala Chakra predicts surpluses, routes transfers, and orchestrates basin-level decisions to reduce floods and droughts with measurable outcomes.</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#solution" className="px-7 py-3 rounded-full bg-white text-slate-900 font-semibold hover:scale-[1.02] transition">Explore Platform</a>
              <a href="#pilot" className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition inline-flex items-center justify-center gap-2">View Pilot <ArrowRight size={16}/></a>
            </div>
          </motion.div>
        </section>

        <Section id="problem">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">One Monsoon. Two Extremes.</motion.h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="glass-card p-8"><h3 className="text-2xl font-semibold text-cyan-300 mb-3">Flood Corridors</h3><p className="text-slate-300">High-intensity rainfall overwhelms downstream systems, forcing emergency releases and infrastructure strain.</p></motion.div>
            <motion.div {...fadeUp} className="glass-card p-8"><h3 className="text-2xl font-semibold text-emerald-300 mb-3">Drought Zones</h3><p className="text-slate-300">Rain-shadow districts face recurring water scarcity, crop stress, and unpredictable irrigation access.</p></motion.div>
          </div>
        </Section>

        <Section id="solution">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">AI + River Linking, Unified</motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{icon: BrainCircuit,title:'Forecast Intelligence',desc:'Machine learning models detect surplus and deficit windows 7-30 days ahead.'},{icon:Waves,title:'Adaptive Transfer Plans',desc:'Optimized corridors route water while preserving ecological flow constraints.'},{icon:ShieldCheck,title:'Command Center',desc:'A live decision cockpit for authorities with explainable recommendations.'}].map(({icon:Icon,title,desc}) => (
              <motion.article key={title} {...fadeUp} className="glass-card p-6 hover:-translate-y-1 transition">
                <Icon className="text-cyan-300 mb-5"/>
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-slate-300">{desc}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="how-it-works">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">How It Works</motion.h2>
          <ol className="mt-10 border-l border-white/20 ml-2 space-y-8">
            {steps.map((step, i) => <motion.li {...fadeUp} key={step} className="pl-6 relative"><span className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"/><strong className="text-cyan-200 mr-2">0{i+1}</strong>{step}</motion.li>)}
          </ol>
        </Section>

        <Section id="dashboard">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">Operational Dashboard</motion.h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="glass-card p-6 h-80"><h3 className="font-semibold mb-3">Rainfall Projection vs Seasonal Average</h3><ResponsiveContainer><AreaChart data={rainfallData}><defs><linearGradient id="rain" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7}/><stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#334155"/><XAxis dataKey="month" stroke="#94a3b8"/><YAxis stroke="#94a3b8"/><Tooltip /><Area dataKey="average" stroke="#86efac" fill="none"/><Area type="monotone" dataKey="rainfall" stroke="#22d3ee" fill="url(#rain)"/></AreaChart></ResponsiveContainer></motion.div>
            <motion.div {...fadeUp} className="glass-card p-6 h-80"><h3 className="font-semibold mb-3">Basin Transfer Allocation (TMC)</h3><ResponsiveContainer><BarChart data={distributionData}><CartesianGrid strokeDasharray="3 3" stroke="#334155"/><XAxis dataKey="basin" stroke="#94a3b8"/><YAxis stroke="#94a3b8"/><Tooltip /><Legend /><Bar dataKey="surplus" fill="#22d3ee" radius={[8,8,0,0]}/><Bar dataKey="allocated" fill="#34d399" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></motion.div>
          </div>
        </Section>

        <Section id="pilot">
          <motion.div {...fadeUp} className="glass-card p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Pilot: Andhra Pradesh</h2>
              <p className="mt-4 text-slate-300">Godavari–Krishna basin orchestration model prioritizes floodwater diversion and mid-season balancing for irrigation clusters in coastal and Rayalaseema zones.</p>
              <p className="mt-4 text-cyan-200 font-medium">Projected: 24% reduction in unmanaged spill and 18% increase in irrigation assurance.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 p-6 min-h-56 flex items-center justify-center text-center">Live transfer corridors and reservoir synchronization visual layer.</div>
          </motion.div>
        </Section>

        <Section id="impact">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">Measured Impact</motion.h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {impact.map(({icon:Icon,title,value}) => <motion.div {...fadeUp} key={title} className="glass-card p-5 text-center"><Icon className="mx-auto text-emerald-300"/><div className="text-2xl font-bold mt-3">{value}</div><div className="text-sm text-slate-300 mt-1">{title}</div></motion.div>)}
          </div>
        </Section>

        <Section id="team">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold">Core Team</motion.h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {['Shreya S Rao','Siriwanth G B'].map((name)=> <motion.article key={name} {...fadeUp} className="glass-card p-8 hover:shadow-emerald-400/20 hover:shadow-2xl transition"><h3 className="text-2xl font-semibold">{name}</h3><p className="text-slate-300 mt-2">Product, hydrology, and AI systems leadership driving design-to-deployment excellence.</p></motion.article>)}
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm">© 2026 Jala Chakra. Built for climate-resilient water governance.</footer>
      <Analytics />
    </div>
  )
}
