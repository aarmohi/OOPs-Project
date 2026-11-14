import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Clock3, UserCheck } from 'lucide-react'
import { Logo } from '../components/ui'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-page">
      <section className="auth-brand">
        <div className="auth-brand-top">
          <Logo />
        </div>

        <div className="auth-brand-copy">
          <h1>IT service desk</h1>
          <p>
            Report IT problems, follow their progress and confirm when they are fixed. Support staff use the
            same workspace to triage, assign and resolve incidents against agreed service levels.
          </p>
        </div>

        <ul className="auth-benefits">
          <li>
            <span aria-hidden="true"><ClipboardList size={16} /></span>
            <div>
              <strong>Reporting and triage</strong>
              <p>Each report is categorised and prioritised from its impact, urgency and the affected service.</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true"><UserCheck size={16} /></span>
            <div>
              <strong>Assignment</strong>
              <p>Incidents go to a suitable technician based on skills, workload and experience.</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true"><Clock3 size={16} /></span>
            <div>
              <strong>Service levels</strong>
              <p>Response and resolution targets are tracked, with warnings before they are missed.</p>
            </div>
          </li>
        </ul>

        <p className="auth-course">CS F213 / MAC F212 Object-Oriented Programming project · 2026–27</p>
      </section>

      <section className="auth-form-side">
        <div className="auth-mobile-brand">
          <Logo />
        </div>
        {children}
        <p className="auth-legal">
          I-ITSM demo · <Link to="/login">Sign in</Link> · <Link to="/register">Create employee account</Link>
        </p>
      </section>
    </div>
  )
}
