This will be a placeholder for now until I get the react app working.

This is the JSX for the landing page for the Website.

import React from 'react';
import './App.css'; // Link to your custom CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Innovo Pro Web Design - Hand-Coded Custom Websites for Westchester County Businesses</h1>
        <p>Helping small businesses in Westchester County, NY grow online with professional, hand-coded websites and effective SEO solutions.</p>
      </header>

      <section className="about-us">
        <h2>Why Choose Us?</h2>
        <p>At Innovo Pro Web Design, we focus on providing custom websites for small businesses in Westchester County. We understand the local market and create websites that are optimized for search engines, helping businesses in cities like White Plains, Yonkers, and New Rochelle stand out online. Our hand-coded, SEO-friendly websites are built to help your business grow and reach local customers.</p>
      </section>

      <section className="services">
        <h2>Our Services for Westchester County Small Businesses</h2>
        <ul>
          <li>
            <h3>Custom Web Design for Westchester Businesses</h3>
            <p>Get a professional, custom-designed website tailored to your business in Westchester County. Whether you’re in Scarsdale or Mount Vernon, we craft websites that reflect your unique brand.</p>
          </li>
          <li>
            <h3>Local SEO for Westchester County</h3>
            <p>Our SEO services are focused on helping small businesses in Westchester County rank higher in local search results, making it easier for potential customers in your area to find you.</p>
          </li>
          <li>
            <h3>Mobile-Friendly Websites for Westchester Customers</h3>
            <p>We ensure your website is mobile-friendly, providing a seamless experience for customers across Westchester County, whether they’re browsing from their phones or desktops.</p>
          </li>
        </ul>
      </section>

      <section className="pricing">
        <h2>Affordable Subscription Plans for Westchester County Small Businesses</h2>
        <p>Our subscription plans are specifically designed for small businesses in Westchester County, offering cost-effective solutions to launch and maintain a website:</p>
        <ul>
          <li><strong>Launch Plan</strong>: $500 - One-time setup fee for a custom-designed, SEO-optimized website tailored to your Westchester business.</li>
          <li><strong>Growth Plan</strong>: $150/month - Ongoing SEO, regular updates, and monthly reports to ensure your website stays competitive in the local market.</li>
          <li><strong>Premium Plan</strong>: $350/month - Full-service solution, including advanced SEO, content creation, and priority support to help your business thrive online in Westchester County.</li>
        </ul>
        <p>Get started today and make your business in Westchester County stand out online!</p>
      </section>

      <section className="testimonials">
        <h2>What Our Westchester County Clients Say</h2>
        <div className="testimonial">
          <p>"Innovo Pro Web Design transformed our online presence! Their custom-designed website has helped us reach more local customers in White Plains and beyond!"</p>
          <p>- Sarah T., Owner of Westchester Landscaping</p>
        </div>
        <div className="testimonial">
          <p>"The team at Innovo Pro Web Design understood the unique needs of our business in New Rochelle. Our new website is not only beautiful but also ranks well on local searches!"</p>
          <p>- Michael D., Founder of New Rochelle Fitness</p>
        </div>
      </section>

      <section className="design-process">
        <h2>Our Web Design Process and How a Subscription Helps Your Small Business</h2>
        <p>At Innovo Pro Web Design, we follow a simple yet effective process to create custom websites that help your business grow. Here's how we do it:</p>
        <ol>
          <li><strong>Discovery & Consultation</strong> - We start by understanding your business goals, target audience, and design preferences.</li>
          <li><strong>Design & Development</strong> - We create a unique, mobile-friendly website tailored to your business needs, with a focus on user experience.</li>
          <li><strong>SEO & Launch</strong> - Our team optimizes your site for search engines, ensuring that your business ranks well in local search results before launching it live.</li>
          <li><strong>Ongoing Maintenance & Updates</strong> - With our subscription plans, we continue to monitor, update, and improve your website, keeping it fresh and SEO-optimized so your business stays competitive.</li>
        </ol>
        <p>Our subscription model offers more than just a one-time website build. It provides continuous support, updates, and SEO improvements to ensure your website keeps driving results for your small business, month after month. Stay ahead of the competition without worrying about constant website maintenance—let us handle it for you!</p>
      </section>

      <section className="cta">
        <h2>Ready to Grow Your Westchester Business Online?</h2>
        <p>Contact us today for a free consultation and learn how we can create a custom website that attracts more local customers in Westchester County.</p>
        <button>Contact Us</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Innovo Pro Web Design. Proudly serving small businesses in Westchester County, NY.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
