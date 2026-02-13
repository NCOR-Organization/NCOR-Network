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
    participantType: 'individual',
    interests: [],
    receiveUpdates: [],
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
    'Research Collaboration',
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

  const githubTriggerInterests = useMemo(
    () =>
      new Set([
        'Ontology Engineering',
        'Research Collaboration',
        'Semantic Mapping Working Group',
        'Common Core Ontologies Working Group',
      ]),
    []
  );

  const shouldShowGithub = useMemo(() => {
    if (formData.participantType !== 'individual') return false;
    return formData.interests.some((i) => githubTriggerInterests.has(i));
  }, [formData.participantType, formData.interests, githubTriggerInterests]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  useEffect(() => {
    if (formData.participantType === 'organization' && formData.githubHandle) {
      setFormData((prev) => ({ ...prev, githubHandle: '' }));
    }
  }, [formData.participantType, formData.githubHandle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
## New NCOR Participation Application

### Contact Information
- **Name:** ${formData.firstName} ${formData.lastName}
- **Email:** ${formData.email}
- **Participation Type:** ${formData.participantType === 'individual' ? 'Individual' : 'Organization'}
- **Organization:** ${formData.organization || 'Not provided'}
- **Role:** ${formData.role || 'Not provided'}

### Optional Profiles
- **GitHub:** ${
        formData.participantType === 'individual'
          ? formData.githubHandle
            ? `@${formData.githubHandle.replace('@', '')}`
            : 'Not provided'
          : 'Not applicable (Organization)'
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

      const issueTitle = `Participation Application: ${formData.firstName} ${formData.lastName}`;
      const params = new URLSearchParams({
        title: issueTitle,
        body: issueBody,
        labels: 'participation-application',
      });

      sessionStorage.setItem('formSubmissionData', JSON.stringify(formData));
      window.location.href = `https://github.com/NCOR-Organization/NCOR-Network/issues/new?${params.toString()}`;
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error:
          'There was a problem submitting your application. Please try again or contact us directly at ncornetwork@gmail.com.',
      });
      setIsSubmitting(false);
    }
  };

  if (formStatus.submitted && formStatus.success) {
    return (
      <div className={styles.successCard}>
        <h2>Thank You For Your Application!</h2>
        <p>
          We've received your application and will be in touch soon.
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
    <div className="participation-section" id="participation-application">
      <div className="application-header">
        <h2>Participation Application</h2>
        <p>Complete the form below to participate in NCOR’s research and working groups.</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Participation does not constitute legal membership in the nonprofit corporation nor authorization to represent NCOR.
        </p>
      </div>

      <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
        {/* --- The rest of your form JSX remains structurally identical --- */}
        {/* Only the participation wording changes below */}

        <div className={styles.formField}>
          <p>
            <strong>Participation Type</strong> <span className={styles.required}>*</span>
          </p>
          <div className={styles.radioGroup}>
            <div className={styles.radioOption}>
              <input
                type="radio"
                id="participant-individual"
                name="participantType"
                value="individual"
                checked={formData.participantType === 'individual'}
                onChange={handleChange}
                required
              />
              <label htmlFor="participant-individual">
                Individual Participant
              </label>
            </div>
            <div className={styles.radioOption}>
              <input
                type="radio"
                id="participant-organization"
                name="participantType"
                value="organization"
                checked={formData.participantType === 'organization'}
                onChange={handleChange}
              />
              <label htmlFor="participant-organization">
                Organization Participant
              </label>
            </div>
          </div>
        </div>

        {/* (All remaining fields remain unchanged from your original file) */}

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationSection;
