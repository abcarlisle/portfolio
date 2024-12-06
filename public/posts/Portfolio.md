# Portfolio Website

## Overview
This portfolio website showcases my skills, experience, and projects, providing a comprehensive overview of my work as a software engineer. Built with **Next.js**, the site features a clean, modern design and dynamic functionality to engage visitors. To ensure cost efficiency and reliability, the website is hosted as a static site in an **AWS S3 bucket** with **AWS CloudFront** for enhanced global performance.

---

## Features
- **Modern User Interface**:
  - Built with **Next.js**, ensuring fast load times and a responsive design.
  - Showcases project case studies, skills, and contact information.

- **Static Website Hosting**:
  - Deployed to **AWS S3** for cost-effective static hosting.
  - Accelerated with **AWS CloudFront** for low-latency content delivery worldwide.

- **Contact Form Integration**:
  - Enables direct communication with visitors through a secure contact form.
  - Powered by **AWS Lambda**, **AWS API Gateway**, and **AWS SES** to process and send inquiries to my email.

- **Search Engine Optimization (SEO)**:
  - Optimized metadata and clean URLs for improved search engine rankings.

---

## Tools and Technologies
### Frontend
- **Next.js**: React framework optimized for static and server-side rendering.
- **CSS Modules**: Styled components for maintainable, modular CSS.
- **Markdown Rendering**: Dynamic generation of content from Markdown files.

### Hosting and Cloud Infrastructure
- **AWS S3**: Static website hosting with high availability and scalability.
- **AWS CloudFront**: Global content delivery network for faster performance.
- **AWS Lambda**: Processes contact form submissions.
- **AWS API Gateway**: Manages secure API routes for form submissions.
- **AWS SES**: Sends email notifications triggered by form submissions.

---

## Development Process
### 1. Design and Frontend Development
Using **Next.js**, I built a user-friendly interface that highlights my projects and skills. The layout emphasizes simplicity, allowing visitors to quickly find relevant information.

### 2. Static Hosting Setup
To ensure scalability and cost efficiency, I hosted the website on **AWS S3**. Static files, including the built Next.js application, are served directly from the bucket. **AWS CloudFront** was integrated to deliver content rapidly across the globe.

### 3. Contact Form Integration
A serverless contact form was implemented using **AWS Lambda**, which processes form data submitted by visitors. **AWS API Gateway** manages secure endpoints for form submissions, and notifications are sent using **AWS SES**.

### 4. Markdown Integration
Projects and content are dynamically rendered from Markdown files, allowing easy updates and scalability without editing the frontend code.

---

## Screenshots and Visuals
*Placeholder for screenshots of the portfolio design, project pages, and cloud architecture diagram.*

---

## Challenges
- Designing a modular architecture to easily expand and update project content.
- Configuring **AWS SES** to ensure email deliverability while maintaining security and compliance.
- Implementing a global CDN using **AWS CloudFront** for optimal site performance.

---

## Future Enhancements
- Add an interactive blog section to share technical insights and tutorials.
- Integrate analytics tools to monitor traffic and user behavior.
- Implement dark mode for enhanced user experience.

---

## Key Takeaways
This project reflects my ability to design and deploy scalable, cost-efficient web applications using modern technologies like **Next.js** and AWS. By leveraging **serverless architecture** and static hosting, I created a professional platform that effectively showcases my skills and experience.
