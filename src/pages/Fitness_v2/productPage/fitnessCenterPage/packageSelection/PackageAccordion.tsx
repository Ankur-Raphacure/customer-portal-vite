import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  .accordion-wrapper {
    width: 100%;
    max-width: 2xl;
    margin: 0 auto;
    padding: 1rem;
  }

  .accordion-item {
    margin-bottom: 1rem;
    width: 100%;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
  }

  .accordion-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: #111827;
  }

  .icon-wrapper {
    transform: ${(props:any) => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    transition: transform 0.2s ease-in-out;
  }

  .content-wrapper {
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
    max-height: ${(props:any) => props.$isOpen ? '24rem' : '0'};
  }

  .content {
    padding: ${(props:any) => props.$isOpen ? '1rem' : '0'};
    color: #4b5563;
  }
` as any;

const AccordionItem = ({ title, isOpen, onClick,content }:any) => {
  return (
    <div className="accordion-item" role="button" onClick={onClick}>
      <div className="accordion-header">
        <h3 className="accordion-title">{title}</h3>
        <span className="icon-wrapper">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </div>
      <div className="content-wrapper">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  );
};

const PackageAccordion = () => {
  const [openItems, setOpenItems] = useState({}) as any;
  
  const items = [
    { id: 1, title: 'Terms & Conditions',content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility of a refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.` },
    { id: 2, title: 'Privacy Policy',content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility ofa refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.` },
    { id: 3, title: 'Cancellation & Refund Policies',content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility of a refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.` }
  ];

  const toggleItem = (id:any) => {
    setOpenItems((prev:any) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <StyledAccordion $isOpen={openItems}>
      <div className="accordion-wrapper">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item?.content}
            isOpen={openItems[item.id]}
            onClick={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </StyledAccordion>
  );
};

export default PackageAccordion;