// =============================================================================
//  newsletter.config.ts — Edit this file to customise the Newsletter section
//  The component file (Newsletter.tsx) should be left untouched.
// =============================================================================

export interface NewsletterConfig {
  /**
   * ── SECTION HEADING ────────────────────────────────────────────────────────
   * The bold headline shown in the center of the section.
   */
  heading: string;

  /**
   * ── SUBHEADING ─────────────────────────────────────────────────────────────
   * Supporting description shown below the heading.
   */
  subheading: string;

  /**
   * ── INPUT PLACEHOLDER ──────────────────────────────────────────────────────
   * The placeholder text inside the email input field.
   */
  inputPlaceholder: string;

  /**
   * ── ERROR MESSAGE ──────────────────────────────────────────────────────────
   * Shown below the input when the user clicks submit without entering an email.
   */
  errorMessage: string;

  /**
   * ── SUCCESS MESSAGE ────────────────────────────────────────────────────────
   * Shown briefly after a valid email is submitted before the page navigates.
   */
  successMessage: string;

  /**
   * ── SUBMIT DESTINATION ─────────────────────────────────────────────────────
   * Where to send users after they subscribe.
   *
   * DEFAULT BEHAVIOUR (no newsletter provider yet):
   *   Leave as '#home' — the page scrolls to the top after submission.
   *   This is intentional for a template: it gives the user visual feedback
   *   that something happened, without breaking anything.
   *
   * WHEN YOU HAVE A NEWSLETTER PROVIDER:
   *   Replace the handleSubmit logic in Newsletter.tsx with your provider's
   *   API call or form action. Popular options:
   *
   *   Mailchimp:    https://mailchimp.com/developer/marketing/api/list-members/
   *   ConvertKit:   https://developers.convertkit.com/#add-subscriber-to-a-form
   *   Beehiiv:      https://developers.beehiiv.com/docs/v2
   *   Loops.so:     https://loops.so/docs/api-reference/send-event
   *   Resend:       https://resend.com/docs/api-reference/contacts/create-contact
   *
   *   Once wired up, set this to your thank-you page URL:
   *   submitHref: '/thank-you'
   *   or an external URL:
   *   submitHref: 'https://yoursite.com/subscribed'
   */
  submitHref: string;
}

// ─── YOUR SETTINGS — only edit below this line ────────────────────────────────

const newsletterConfig: NewsletterConfig = {

  heading:    'Stay Ahead of the Threat Curve',

  subheading: 'Get real-time insights on emerging cyber threats, security best practices, and platform updates — straight from the CyberPulse command center.',

  inputPlaceholder: 'Enter Your Email Address',

  errorMessage:   'Please enter a valid email address.',

  successMessage: "You're in! Redirecting you home…",

  submitHref: '#home', // Replace with '/thank-you' or your newsletter provider URL

};

export default newsletterConfig;