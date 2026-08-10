import { contact } from '../data/cvData.js';

export default function Contact() {
  return (
    <div>
      <div className="pane-head">view contact<span className="cursor" /></div>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-key">Phone</div>
          <div className="contact-value">
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-key">Email</div>
          <div className="contact-value">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-key">Location</div>
          <div className="contact-value">{contact.location}</div>
        </div>
      </div>
    </div>
  );
}
