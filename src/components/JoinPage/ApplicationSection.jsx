import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from '@docusaurus/Link';
import styles from './JoinPage.module.css';

const ApplicationSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    githubHandle: '',
    linkedinUrl: '',
    personalWebsite: '',
    avatarUrl: '',
    organization: '',
    role: '',
    membershipType: 'individual',
    interests: [],
    receiveUpdates: [], // NEW
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarError, setAvatarError] = useState(false);

  const interestOptions = [
    '101 Working Group',
    'Foundational Ontology',
    'Ontology for AI',
    'Ontology Engineering',
    'Education & Training',
    'Research Collaboration', // (John called this "R&D" in the email)
    'Semantic Mapping Working Group',
    'Common Core Ontologies Working Group',
  ];

  const roleOptions = [
    'Professor/Academic Researcher',
    'Industry Researcher',
    'Software Developer',
    'Data Scientist',
    'Knowledge Engineer',
    'AI Engineer',
    'Student',
    'Government/Policy Professional',
    'Healthcare Professional',
    'Business/Management',
    'Investor',
    'Open Source Program Manager',
    'Venture Capital Professional',
    'Other',
  ];

  // Interests that trigger GitHub field display
  const githubTriggerInterests = useMemo(
    () => new Set([
      'Ontology Engineering',
      'Research Collaboration',
      'Semantic Mapping Working Group',
      'Common Core Ontologies Working Group',
    ]),
    []
  );

  const shouldShowGithub = useMemo(() => {
    if (formData.membershipType !== 'individual') return false;
    return formData.interests.some((i) => githubTriggerInterests.has(i));
  }, [formData.membershipType, formData.interests, githubTriggerInterests]);

  const handleChange = (e) => {
    const { name, value, selectionStart, selectionEnd } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    requestAnimationFrame(() => {
      e.target.focus();
      if (selectionStart && selectionEnd) {
        e.target.setSelectionRange(selectionStart, selectionEnd);
      }
    });
  };

  const handleFocus = (e) => {
    e.target.setAttribute('data-focused', 'true');
  };

  const handleBlur = (e) => {
    e.target.removeAttribute('data-focused');
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter((interest) => interest !== value),
      });
    }
  };

  // NEW: receive updates checkbox handler
  const handleUpdatesCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        receiveUpdates: [...prev.receiveUpdates, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        receiveUpdates: prev.receiveUpdates.filter((v) => v !== value),
      }));
    }
  };

  const handleAvatarUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, avatarUrl: url }));

    if (url) {
      const img = new Image();
      img.onload = () => {
        setAvatarPreview(url);
        setAvatarError(false);
      };
      img.onerror = () => {
        setAvatarPreview(null);
        setAvatarError(true);
      };
      img.src = url;
    } else {
      setAvatarPreview(null);
      setAvatarError(false);
    }
  };

  // NEW: if switching to organization, clear github handle (since orgs may not have github)
  useEffect(() => {
    if (formData.membershipType === 'organization' && formData.githubHandle) {
      setFormData((prev) => ({ ...prev, githubHandle: '' }));
    }
  }, [formData.membershipType, formData.githubHandle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Optional (but useful): enforce interest selection as "required"
    if (formData.interests.length === 0) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please select at least one area of interest.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const issueBody = `
## New NCOR Membership Application

### Contact Information
- **Name:** ${formData.firstName} ${formData.lastName}
- **Email:** ${formData.email}
- **Membership Type:** ${formData.membershipType === 'individual' ? 'Individual' : 'Organization'}
- **Organization:** ${formData.organization || 'Not provided'}
- **Role:** ${formData.role || 'Not provided'}

### Optional Profiles
- **GitHub:** ${
        formData.membershipType === 'individual'
          ? (formData.githubHandle ? `@${formData.githubHandle.replace('@', '')}` : 'Not provided')
          : 'Not applicable (Organization membership)'
      }
- **LinkedIn:** ${formData.linkedinUrl || 'Not provided'}
- **Website:** ${formData.personalWebsite || 'Not provided'}
- **Avatar URL:** ${formData.avatarUrl || 'Not provided'}

### Areas of Interest
${
        formData.interests.length > 0
          ? formData.interests.map((interest) => `- ${interest}`).join('\n')
          : '- None selected'
      }

### Receive Updates (Optional)
${
        formData.receiveUpdates.length > 0
          ? formData.receiveUpdates.map((u) => `- ${u}`).join('\n')
          : '- No updates selected'
      }

### Additional Information
${formData.message || 'None provided'}
      `;

      const issueTitle = `Membership Application: ${formData.firstName} ${formData.lastName}`;
      const params = new URLSearchParams({
        title: issueTitle,
        body: issueBody,
        labels: 'membership-application',
      });

      sessionStorage.setItem('formSubmissionData', JSON.stringify(formData));
      window.location.href = `https://github.com/NCOR-Organization/NCOR-Network/issues/new?${params.toString()}`;
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        error:
          'There was a problem submitting your application. Please try again or contact us directly at ncornetwork@gmail.com.',
      });
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const stored = sessionStorage.getItem('formSubmissionData');
    const urlParams = new URLSearchParams(window.location.search);

    if (stored && urlParams.get('issueCreated') === 'true') {
      sessionStorage.removeItem('formSubmissionData');
      setFormStatus({
        submitted: true,
        success: true,
        error: null,
      });
      formRef.current?.reset();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        githubHandle: '',
        linkedinUrl: '',
        personalWebsite: '',
        avatarUrl: '',
        organization: '',
        role: '',
        membershipType: 'individual',
        interests: [],
        receiveUpdates: [],
        message: '',
      });
    }
  }, []);

  if (formStatus.submitted && !formStatus.success && formStatus.error) {
    // (optional) show a simple inline error; leaving minimal styling decisions to your CSS
    // If you already have error styling in module CSS, we can wire it in after.
  }

  if (formStatus.submitted && formStatus.success) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h2>Thank You For Your Application!</h2>
        <p>
          We've received your membership application and will be in touch soon. In the meantime, feel free to explore our
          resources or attend one of our upcoming events.
        </p>
        <div className={styles.successButtons}>
          <Link to="/docs/get-started" className={styles.primaryButton}>
            Explore Resources
          </Link>
          <Link to="/docs/support/office-hours" className={styles.secondaryButton}>
            Upcoming Events
          </Link>
        </div>
      </div>
    );
  }

  const updatesOptions = ['Events', 'Training', 'News'];

  return (
    <div className="membership-section" id="membership-application">
      <div className="application-header">
        <h2>Membership Application</h2>
        <p>Complete the form below to join our global network of ontology researchers and practitioners</p>
      </div>

      <div className="process-steps">
        {[
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            ),
            title: 'Create Profile',
            description: 'Fill out your details to join NCOR. GitHub is optional and only relevant for some working groups.',
          },
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z" />
              </svg>
            ),
            title: 'Submit Application',
            description: 'We route applications through our internal tracking workflow so they’re reviewed and followed up on.',
          },
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            ),
            title: 'Get Started',
            description: 'Once approved, you can collaborate on projects and access NCOR resources.',
          },
        ].map((step, index, steps) => (
          <div key={index} className="process-step">
            <div className="icon-base">{step.icon}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </div>

      <div className="info-box">
        <div className="icon-base">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
        <div>
          <strong>GitHub (Optional)</strong>
          <p>
            NCOR uses GitHub for some technical collaboration (e.g., ontology engineering and working group workflows).
            You do not need GitHub to join NCOR, and organizations are welcome to participate without it.
          </p>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            <li>Share GitHub only if you plan to participate in technical working groups</li>
            <li>Organizations do not need GitHub to join</li>
          </ul>
        </div>
      </div>

      <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label htmlFor="firstName">
              <strong>First Name</strong> <span className={styles.required}>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={styles.formInput}
              value={formData.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              autoComplete="given-name"
              data-form-type="other"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="lastName">
              <strong>Last Name</strong> <span className={styles.required}>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={styles.formInput}
              value={formData.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              autoComplete="family-name"
              data-form-type="other"
            />
          </div>
        </div>

        <div className={styles.avatarSection}>
          <div className={styles.formField}>
            <label htmlFor="avatarUrl">
              <strong>Profile Picture URL</strong> <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="avatarUrl"
              name="avatarUrl"
              type="url"
              className={`${styles.formInput} ${avatarError ? styles.inputError : ''}`}
              value={formData.avatarUrl}
              onChange={handleAvatarUrlChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="https://example.com/your-image.jpg"
              pattern="https?://.*"
              title="Please enter a valid URL starting with http:// or https://"
            />
            {avatarError && <div className={styles.errorMessage}>Unable to load image. Please check the URL.</div>}
          </div>
          {avatarPreview && (
            <div className={styles.avatarPreview}>
              <img src={avatarPreview} alt="Profile preview" />
            </div>
          )}
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label htmlFor="email">
              <strong>Email Address</strong> <span className={styles.required}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              autoComplete="email"
              data-form-type="other"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="linkedinUrl">
              <strong>LinkedIn URL</strong> <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              className={styles.formInput}
              value={formData.linkedinUrl}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="https://linkedin.com/in/username"
              pattern="https?://.*"
              title="Please enter a valid URL starting with http:// or https://"
            />
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label htmlFor="personalWebsite">
              <strong>Personal Website</strong> <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="personalWebsite"
              name="personalWebsite"
              type="url"
              className={styles.formInput}
              value={formData.personalWebsite}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="https://your-website.com"
              pattern="https?://.*"
              title="Please enter a valid URL starting with http:// or https://"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="organization">
              <strong>Organization</strong>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              className={styles.formInput}
              value={formData.organization}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="University, Company, or Institution"
              autoComplete="organization"
              data-form-type="other"
            />
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="role">
            <strong>Role</strong> <span className={styles.required}>*</span>
          </label>
          <select id="role" name="role" className={styles.formSelect} value={formData.role} onChange={handleChange} required>
            <option value="" disabled>
              Select your role
            </option>
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formField}>
          <p>
            <strong>Membership Type</strong> <span className={styles.required}>*</span>
          </p>
          <div className={styles.radioGroup}>
            <div className={styles.radioOption}>
              <input
                type="radio"
                id="membership-individual"
                name="membershipType"
                value="individual"
                checked={formData.membershipType === 'individual'}
                onChange={handleChange}
                required
              />
              <label htmlFor="membership-individual">
                <span className={styles.radioButton}></span>
                Individual Membership
              </label>
            </div>
            <div className={styles.radioOption}>
              <input
                type="radio"
                id="membership-organization"
                name="membershipType"
                value="organization"
                checked={formData.membershipType === 'organization'}
                onChange={handleChange}
              />
              <label htmlFor="membership-organization">
                <span className={styles.radioButton}></span>
                Organization Membership
              </label>
            </div>
          </div>
        </div>

        <div className={styles.formField}>
          <p>
            <strong>Areas of Interest</strong> <span className={styles.required}>*</span>
          </p>
          <div className={styles.interestGroup}>
            {interestOptions.map((interest) => (
              <div key={interest} className={styles.interestOption}>
                <input
                  type="checkbox"
                  id={`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleCheckbox}
                />
                <label htmlFor={`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}>{interest}</label>
              </div>
            ))}
          </div>
        </div>

        {/* NEW: conditional GitHub block */}
        {shouldShowGithub && (
          <div className={styles.formField}>
            <label htmlFor="githubHandle">
              <strong>GitHub Username</strong> <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="githubHandle"
              name="githubHandle"
              type="text"
              className={styles.formInput}
              value={formData.githubHandle}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="e.g. johnsmith"
              autoComplete="username"
              data-form-type="other"
            />
            <div className={styles.helperText}>
              If you plan to participate in technical working groups, sharing GitHub helps us invite you to collaborate.
            </div>
          </div>
        )}

        {/* NEW: receive updates block */}
        <div className={styles.formField}>
          <p>
            <strong>Receive updates</strong> <span className={styles.optional}>(optional)</span>
          </p>
          <div className={styles.interestGroup}>
            {updatesOptions.map((opt) => (
              <div key={opt} className={styles.interestOption}>
                <input
                  type="checkbox"
                  id={`updates-${opt.toLowerCase()}`}
                  name="receiveUpdates"
                  value={opt}
                  checked={formData.receiveUpdates.includes(opt)}
                  onChange={handleUpdatesCheckbox}
                />
                <label htmlFor={`updates-${opt.toLowerCase()}`}>{opt}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="message">
            <strong>Additional Information</strong>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={styles.formTextarea}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your background, specific interests, or how you'd like to contribute to NCOR."
          />
        </div>

        {formStatus.submitted && !formStatus.success && formStatus.error && (
          <div className={styles.errorMessage} style={{ marginTop: '0.75rem' }}>
            {formStatus.error}
          </div>
        )}

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationSection;
