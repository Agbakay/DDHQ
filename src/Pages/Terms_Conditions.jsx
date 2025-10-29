import React from "react";

const Terms_Conditions = () => {
  return (
    <div>
      {/* Contact Hero Section */}
      <div className="hero lg:h-[500px] h-[400px] flex items-center justify-center text-center lg:px-[8%] px-6">
        <div>
          <h3 className="text-lg text-white font-semibold mb-3">
            Privacy Policy / Terms And Conditions
          </h3>
          <h1 className="lg:text-5xl text-3xl text-white font-semibold mb-5">
            Your Privacy & Rights Matter
          </h1>
          <p className="text-white lg:px-[30%] px-0">
            At Detty December HQ, we value your trust. Our Terms & Conditions
            outline how our platform operates, while our Privacy Policy ensures
            your data stays protected. From bookings to rewards, we’re committed
            to transparency, security, and a seamless experience.
          </p>
        </div>
      </div>

      {/* Policy Statement */}
      <div className="policy">
        <div className="wrapper lg:px-[15%] px-3 py-28">
          <div className="row lg:flex gap-20 justify-start items-start">
            <div className="col basis-[55%] flex flex-col bg-gray-200 mb-10">
              <a
                href="/dispute_resolution_policy"
                className="px-10 py-10 border-b-1 border-gray-50 hover:bg-white cursor-pointer font-semibold"
              >
                Dispute Resolution Policy
              </a>
              <a
                href="/privacy"
                className="px-10 py-10 border-b-1 border-gray-50  hover:bg-white cursor-pointer font-semibold"
              >
                Privacy Policy
              </a>
              <a
                href="/terms_&_condition"
                className="px-10 py-10 border-b-1 border-gray-50 text-white bg-brandGreen cursor-pointer font-semibold"
              >
                Terms of Service
              </a>
            </div>
            {/*  */}
            <div className="col">
              <h1 className="mb-5 font-bold lg:text-4xl text-3xl">
                Terms of Service – DDHQ
              </h1>
              <h2 className="text-lg font-semibold mb-3">1. Introduction</h2>
              <p className="mb-3">
                These Terms of Service (“Terms”) govern your access to and use
                of the DDHQ mobile application, website, and services
                (collectively, the “Platform”) operated globally by DDHQ
                Technologies LLC, a company registered in Delaware, U.S.A., and
                locally executed in Nigeria by HQ1 Technologies Limited.
              </p>
              <p className="mb-3">
                DDHQ is a trademark of HQ1 Technologies Limited (Nigeria) and is
                used under exclusive license by DDHQ Technologies LLC for global
                operations.
              </p>
              <p className="mb-3">
                By accessing or using the Platform, you agree to be bound by
                these Terms. If you do not agree, do not use the Platform.
              </p>
              <h2 className="text-lg font-semibold mb-3">2. Definitions</h2>
              <p className="mb-3">
                “User” means anyone accessing DDHQ services. “Vendors/Partners”
                means third-party service providers listed on DDHQ. “Company”
                means DDHQ Technologies LLC (Delaware, U.S.). “HQ1 Nigeria”
                refers to HQ1 Technologies Limited, our local operating partner.
              </p>
              <h2 className="text-lg font-semibold mb-3">
                3. Use of the Platform
              </h2>
              <p className="mb-3">
                Users must be 13 years or older. You agree to use the Platform
                for lawful purposes and in compliance with local laws.
              </p>
              <h2 className="text-lg font-semibold mb-3">
                4. Accounts & Access
              </h2>
              <p className="mb-3">
                You may need to create an account. You are responsible for
                safeguarding your login details.
              </p>
              <h2 className="text-lg font-semibold mb-3">5. Payments</h2>
              <ul className="list-disc pl-10 mb-3">
                <li>
                  Payments in Nigeria are processed via Paystack and Flutterwave
                  by HQ1 Technologies Limited.
                </li>
                <li>
                  International payments are processed via Stripe under DDHQ
                  Technologies LLC.
                </li>
                <li>
                  All fees, subscriptions, or commissions are clearly stated at
                  the point of transaction.
                </li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">
                6. Booking Protection, Refund Policy & Platform Integrity
              </h2>
              <h2 className="text-lg font-semibold mb-3">
                6.1 Refund Guarantee
              </h2>
              <p className="mb-2">
                DDHQ offers a refund guarantee for services booked directly
                through the Platform under these conditions:
              </p>
              <ul className="list-disc pl-10 mb-3">
                <li>The booking was made through the app</li>
                <li>Payment was completed using DDHQ-supported gateways.</li>
                <li>
                  The issue was reported and validated via DDHQ’s Dispute
                  Resolution system.
                </li>
              </ul>
              <p className="mb-3">
                Refunds may be partial or full, depending on the nature of the
                complaint.
              </p>
              <h2 className="text-lg font-semibold mb-3">
                6.2 Platform Booking Benefits
              </h2>
              <p className="mb-3">By booking via DDHQ, users enjoy:</p>
              <ul className="list-disc ml-10 mb-3">
                <li>
                  Escrow-secured payments held until services are verified
                </li>
                <li> Detty Points accumulation and Detty Credits redemption</li>
                <li> Access to support and booking modification tools</li>
                <li>
                  Priority during promotions, loyalty rewards, and event
                  previews
                </li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">
                6.3 Off-Platform Booking Disclaimer
              </h2>
              <p className="mb-2">Booking vendors outside the DDHQ system:</p>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  Voids your refund eligibility, Detty Points rewards, and
                  platform protections
                </li>
                <li>Exposes you to fraud or unverified service outcomes</li>
                <li>
                  Removes your ability to receive dispute support from DDHQ
                </li>
              </ul>
              <p className="mb-3">
                DDHQ is not liable for any issues resulting from direct deals
                with vendors off-platform.
              </p>
              <h2 className="text-lg font-semibold mb-3">
                6.4 Reporting Vendor Poaching
              </h2>
              <p className="mb-3">
                If a vendor attempts to move the conversation or transaction
                off-platform:
              </p>
              <ul className="ml-10 mb-3 list-disc">
                <li>Report via in-app support</li>
                <li>
                  Email
                  <a
                    href="mailto:support@dettydecemberhq.com"
                    className="text-brandGreen hover:text-brandOrange font-semibold"
                  >
                    support@dettydecemberhq.com
                  </a>
                </li>
                <li>WhatsApp: +234-704-519-4024</li>
              </ul>
              <p className="mb-3">
                Verified reports may result in bonus Detty Credits or reward
                incentives.
              </p>

              <h2 className="mb-3 text-lg font-semibold">
                7. DDHQ Wallet Usage Policy Wallet Usage Terms
              </h2>
              <p className="mb-3">
                The DDHQ Wallet is a stored-value system provided through
                licensed payment processors (Flutterwave, Paystack). It allows
                users to fund their account using international currencies and
                spend in Nigerian Naira for eligible services on the platform.
              </p>
              <h3 className="font-semibold">A. Eligibility</h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>Available to verified users only.</li>
                <li>
                  Funding can be done in USD, GBP, EUR, or other supported
                  currencies.
                </li>
              </ul>
              <h3>
                <b>B. FX Rates</b>
              </h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  Currency conversion is handled by the processor at real-time
                  rates.
                </li>
                <li>
                  Users will see the final NGN amount before confirming payment.
                  A small FX buffer may be applied to account for volatility.
                </li>
              </ul>
              <h3>
                <b>C. Refunds</b>
              </h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  Wallet balances are non-refundable unless required by law.
                </li>
                <li>
                  Service refunds will be credited back into the wallet in NGN.
                </li>
                <li>
                  Users can request a refund to original currency in rare cases
                  (manual review required).
                </li>
              </ul>
              <h3>
                <b>D. Usage Limits</b>
              </h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>Max daily funding: ₦300,000</li>
                <li>Max monthly funding: ₦1,500,000</li>
                <li>No wallet-to-wallet transfers currently</li>
              </ul>
              <h3>
                <b>E. Permitted Uses</b>
              </h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  Only usable for services rendered on the DDHQ platform
                  (transportation, events, concierge, etc.)
                </li>
                <li>
                  Cannot be used for speculative, exchange, or crypto
                  transactions.
                </li>
              </ul>
              <h3>
                <b>F. Regulatory Compliance</b>
              </h3>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  All transactions comply with Nigerian CBN guidelines and
                  international payment regulations.
                </li>
              </ul>
              <h2 className="text-lg mb-3 font-semibold">8. License</h2>
              <p className="mb-3">
                You are granted a non-exclusive, revocable license to access the
                platform for personal or commercial use based on your role.
              </p>

              <h2 className="text-lg mb-3 font-semibold">9. User Content</h2>
              <p className="mb-3">
                By uploading content, you grant us a license to use it within
                the platform, subject to our Privacy Policy.
              </p>
              <h2 className="text-lg mb-3 font-semibold">
                10. Limitation of Liability
              </h2>
              <p className="mb-3">
                The Platform is provided “as is.” Neither DDHQ Technologies LLC
                nor HQ1 Nigeria is liable for damages beyond the extent
                permitted by law.
              </p>
              <h2 className="text-lg mb-3 font-semibold">11. Termination</h2>
              <p className="mb-3">
                We may suspend or terminate your access for violations of these
                Terms.
              </p>

              <h2 className="text-lg mb-3 font-semibold">12. Changes</h2>
              <p className="mb-3">
                We may update these Terms at any time. Continued use signifies
                acceptance.
              </p>
              <h2 className="text-lg mb-3 font-semibold">13. Governing Law</h2>
              <p className="mb-3">
                For U.S. and international users, these Terms are governed by
                the laws of the State of Delaware. For Nigerian users, these
                Terms are governed by the laws of the Federal Republic of
                Nigeria.
              </p>

              <h2 className="text-lg font-semibold mb-3">14. Contact</h2>
              <ul className="list-disc ml-10 mb-3">
                <li>
                  Global{" "}
                  <a
                    href="Mailto:support@dettydecemberhq.com"
                    className="text-brandGreen hover:text-brandOrange font-semibold"
                  >
                    support@dettydecemberhq.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms_Conditions;
