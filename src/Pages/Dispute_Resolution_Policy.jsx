import React from "react";

const Dispute_Resolution_Policy = () => {
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
            <div className="col basis-[50%] flex flex-col bg-gray-200 mb-10">
              <a
                href="/dispute_resolution_policy"
                className="px-10 py-10 border-b-1 border-gray-50 text-white bg-brandGreen cursor-pointer font-semibold"
              >
                Dispute Resolution Policy
              </a>
              <a
                href="/privacy"
                className="px-10 py-10 border-b-1 border-gray-50  text-black cursor-pointer font-semibold"
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
            <div className="col">
              <h1 className="mb-5 font-bold lg:text-4xl text-3xl">
                Dispute Resolution Policy & Framework
              </h1>
              <h2 className="font-semibold text-md mb-5">
                Effective Date: 03/01/25
              </h2>
              <h3 className="font-semibold mb-3">1. Introduction</h3>
              <p className="mb-4">
                At DDHQ, we are committed to ensuring a fair, transparent, and
                efficient dispute resolution process for both our partners and
                users. This policy outlines our structured dispute resolution
                process to protect all parties and maintain trust within the
                DDHQ ecosystem.
              </p>

              <h3 className="font-semibold mb-2 text-lg">
                2. General Principles
              </h3>
              <p>
                All disputes will be resolved based on the following
                principles:Fairness: Both parties have an equal opportunity to
                present their case
              </p>
              <ul className="list-disc mb-3 ml-10">
                <li>
                  Transparency: Clear policies and procedures will govern every
                  dispute.
                </li>
                <li>
                  Efficiency: Quick resolution to prevent delays in service or
                  financial losses.
                </li>
                <li>
                  Accountability: Continuous monitoring to improve the dispute
                  resolution process.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">
                3. Dispute Categories
              </h3>
              <p className="mb-3">
                Disputes may arise from different interactions on DDHQ. Below
                are the major categories:
              </p>
              <h2 className="mb-3 text-lg font-semibold">
                A. User vs. Partner Disputes
              </h2>
              <ul className="list-disc mb-3 ml-10">
                <li>
                  Non-Delivery of Service: The Partner fails to fulfill the
                  booking.
                </li>
                <li>
                  Substandard Service: The Partner provides a service that does
                  not match what was promised
                </li>
                <li>
                  Overcharging or Hidden Fees: The final charge is higher than
                  the agreed-upon price.
                </li>
                <li>
                  Refund Requests & Cancellations: User requests a refund due to
                  a valid reason
                </li>
              </ul>
              <h2 className="mb-3 text-lg font-semibold">
                B. Partner vs. User Disputes
              </h2>
              <ul className="list-disc mb-3 ml-10">
                <li>
                  Last-Minute Cancellations: Users cancel without valid reasons,
                  causing Partners financial loss.
                </li>
                <li>
                  Payment Issues: Payment delays or unauthorized chargebacks.
                </li>
                <li>
                  Abusive Behavior: Users harassing Partners, causing
                  operational challenges.
                </li>
              </ul>
              <h2 className="mb-3 text-lg font-semibold">
                C. Partner vs. DDHQ
              </h2>
              <ul className="list-disc mb-3 ml-10">
                <li>
                  Commission Disputes: Disagreements over platform fees or
                  deductions.
                </li>
                <li>
                  Account Suspension/Removal: Partners who feel they were
                  unfairly removed.
                </li>
              </ul>
              <h2 className="mb-3 text-lg font-semibold">D. User vs. DDHQ</h2>
              <ul className="list-disc ml-10 mb-3">
                <li>
                  Refund Delays: Users experiencing delays in refund processing.
                </li>
                <li>
                  Platform Access Issues: Technical errors preventing a smooth
                  booking process.
                </li>
              </ul>
              <h2 className="mb-3 text-lg font-semibold">
                Dispute Resolution Process
              </h2>
              <p className="mb-3">
                All disputes follow a three-tier resolution process:
              </p>
              <h2 className="mb-3">
                <b>Tier 1: Direct Resolution (Self-Service) [24-48 Hours]</b>
              </h2>
              <p className="mb-3">
                Encouraged First Step: Users and Partners should first attempt
                to resolve issues directly via DDHQ’s built-in messaging system.
              </p>
              <ul className="mb-3 ml-10 list-disc">
                <li>Partners must respond within 24 hours.</li>
                <li>
                  If both parties agree, the matter is resolved without
                  escalatio
                </li>
                <li>
                  <b>Outcome</b>
                  <p>
                    Resolution is documented, and both parties provide feedback
                  </p>
                  <p>If unresolved, the issue moves to Tier 2.</p>
                </li>
              </ul>
              <p className="mb-3">
                <b>Tier 2: DDHQ Mediation & Support Team [3-5 Business Days]</b>
              </p>
              <p className="mb-2">
                If direct resolution fails, either party can escalate the
                dispute to DDHQ’s Mediation Team.
              </p>
              <p>
                <b>Process:</b>
              </p>
              <ul className="list-disc mb-3 ml-10">
                <li>
                  Submit a Dispute Ticket via the DDHQ platform (including
                  screenshots, contracts, and communication records).
                </li>
                <li>
                  DDHQ Mediation Team Reviews the Case within 3-5 business days.
                </li>
                <li>
                  Proposed Resolution: The team provides a fair and binding
                  recommendation.
                </li>
                <li>
                  <b>Possible Outcomes:</b>
                  <p>
                    1. Full refund, partial refund, or credit for future
                    bookings.
                  </p>
                  <p>
                    2. Compensation for the Partner if user cancellation was
                    unfair.
                  </p>
                  <p>3. Account suspension for rule violations.</p>
                  <p>4. No action if the complaint is invalid.</p>
                  <p>
                    5. If either party is unsatisfied, the case moves to Tier 3
                  </p>
                </li>
              </ul>
              <p className="mb-3">
                <b>Tier 3: Arbitration & Final Decision [7-14 Business Days]</b>
              </p>
              <p>
                For serious or complex disputes, DDHQ offers third-party
                arbitration:
              </p>
              <ul className="ml-10 mb-3 list-disc">
                <li>
                  Independent Arbitrator Assigned: A neutral arbitrator
                  evaluates both sides
                </li>
                <li>
                  Final Decision Made: The decision is binding and cannot be
                  contested further.
                </li>
                <li>
                  Legal Recourse: If necessary, the case may be referred to
                  legal authorities.
                </li>
                <li>
                  <b>Possible Outcomes:</b>
                  <p>1. Final compensation decisions for users/Partners.</p>
                  <p>
                    2. Legal action initiated for fraud or serious misconduct.
                  </p>
                </li>
              </ul>

              <h2 className="mb-3 font-semibold text-lg">
                4. Financial Protection & Payout Disputes
              </h2>
              <ul className="ml-10 mb-3 list-disc">
                <li>Refund & Chargeback Protection</li>
                <li>
                  Partners will not be charged back unless the dispute is
                  validated.
                </li>
                <li>
                  Users may be refunded only if DDHQ confirms a service failure.
                </li>
                <li>Escrow-Based Payments (For High-Value Bookings)</li>
                <li>
                  For large transactions, DDHQ holds funds in escrow until
                  service completion
                </li>
                <li>Protects both parties from fraud and non-payment risks.</li>
                <li>If a dispute arises, funds are frozen until resolved.</li>
              </ul>
              <h2 className="mb-3 font-semibold text-lg">
                5. Violations & Consequences
              </h2>
              <h2 className="mb-3 font-semibold text-lg">
                6. Dispute Prevention Best Practices
              </h2>
              <p>
                <b>For Partners:</b>
              </p>
              <ul className="mb-3 ml-10 list-disc mt-3">
                <li>Set clear service descriptions and pricing.</li>
                <li>Respond to disputes quickly and professionally.</li>
                <li>
                  Use <b>DDHQ’s</b> messaging system for communication to keep
                  records
                </li>
              </ul>
              <p>
                <b>For Users:</b>
              </p>
              <ul className="mb-3 ml-10 list-disc mt-3">
                <li>Read Partner descriptions carefully before booking.</li>
                <li>Communicate concerns immediately if an issue arises.</li>
                <li>Avoid last-minute cancellations unless necessary.</li>
              </ul>
              <h2 className="mb-3 text-lg font-semibold">
                7. Contact DDHQ Support
              </h2>
              <p className="mb-2">
                Contact <b>DDHQ Support</b> For dispute-related inquiries,
                contact:
              </p>
              <ul className="list-disc ml-10">
                <li>
                  <a
                    href="mailto:support@dettydecemberhq.com"
                    className="text-brandGreen hover:text-brandOrange"
                  >
                    Email: support@dettydecemberhq.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+234-704-519-4024"
                    className="text-brandGreen hover:text-brandOrange"
                  >
                    {" "}
                    Phone: +234-704-519-4024
                  </a>
                </li>
                <li>Chat: Available 24/7 on the DDHQ app.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispute_Resolution_Policy;
