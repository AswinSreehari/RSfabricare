import { steps } from '../../data/content';
import './Process.css';

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">How it works</p>
          <h2>Simple steps from booking to delivery.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
