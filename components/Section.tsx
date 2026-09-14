import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  sub?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, label, sub, className, children }: Props) {
  const headingId = `${id}-h`;
  return (
    <section className={["block", className].filter(Boolean).join(" ")} id={id} aria-labelledby={headingId}>
      <div className="label">
        <span className="mono" id={headingId}>{label}</span>
        {sub ? <span className="sub">{sub}</span> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
