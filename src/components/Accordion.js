// Accordion.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/Accordion.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      <div className="accordion-heading">
        <h3>{title}</h3>
        <i className="fa fa-chevron-down"></i>
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const App = () => {
  const accordionItems = [
    {
      title: 'How does it work?',
      content: `Download the Mamaket mobile app or use the website to browse deals on tons of great items nearby.
      Instantly message the seller securely through the app to negotiate prices and set up delivery or meetup options.
      Make and receive payment using the Mamaket e-wallet system known as Mamapurse.
      Sell something of your own, by simply taking a picture with your phone, you can sell old and new products as well as services. Posting takes less than 30 seconds!`,
    },
    {
      title: 'What is a  marketplace',
      content: 'A marketplace is a platform or an environment where buyers and sellers come together to engage in commercial transactions. The marketplace provides a venue for sellers to offer their goods or services to potential customers, who can compare prices and quality, make purchases, and provide feedback. Marketplaces can be physical locations, such as farmers markets, or online platforms like Mamaket. In recent years, there has been a significant increase in the number of online marketplaces, providing buyers and sellers with greater access to a wider range of products and services, and enabling them to transact business more efficiently and conveniently. Basically, what you need is here just type the search.',
    },
    // Add more items as needed
  ];

  return (
    <div className="container">
      <div className="heading">FAQs</div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;