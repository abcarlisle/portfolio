# ETF Holding Calculator

## Overview
The **ETF Holding Calculator** is a web-based application designed to provide users with a clear understanding of their financial exposure across various sectors, industries, and countries based on their ETF holdings. This project combines **Next.js** for the frontend with **Python** for backend processing to deliver accurate analytics in an intuitive and efficient interface.

Additionally, the application is hosted as a static website on an **AWS S3 bucket**, ensuring cost-efficient and scalable deployment. A **Contact Us** form was also implemented, leveraging **AWS Lambda**, **AWS API Gateway**, and **AWS SES** to route notifications directly to me.

---

## Features
- **ETF Exposure Analysis**:
  - Calculate total exposure to sectors, industries, and countries based on ETF holdings.
  - Accepts data input in structured formats like CSV for processing.
  - Dynamic visualization of portfolio distribution for easier interpretation.

- **Static Website Hosting**:
  - Hosted in an **AWS S3 bucket** as a static site for cost efficiency and reliability.
  - Configuration with **AWS CloudFront** for enhanced content delivery and improved user experience.

- **Contact Us Form**:
  - Implemented using:
    - **AWS Lambda**: Processes form submissions and triggers notifications.
    - **AWS API Gateway**: Routes API requests securely and efficiently.
    - **AWS SES**: Sends email notifications directly to me for faster communication.

---

## Tools and Technologies
### Frontend
- **Next.js**: Dynamic and optimized web application framework.
- **CSS/HTML**: Clean and responsive user interface.

### Backend
- **Python**: Performs data parsing and ETF exposure calculations.
- **Pandas**: Handles data manipulation and aggregation.

### Hosting and Cloud Infrastructure
- **AWS S3**: Cost-effective static site hosting with high availability.
- **AWS Lambda**: Processes backend logic for the contact form.
- **AWS API Gateway**: Secures and routes contact form submissions.
- **AWS SES (Simple Email Service)**: Delivers email notifications from the contact form.
- **AWS CloudFront**: Enhances performance through CDN services.

---

## Development Process
### 1. Data Processing and Exposure Calculation
I began by designing the Python backend to parse user-uploaded ETF holdings files. Using **Pandas**, the backend performs computations to identify the total exposure to each sector, industry, and country based on predefined categorization rules.

### 2. Frontend Development
Using **Next.js**, I built a user-friendly interface for uploading files, viewing results, and interacting with the platform. The interface adapts dynamically to display visualized analytics in a clear and accessible way.

### 3. Static Website Hosting
To optimize costs, I chose **AWS S3** for static site hosting, allowing the application to run smoothly without maintaining traditional server infrastructure. The site was further accelerated using **AWS CloudFront** for caching and faster global access.

### 4. Contact Us Form Implementation
To enhance user support, I added a contact form connected to **AWS Lambda**, which processes form data and triggers notifications through **AWS SES**. **AWS API Gateway** securely manages the API endpoints for this functionality.

---

## Screenshots and Visuals
*Placeholder for Screenshots of the User Interface, Cloud Architecture Diagrams, and Sample Outputs*

---

## Challenges
- Integrating Python calculations into the Next.js framework required careful API design to ensure efficient communication between frontend and backend.
- Configuring **AWS SES** to comply with email delivery standards and handle routing securely.
- Designing a scalable and cost-efficient cloud architecture for hosting and serverless functionality.

---

## Future Enhancements
- Add support for real-time data feeds to dynamically update ETF holdings.
- Introduce additional visualization options for enhanced portfolio insights.
- Expand the contact form functionality to include automated FAQ responses.

---

## Key Takeaways
This project showcases my ability to design, develop, and deploy full-stack applications with a focus on scalability, efficiency, and user experience. Utilizing AWS services like **S3**, **Lambda**, **API Gateway**, and **SES**, I demonstrated expertise in creating cost-effective cloud solutions.