import React, { useState } from 'react'
import './timeline.css'

const ResumeTimeline = () => {
  const [entries] = useState([
    {
      id: 1,
      date: 'September 2018 - October 2022',
      position: 'Web Developer',
      company: 'AMP Agency',
      location: 'Boston, MA',
      responsibilities: 'Developed SPAs and assisted in overseeing the purchase & setup of an in-store interactive kiosk at Macy’s flagship location in Manhattan for Polo Ralph Lauren. Using a Vue.js framework, consolidated and created solutions for in-house documentation and best practices guide for easy searchable access. Shipped a number of WordPress sites from front to back including custom reusable blocks, page templates and themes. Developed 20+ custom landing pages often featuring animations & forms for several clients, including Zillow and Facebook. Animated over 800 HTML5 banners, including resizes, translations & various banner templates for DCO use. Created and tested over a dozen custom email templates for both in-house and clients, including modular emails for use with Marketo. Assisted in the development of an interactive UX workflow / User Journey Map using Adobe XD and Javascript.'
    },
    {
      id: 2,
      date: 'May 2018 - August 2018',
      position: 'Web Developer (Jr)',
      company: 'Third & Grove',
      location: 'Boston, MA',
      responsibilities: 'Expanded knowledge on how to approach various technological problems, including DevOps and Front End Development. Supervised monthly site maintenance/updates across all 30 CRS sites (Drupal and WordPress)'
    },
    {
      id: 3,
      date: 'October 2016 - May 2018',
      position: 'IT HelpDesk Analyst',
      company: 'Massachusetts Educational Financial',
      location: 'Boston, MA',
      responsibilities: 'Supported associates on various IT issues, including installing, operating, and troubleshooting systems, both remote and in-person. Relocated & set'
    }
  ])

  return (
    <div className="timeline">
      {entries.map(entry => (
        <div className="timeline-entry" key={entry.id}>
          <div className="timeline-entry-date">{entry.date}</div>
          <div className="timeline-entry-content">
            <h2>{entry.position}</h2>
            <h4>
              {entry.company} - {entry.location}
            </h4>
            <p>{entry.responsibilities}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResumeTimeline
