import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container, Section, Surface } from '@/components/primitives/Layout'

const FEATURES = [
  'Cofre de certificados digitais A1/A3 com alerta de validade',
  'Emissão de NFS-e multi-município e controle de guias (DAS/DARF/GPS/ISS)',
  'Calendário de obrigações fiscais por regime, CNAE e município',
  'IA que antecipa prazos e pendências — com masking de dados (LGPD)',
]

const BAR_DATA = [
  { label: 'Out', height: 42 },
  { label: 'Nov', height: 58 },
  { label: 'Dez', height: 35 },
  { label: 'Jan', height: 70 },
  { label: 'Fev', height: 52 },
  { label: 'Mar', height: 100 },
  { label: 'Abr', height: 63 },
]

export default function FiscWiseSection() {
  return (
    <Section tone="deep" spacing="xl" className="border-y border-[var(--border)]">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <p className="eyebrow">FiscWise</p>
            </div>

            <h2 className="font-display text-balance text-3xl font-bold leading-tight text-[var(--text-1)] sm:text-4xl">
              Toda a operação do escritório de contabilidade num sistema só.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[var(--text-2)]">
              O FiscWise reúne certificados digitais, emissão de NFS-e, obrigações fiscais, guias e cobrança de honorários numa só plataforma — com IA que antecipa prazos e pendências. Um sistema no lugar de quatro.
            </p>

            <ul className="mt-8 grid gap-3">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-[var(--text-2)]">
                  <CheckCircle2 className="h-5 w-5 flex-none text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/fiscwise" className="btn-primary mt-8 inline-flex min-h-[44px] px-6 py-3 text-[14px]">
              Ver como o FiscWise funciona
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Surface className="overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div>
                <p className="text-[12px] text-[var(--text-3)]">Dashboard executivo</p>
                <h3 className="font-display text-xl font-bold text-[var(--text-1)]">Maio 2026</h3>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-[11px] font-bold text-success">
                Operacional
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3">
              <Stat title="Entradas" value="R$ 84.200" detail="+12%" />
              <Stat title="Saídas" value="R$ 31.450" detail="-4%" accent />
              <Stat title="Pendências" value="3" detail="de 250" />
            </div>

            <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-deep)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-[var(--text-1)]">Receita mensal</p>
                <p className="text-[12px] text-[var(--text-3)]">últimos 7 meses</p>
              </div>
              <div className="flex h-32 items-end gap-2">
                {BAR_DATA.map((bar, index) => (
                  <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-[var(--accent-muted)]"
                      style={{
                        height: `${bar.height}%`,
                        background: index === 5 ?'linear-gradient(to top, var(--accent), var(--accent-light))' : undefined,
                      }}
                    />
                    <span className="text-[10px] text-[var(--text-3)]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Surface>
        </div>
      </Container>
    </Section>
  )
}

function Stat({ title, value, detail, accent = false }: { title: string; value: string; detail: string; accent?: boolean }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-deep)] p-4">
      <p className="text-[12px] text-[var(--text-3)]">{title}</p>
      <p className="mt-1 font-display text-xl font-bold" style={{ color: accent ?'var(--accent)' : 'var(--text-1)' }}>
        {value}
      </p>
      <p className="mt-1 text-[11px] text-[var(--text-3)]">{detail}</p>
    </div>
  )
}
