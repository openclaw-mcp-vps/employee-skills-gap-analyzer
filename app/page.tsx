export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Talent Intelligence
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Identify Team Skill Gaps<br />
          <span className="text-[#58a6ff]">Before They Become Problems</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Map employee skills against project requirements in minutes. Get instant training recommendations and hiring gap reports — so your team is always ready for what's next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Analyzing — $18/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Input Employee Skills", desc: "Add your team members and their current skill sets using our structured skill matrix." },
            { step: "02", title: "Define Project Requirements", desc: "Specify the skills and proficiency levels needed for upcoming projects or roles." },
            { step: "03", title: "Get Gap Reports", desc: "Receive instant analysis with training recommendations and hiring gap summaries." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-3xl font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] mb-8">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited employees & projects",
              "Automated skill gap reports",
              "Training & hiring recommendations",
              "Role-based access (HR + Team Leads)",
              "Export reports to PDF/CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Who is this tool designed for?",
              a: "SkillGap Analyzer is built for HR departments, team managers, L&D professionals, and CTOs who need to align team capabilities with project demands quickly and accurately."
            },
            {
              q: "How does the skill matching algorithm work?",
              a: "You define required skills and proficiency levels per project. The tool compares these against each employee's skill profile and surfaces gaps, ranked by severity and impact."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. There are no long-term contracts. You can cancel your subscription at any time from your billing dashboard, and you'll retain access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} SkillGap Analyzer. All rights reserved.</p>
      </footer>
    </main>
  );
}
