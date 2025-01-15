import React from "react";
import { RPDisclosureStyled } from "./RPDisclosure.styled";
import QuickLinks from "../QuickLinks/QuickLinks";

const RPDisclosure = () => {
  return (
    <RPDisclosureStyled>
      <div className="policy-container">
        <div className="mainPolicyContent">
          <QuickLinks />
          <div className="policy-content">
            <h1>Responsible Disclosure Policy</h1>
            <p>
              <strong>RaphaPlus </strong>is committed to protecting and
              respecting your privacy. understands that your personal data is
              entrusted to us and appreciates the importance of protecting and
              respecting your privacy.
            </p>
            <p>
              This Privacy Policy sets out the basis on which we collect and
              process personal data about you including our practices regarding
              the collection, use, storage and disclosure of personal data that
              we collect from you and/or hold about you, and your rights in
              relation to that data.
            </p>
            <p>
              Generally, we will only ask for your consent for processing if
              there are no other <strong>legal grounds to process.</strong> In
              theseAt any subsequent stage, you may contact us at
              wellness@raphaplus.in, and ask to be furnished with the ‘Sensitive
              Personal Data’ that is held by us, pertaining to your user
              profile. We shall furnish the same to you, within a period of 30
              working days from the date of request. At any subsequent stage,
              you may contact us at wellness@raphaplus.in, and ask to
              circumstances, we will always aim to be clear and transparent
              about why we need your consent and what we are asking it for.
            </p>
          </div>
        </div>
        <div className="morePolicyInfo">
          <p>
            At any subsequent stage, you may contact us at
            wellness@raphaplus.in, and ask to be furnished with the ‘Sensitive
            Personal Data’ that is held by us, pertaining to your user profile.
            We shall furnish the same to you, within a period of 30 working days
            from the date of request.
          </p>
          <p>
            <strong>Right to withdraw consent.</strong> In the limited
            circumstances where you may have provided your consent to the
            collection, processing and transfer of your personal information for
            a specific purpose, you have the right to withdraw your consent for
            that specific processing at any time. To withdraw your consent,
            please contact wellness@raphaplus.in, once we have received
            notification that you have withdrawn your consent, we will no longer
            process your information for the purpose or purposes you originally
            agreed to, unless we have another legitimate basis for doing so in
            law. Please be aware that there are likely to be implications on our
            ability to continue our working relationship in the event that we
            are not able to process your personal information.
          </p>
          <p>
            Please read the following carefully to understand how we process
            your data. By providing your personal data to us or by using our
            services, website or other digital platform(s) you are accepting or
            consenting to the practices as described or referred to in this
            Privacy Policy.
          </p>
        </div>
      </div>
    </RPDisclosureStyled>
  );
};

export default RPDisclosure;
