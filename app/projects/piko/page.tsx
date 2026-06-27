import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { TechPill } from '@/components/ui/TechPill';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Piko Digital Platform — Morteza Mogharrab',
  description:
    'Case study: Admin dashboard and cross-platform mobile app scaled to 1,000+ daily active users.',
};

const METRICS = [
  { value: '1,000+', label: 'Daily active users' },
  { value: '300%', label: 'Analytics improvement' },
  { value: '60%', label: 'Admin time saved' },
  { value: '3', label: 'Platforms' },
];

const RESULTS = [
  { metric: 'Platform scale', result: '1,000+ daily active users' },
  { metric: 'Analytics improvement', result: '300% — 15+ data sources unified' },
  { metric: 'Admin time saved', result: '60% via automated RBAC workflows' },
  { metric: 'Development velocity', result: '40% faster via 50+ component library' },
  { metric: 'Moderation efficiency', result: '50% faster review cycles' },
  { metric: 'Developer onboarding', result: '40% faster via 20+ technical SOPs' },
  { metric: 'Video compression', result: '60–80% size reduction via FFmpeg' },
  { metric: 'Platform coverage', result: 'iOS · Android · Web from single codebase' },
];

export default function PikoPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back */}
          <FadeIn direction="none">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              Back to Portfolio
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Enterprise Platform', 'Mobile', 'Cross-Platform', 'Confidential'].map((b) => (
                <span key={b} className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-subtle)] rounded-full px-2.5 py-0.5">
                  {b}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
              Piko Digital Platform
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Complete admin infrastructure and cross-platform mobile app for a production social
              platform — 1,000+ daily active users, 300% analytics improvement, 60% reduction in
              admin overhead.
            </p>
          </FadeIn>

          {/* Metrics */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-10">
              {METRICS.map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <div className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">{m.value}</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-1 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Confidentiality */}
          <FadeIn delay={0.15}>
            <div className="border-l-2 border-[var(--border-default)] pl-4 py-1 my-8">
              <p className="text-sm text-[var(--text-tertiary)]">
                Confidential internal system. Architecture, technical decisions, and measurable
                outcomes are documented below. Screenshots and source code are not publicly
                available due to enterprise security requirements.
              </p>
            </div>
          </FadeIn>

          {/* Overview */}
          <FadeIn delay={0.2}>
            <SectionDivider number="01" title="Overview" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              PetoKingdom (Piko) is a social platform for pet owners — profiles, community, events,
              messaging. This case study covers two systems: the admin platform that made operating
              a 1,000+ user production platform manageable for a lean team, and the cross-platform
              mobile and web application that end users interact with.
            </p>
          </FadeIn>

          {/* ── System 1: Admin Platform ────────────────────────────────────── */}
          <FadeIn delay={0.05}>
            <div className="mt-14 mb-2">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-1">
                System 1
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Admin Platform & Analytics
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="02" title="Stack" />
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Frontend', content: 'React 19 · TypeScript · Material-UI\nRedux · Chart.js · Plotly.js' },
                { label: 'Backend', content: 'Java 21 · Spring Boot 3 · Spring Security\nSpring Data JPA · JWT · BCrypt' },
                { label: 'Database', content: 'PostgreSQL · 15+ tables\nCTEs · Window functions · Flyway migrations' },
                { label: 'Infrastructure', content: 'Docker · AWS · AWS SES\nGitHub Actions CI/CD' },
              ].map((block) => (
                <div key={block.label} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-2">{block.label}</p>
                  <pre className="text-xs text-[var(--text-secondary)] whitespace-pre-wrap font-mono leading-relaxed">{block.content}</pre>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="03" title="Analytics Platform" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Unified 15+ data sources into real-time dashboards tracking DAU/MAU, registration
              trends, user growth vs. churn, platform growth metrics, content analytics, and peak
              activity windows. Complex SQL using CTEs and window functions.
            </p>
            <CodeBlock code={`-- Monthly growth with MoM comparison
WITH monthly_stats AS (
  SELECT
    DATE_FORMAT(created_at, '%Y-%m') AS month,
    COUNT(DISTINCT user_id) AS active_users,
    COUNT(*) AS total_posts,
    LAG(COUNT(DISTINCT user_id))
      OVER (ORDER BY DATE_FORMAT(created_at, '%Y-%m')) AS prev_month_users
  FROM activities
  WHERE created_at >= :startDate
  GROUP BY month
)
SELECT
  month,
  active_users,
  ROUND(((active_users - prev_month_users) / prev_month_users) * 100, 2) AS growth_rate
FROM monthly_stats
ORDER BY month DESC`} />
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="04" title="JWT Authentication + 4-Tier RBAC" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Complete security infrastructure built foundational — stateless JWT with access +
              refresh token rotation, BCrypt password hashing, 4-tier role hierarchy (Super Admin →
              Viewer), granular permission system, account lockout after failed attempts, and
              comprehensive audit logging. Zero security incidents post-launch.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="05" title="User Management System" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Full CRUD with server-side pagination, Specification-based filtering (role, status,
              date range, full-text search), bulk operations, and role assignment with audit
              trails — managing 1,000+ users without performance degradation.
            </p>
            <CodeBlock code={`@Service
public class UserService {
  public Page<UserResponse> getUsers(
      String search, Role role, UserStatus status, Pageable pageable) {
    Specification<User> spec = Specification
      .where(UserSpecification.hasSearchTerm(search))
      .and(UserSpecification.hasRole(role))
      .and(UserSpecification.hasStatus(status));
    return userRepository.findAll(spec, pageable)
      .map(this::mapToUserResponse);
  }
}`} />
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="06" title="Automated Content Moderation" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Multi-tab report management (Posts, Messages, Users, Events) with bulk actions — ban
              user, delete content, dismiss report — plus confirmation dialogs, audit trails, and
              moderation trend analytics. 50% reduction in review cycle time.
            </p>
          </FadeIn>

          {/* ── System 2: Mobile App ─────────────────────────────────────────── */}
          <FadeIn delay={0.05}>
            <div className="mt-14 mb-2">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-1">System 2</p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Cross-Platform Mobile App
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="07" title="Stack" />
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Core', content: 'React Native 0.76 · Expo 52 · TypeScript 5.3' },
                { label: 'State & Data', content: 'Redux Toolkit · Apollo Client · GraphQL subscriptions' },
                { label: 'Media', content: 'Vision Camera 4 · FFmpegKit · FastImage' },
                { label: 'Auth & i18n', content: 'Firebase Auth · Google Sign-In · Apple Auth\nLinguiJS 5 — English + Mandarin Chinese' },
              ].map((block) => (
                <div key={block.label} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-2">{block.label}</p>
                  <pre className="text-xs text-[var(--text-secondary)] whitespace-pre-wrap font-mono leading-relaxed">{block.content}</pre>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="08" title="50+ Component Library" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Platform file-extension adapters (.native.tsx / .web.tsx) with shared imports — same
              import on every platform, different renderer. Every component documented in Storybook.
              Result: 40% faster development velocity for every subsequent feature.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="09" title="Real-Time Social Features" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              GraphQL subscriptions over WebSocket — instant messaging, live notifications, feed
              updates. Apollo cache writes on subscription events (no refetch needed). Optimistic
              UI for likes and follows.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <SectionDivider number="10" title="Media Pipeline" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Image: HEIC→JPEG, 70% quality compression, chunked CDN upload. Video: FFmpeg H.264
              compression achieving 60–80% size reduction with imperceptible quality loss at mobile
              viewing sizes.
            </p>
            <CodeBlock code={`const compressVideo = async (inputPath: string): Promise<string> => {
  const output = \`\${FileSystem.cacheDirectory}v_\${Date.now()}.mp4\`;
  // H.264 · CRF 28 · fast preset · AAC audio · web-optimised moov atom
  const cmd = \`-i \${inputPath} -c:v libx264 -crf 28 -preset fast \`
    + \`-c:a aac -b:a 128k -movflags +faststart \${output}\`;
  const session = await FFmpegKit.execute(cmd);
  if (ReturnCode.isSuccess(await session.getReturnCode())) return output;
  throw new Error(await session.getOutput());
};`} />
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.05}>
            <SectionDivider number="11" title="Quantitative Results" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left py-3 pr-6 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Metric</th>
                    <th className="text-left py-3 text-xs uppercase tracking-wide text-[var(--text-tertiary)] font-normal">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 pr-6 text-[var(--text-primary)] font-medium whitespace-nowrap">{row.metric}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Full stack */}
          <FadeIn delay={0.05}>
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-4">Full Stack</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 19', 'React Native 0.76', 'Expo 52', 'TypeScript', 'Material-UI', 'Redux Toolkit',
                  'Java Spring Boot 3', 'Spring Security', 'PostgreSQL', 'GraphQL', 'Apollo Client',
                  'Firebase Auth', 'LinguiJS 5', 'FFmpegKit', 'Docker', 'AWS SES', 'GitHub Actions',
                ].map((tag) => (
                  <TechPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-14">
      <span className="font-mono text-sm text-[var(--text-tertiary)]">{number}</span>
      <div className="h-px w-8 bg-[var(--border-default)]" />
      <h3 className="text-lg font-medium text-[var(--text-primary)]">{title}</h3>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-[var(--code-bg)] border border-[var(--code-border)] rounded-lg p-5 overflow-x-auto my-4">
      <code className="font-mono text-sm text-[var(--code-text)] whitespace-pre">{code}</code>
    </pre>
  );
}
