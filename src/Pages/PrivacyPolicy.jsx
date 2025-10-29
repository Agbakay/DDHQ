import React from "react";

const PrivacyPolicy = () => {
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
        <div className="wrapper lg:px-[15%] px-5 py-28">
          <div className="row lg:flex gap-20 justify-start items-start">
            <div className="col basis-[30%] flex flex-col bg-gray-200 mb-10">
              <a
                href="/dispute_resolution_policy"
                className="px-10 py-10 border-b-1 border-gray-50 hover:bg-white cursor-pointer font-semibold"
              >
                Dispute Resolution Policy
              </a>
              <a
                href="/privacy"
                className="px-10 py-10 border-b-1 border-gray-50 bg-brandGreen text-white cursor-pointer font-semibold"
              >
                Privacy Policy
              </a>
              <a
                href="/terms_&_condition"
                className="px-10 py-10 border-b-1 border-gray-50 hover:bg-white cursor-pointer font-semibold"
              >
                Terms of Service
              </a>
            </div>
            <div className="col basis-[75%]">
              <h1 className="mb-5 font-bold lg:text-4xl text-3xl">
                Privacy Policy – DDHQ
              </h1>

              <h2 className="font-semibold text-lg  mb-3">1. Who We Are</h2>
              <p className="mb-5">
                DDHQ is operated globally by DDHQ Technologies LLC, a Delaware,
                U.S. entity, under license from HQ1 Technologies Limited, which
                owns the DDHQ trademark in Nigeria. HQ1 manages local
                operations, partnerships, and vendor relationships in Nigeria.
              </p>
              <p className="mb-3">
                This Privacy Policy explains how we collect, use, share, and
                protect your information.
              </p>
              <h2 className="text-lg font-semibold mb-3">
                2. Information We Collect
              </h2>
              <ul className="list-disc ml-10 mb-3">
                <li>Account Information (Name, Email, Phone)</li>
                <li>Usage Data (Device, IP, Location)</li>
                <li>Payment Data (via Stripe, Paystack, etc.)</li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc ml-10 mb-3">
                <li>To operate and maintain our services</li>
                <li>To communicate with you</li>
                <li>To improve user experience</li>
                <li>To comply with applicable laws</li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">
                4. Sharing of Information
              </h2>
              <p>We do not sell your data. We may share information with:</p>
              <ul className="list-disc ml-10 mb-3">
                <li>Vendors and service providers</li>
                <li>Payment processors (e.g., Stripe, Flutterwave)</li>
                <li>HQ1 Technologies Limited (for Nigerian support)</li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">4(a) </h2>
              <p>
                To request the deletion of your Detty December HQ account and
                associated data, please follow these steps:
              </p>
              <ul className="list-disc ml-10 mb-3">
                <li>
                  <b>Submit a Request:</b> Send an email to{" "}
                  <a
                    href="malto:support@dettydecemberhq.com"
                    className="text-brandGreen hover:text-brandOrange font-semibold capitalize"
                  >
                    support@dettydecemberhq.com
                  </a>
                  Please provide your email address in your request.
                </li>
                <li>
                  <b>Verification:</b> Upon receiving your request, you will
                  receive a verification email.
                </li>
                <li>
                  <b>Deletion Process:</b> After verification, your account and
                  associated data will be permanently deleted from our servers
                  within 24 hours
                </li>
              </ul>
              <h2 className="text-lg font-semibold mb-3">
                5. International Transfers
              </h2>
              <p>
                User data may be transferred between the U.S. and Nigeria in
                line with applicable privacy regulations.
              </p>
              <h2 className="text-lg font-semibold mb-3">6. Your Rights</h2>
              <ul className="list-disc ml-10 mb-3">
                <li>
                  You can request access, correction, or deletion of your data.
                </li>
                <li>Nigerian users may contact HQ1 for local data concerns.</li>
                <li>Global users may contact DDHQ Technologies LLC.</li>
              </ul>

              <h2 className="text-lg font-semibold mb-3">7. Security</h2>
              <p>
                We use encryption, secure databases, and access controls to
                protect your data.
              </p>
              <h2 className="text-lg font-semibold mb-3">8. Changes</h2>
              <p>
                We may update this Privacy Policy periodically. Changes are
                effective when posted.
              </p>
              <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
              <p>For questions, contact:</p>
              <ul className="ml-10 list-disc">
                <li>
                  Global:
                  <a
                    href="mailto:privacy@dettydecemberhq.com"
                    className="text-brandGreen hover:text-brandOrange font-semibold capitalize"
                  >
                    privacy@dettydecemberhq.com
                  </a>
                  <li>
                    Nigeria:{" "}
                    <a
                      href="mailto:data@hq1tech.com"
                      className="text-brandGreen hover:text-brandOrange font-semibold capitalize"
                    >
                      data@hq1tech.com
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
