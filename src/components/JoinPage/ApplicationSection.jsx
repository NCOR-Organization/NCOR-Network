import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from '@docusaurus/Link';
import styles from './JoinPage.module.css';

const ApplicationSection = ({ mode = 'community' }) => {
  const isCollaborator = mode === 'collaborator';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    interests: [],
    proposedWorkingGroup: '',
    projectTitle: '',
    projectDescription: '',
    fundingSource: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });

  const formRef = useRef(null);

  const interestOptions = [
    '101 Working Group',
    'Foundational Ontology',
    'Ontology for AI',
    'Ontology Engineering',
    'Semantic Mapping Working Group',
    'Common Core Ontologies Working Group',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isCollaborator && formData.interests.length === 0 && !formData.proposedWorkingGroup) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please select a working group or propose a new one.',
      });
      setIsSubmitting(false);
      return;
    }

    if (isCollaborator && !formData.projectTitle) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please provide a project title or initiative name.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const issueBody = `
## NCOR ${isCollaborator ? 'Collaboration' : 'Community'} Application

### Contact Information
- **Name:** ${formData.firstName} ${formData.lastName}
- **Email:** ${formData.email}
- **Organization:** ${formData.organization || 'Not provided'}
- **Role:** ${formData.role || 'Not provided'}

${!isCollaborator ? `
### Working Group Participation
${
  formData.interests.length > 0
    ? formData.interests.map((i) => `- ${i}`).join('\n')
    : '- None selected'
}

### Proposed New Working Group
${formData.proposedWorkingGroup || 'None proposed'}
` : ''}

${isCollaborator ? `
### Project / Initiative
- **Project Title:** ${formData.projectTitle}
- **Funding Source (if applicable):** ${formData.fundingSource || 'Not specified'}

### Project Description
${formData.projectDescription || 'Not provided'}
` : ''}

### Additional Information
${formData.message || 'None provided'}
      `;

      const issueTitle = `NCOR ${isCollaborator ? 'Collaboration' : 'Community'} Application: ${formData.firstName} ${formData.lastName}`;

      const params = new URLSearchParams({
        title: issueTitle,
        body: issueBody,
        labels: isCollaborator
          ? 'collaboration-application'
          : 'community-application',
      });

      window.location.href = `https://github.com/NCOR-Organization/NCOR-Network/issues/new?${params.toString()}`;
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'There was a problem submitting your application.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="participation-section">
      <h2>
        {isCollaborator
          ? 'Collaboration Application'
          : 'Community Partner Application'}
      </h2>

      <form onSubmit={handleSubmit} ref={formRef}>

        <div className={styles.formGrid}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization"
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
        />

        {/* COMMUNITY MODE */}
        {!isCollaborator && (
          <>
            <h3>Select Working Groups</h3>
            {interestOptions.map((interest) => (
              <label key={interest} style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  value={interest}
                  onChange={handleCheckbox}
                />
                {interest}
              </label>
            ))}

            <textarea
              name="proposedWorkingGroup"
              placeholder="Propose a new public working group (optional)"
              rows="3"
              onChange={handleChange}
            />
          </>
        )}

        {/* COLLABORATOR MODE */}
        {isCollaborator && (
          <>
            <input
              type="text"
              name="projectTitle"
              placeholder="Project or Initiative Title"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="fundingSource"
              placeholder="Funding Source (Grant, Corporate, Government, etc.)"
              onChange={handleChange}
            />

            <textarea
              name="projectDescription"
              placeholder="Describe the project goals, timeline, and intended outcomes"
              rows="4"
              onChange={handleChange}
            />
          </>
        )}

        <textarea
          name="message"
          placeholder="Additional information"
          rows="4"
          onChange={handleChange}
        />

        {formStatus.error && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            {formStatus.error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{ marginTop: '1rem' }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationSection;
