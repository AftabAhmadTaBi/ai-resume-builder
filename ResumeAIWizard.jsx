import React, { useState } from 'react';

const steps = [
  "Personal Info", "Education", "Experience", "Skills & Languages",
  "Summary & Certifications", "Choose Template", "Preview & Download"
];

export default function ResumeAIWizard() {
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>Resume AI Wizard</h1>
      <p>Step {step + 1} of {steps.length}: {steps[step]}</p>

      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
        {step === 0 && (
          <div>
            <label>Full Name</label><br />
            <input type="text" placeholder="Your Name" style={{ width: '100%', marginBottom: '1rem' }} /><br />
            <label>Upload Photo (optional)</label><br />
            <input type="file" accept="image/*" />
          </div>
        )}
        {step === 6 && (
          <div>
            <h2>Preview & Download</h2>
            <p>(Resume preview will appear here...)</p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button onClick={() => setStep(step - 1)} disabled={step === 0}>Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(step + 1)}>Next</button>
        ) : (
          <button>Download PDF</button>
        )}
      </div>
    </div>
  );
}