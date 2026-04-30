import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HereToHelp from "@/components/HereToHelp";

// ─── Per-service rich content ────────────────────────────────────────────────

type ServiceContent = {
  pageTitle: string;
  intro: string;
  sections: { heading?: string; description?: string; body: string | string[] }[];
  whyTitle?: string;
  whySubtitle?: string;
  whyCards: { title: string; body: string }[];
};

const serviceContent: Record<string, ServiceContent> = {
  "audit-and-assurance": {
    pageTitle: "What is an Audit & Assurance Service?",
    intro:
      "An audit & assurance service provides an independent assessment of your organization's financial statements. Our qualified Chartered Accountants (CAs) meticulously examine your records to ensure they accurately reflect your financial position and performance. This independent verification builds trust with stakeholders, including investors, creditors, lenders, and regulators.",
    sections: [
      {
        heading: "Benefits of Audit & Assurance Services",
        body: [
          "Enhanced Credibility: Independent verification of your financial statements by a reputable CA firm strengthens your credibility and builds trust with stakeholders.",
          "Risk Mitigation: Our in-depth review helps identify and address potential financial reporting errors or internal control weaknesses.",
          "Improved Decision Making: Gain valuable insights through our analysis, enabling you to make informed financial decisions with greater confidence.",
          "Compliance Support: We ensure your financial reporting adheres to relevant accounting standards and regulations.",
        ],
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Audit & Assurance Services?",
    whySubtitle:
      "We understand the unique needs of businesses and offer a personalized approach",
    whyCards: [
      {
        title: "Experienced & Qualified Team ",
        body: "Our team comprises highly skilled and experienced CAs, committed to providing exceptional service.",
      },
      {
        title: "Industry Expertise",
        body: "We possess in-depth knowledge of various industries, ensuring a tailored audit approach that meets your specific needs.",
      },
      {
        title: "Technology-Driven Approach",
        body: "We leverage cutting-edge technology to streamline the audit process and enhance efficiency.",
      },
      {
        title: "Clear Communication",
        body: "We believe in clear and transparent communication, keeping you informed throughout the entire audit engagement.",
      },
    ],
  },

  "Business-Consultancy-and-Advisory": {
    pageTitle: "Leveraging Deep Expertise & Objective Insights",
    intro:
      "MRNP & CO LLP's team of experienced consultants brings a unique perspective to your business. Combining in-depth financial knowledge with strategic thinking, we provide valuable insights often overlooked by internal teams. Our experience as auditors for various companies allows us to identify areas for improvement and offer actionable recommendations that enhance your bottom line.",
    sections: [
      {
        heading: "Our Business Consultancy & Advisory Services",
        body: [
          "Accounting Advisory: Gain expert guidance on complex accounting issues, ensuring compliance and optimizing your financial performance.",
          "India Entry Strategy & Incubation Support: Navigate the intricacies of establishing a business in India with our comprehensive support, from market research to legal and regulatory compliance.",
          "Start-up & Business Growth Strategies: Develop a winning roadmap for your new venture or propel your existing business forward with our strategic planning and execution expertise.",
          "Government Incentives & Grant Assistance: Identify and leverage government schemes and grants that can significantly reduce your operational costs and fuel your growth.",
          "Operational Efficiency & Process Improvement: Streamline your internal processes and workflows to boost efficiency, reduce waste, and unlock greater profitability.",
          "Risk Management & Internal Controls: Implement robust risk management frameworks and internal controls to mitigate risks and safeguard your business assets.",
        ],
      },
      {
        heading: "A Collaborative Approach to Success",
        body: "We believe in fostering a collaborative partnership with our clients. Through open communication and a deep understanding of your unique business goals, we tailor our services to address your specific needs. Our approach is designed to empower your team with the knowledge and tools needed to achieve sustainable growth.",
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Business Consultancy & Advisory?",
    whySubtitle:
      "Unlocking Your Growth Potential with MRNP & CO LLP",
    whyCards: [
      {
        title: "Holistic Expertise",
        body: "We offer a comprehensive suite of business advisory services, eliminating the need for multiple advisors.",
      },
      {
        title: "Objectivity & Fresh Perspective",
        body: "Our external viewpoint provides unbiased insights that internal teams may miss.",
      },
      {
        title: "Proven Track Record",
        body: "Our experience with diverse industries ensures we can develop solutions tailored to your specific challenges.",
      },
      {
        title: "Client-Centric Approach",
        body: "We prioritize building long-term partnerships and fostering your success.",
      },
    ],
  },

  "Changes-in-Accounting-Standards-and-Legislations": {
    pageTitle: "Why are Changes in Accounting Standards & Legislations Important?",
    intro:
      "Accounting standards and regulations are crucial for ensuring transparency, consistency, and reliability in financial reporting. Changes to these standards can significantly impact how companies record, measure, and report financial information. It's essential to be aware of upcoming changes to maintain compliance and accurately represent your financial health.",
    sections: [
      {
        heading: "How Can MRNP & CO LLP Help?",
        body: [
          "Staying Informed: We continuously monitor proposed changes from regulatory bodies like the Financial Accounting Standards Board (FASB) and the Securities and Exchange Commission (SEC).",
          "Proactive Communication: We translate complex changes into clear and actionable insights, keeping you apprised of upcoming legislative and regulatory shifts.",
          "Internal Requirements Assessment: We help identify the internal adjustments needed within your organization to adapt to new standards.",
          "Impact Analysis: We assess the potential impact of upcoming changes on your financial statements and overall operations.",
        ],
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Changes in Accounting Standards & Legislations?",
    whySubtitle: "We understand the unique needs of businesses and offer a personalized approach",
    whyCards: [
      { title: "Proactive Monitoring", body: "We continuously track proposed changes from all major regulatory bodies so you are never caught off-guard." },
      { title: "Clear Communication", body: "We translate complex regulatory language into actionable insights your team can act on immediately." },
      { title: "Internal Assessment", body: "We identify the adjustments your organization needs to adapt seamlessly to new standards." },
      { title: "Impact Analysis", body: "We assess how upcoming changes affect your financial statements and overall business operations." },
    ],
  },

  "Governance-and-Risk-Management": {
    pageTitle: "What is Governance & Risk Management (GRC)?",
    intro:
      "GRC is a holistic approach that integrates three key elements:",
    sections: [
      {
        body: [
          "Governance: The framework of rules, processes, and structures that guide an organization's decision-making and operations.",
          "Risk Management: Identifying, analyzing, and mitigating potential threats that could hinder your business objectives.",
          "Compliance: Ensuring your organization adheres to all relevant laws, regulations, and industry standards.",
        ],
      },
      {
        heading: "Why is GRC Important for Your Business?",
        body: [
          "Enhanced Transparency and Accountability: Clear policies and procedures foster trust within your organization and with external stakeholders.",
          "Improved Decision-Making: By proactively identifying and managing risks, you can make well-informed decisions that drive growth.",
          "Reduced Operational Disruptions: Proactive risk mitigation helps prevent operational hiccups and ensures business continuity.",
          "Minimized Legal and Regulatory Issues: Maintaining compliance reduces the risk of hefty fines and reputational damage.",
        ],
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Governance & Risk Management?",
    whySubtitle: "We understand the unique needs of businesses and offer a personalized approach",
    whyCards: [
      { title: "Customized GRC Framework", body: "We tailor our GRC solutions to your specific industry, size, and unique risk profile." },
      { title: "Concurrent Investigative Audits", body: "Our concurrent approach ensures real-time feedback on policy adherence and operational effectiveness." },
      { title: "Ongoing Support", body: "Our dedicated team stays updated on regulatory changes and provides continuous guidance." },
      { title: "Value-Added Services", body: "We go beyond traditional audits with operational manual preparation, financial impact assessment, and compliance updates." },
    ],
  },

  "management-recommendations": {
    pageTitle: "Our Approach to Management Recommendations",
    intro:
      "Our meticulous audit process incorporates a thorough evaluation of your internal controls and a close examination of your accounting policies, all aligned with your specific management requirements. This in-depth analysis allows us to deliver insightful recommendations that address:",
    sections: [
      {
        body: [
          "Internal Control Optimization: We identify areas where your internal controls can be strengthened, mitigating operational risks and safeguarding your assets.",
          "Enhanced Operating Efficiencies: We unveil opportunities to streamline processes, improve efficiency, and maximize your bottom line.",
        ],
      },
      {
        heading: "Beyond the Audit: Technical Expertise at Your Service",
        description:
          "In addition to our comprehensive audit report, we provide invaluable technical advice designed to elevate your financial reporting. Our expert team guides you in achieving:",
        body: [
          "Compelling Financial Statement Presentation: Clear and concise financial statements that effectively communicate your company's financial health to stakeholders.",
          "Informative Note Disclosures: Detailed and transparent disclosures that provide a deeper understanding of your financial position and performance.",
        ],
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Management Recommendations?",
    whySubtitle: "We understand the unique needs of businesses and offer a personalized approach",
    whyCards: [
      { title: "In-Depth Audit Process", body: "Our meticulous process incorporates thorough evaluation of internal controls aligned with your specific management requirements." },
      { title: "Internal Control Optimization", body: "We identify areas to strengthen controls, mitigating risks and safeguarding your business assets." },
      { title: "Enhanced Efficiencies", body: "We unveil opportunities to streamline your processes and maximize your bottom line." },
      { title: "Technical Financial Expertise", body: "Expert guidance on financial statement presentation and transparent note disclosures for all stakeholders." },
    ],
  },

  "Tax-Consultancy": {
    pageTitle: "Comprehensive Tax Services",
    intro:
      "The Indian tax environment presents a complex web of regulations that are constantly evolving. At MRNP & CO LLP, a premier tax consultancy firm headquartered in Vadodara, India, we understand the challenges individuals and businesses face in maximizing their tax efficiency. Our team of highly qualified and experienced tax professionals is dedicated to empowering you with the knowledge and strategies you need to make informed financial decisions.",
    sections: [
      {
        heading: "Comprehensive  Tax Services",
        body: [
          "Corporate Tax: Our team possesses a deep understanding of corporate tax regulations, ensuring your business remains compliant while minimizing its tax burden. We assist with tax planning, preparation, and filing, keeping you informed of any relevant changes.",
          "International Tax: Expanding your operations internationally introduces a new layer of tax complexity. Our team offers strategic tax planning for international businesses, navigating the intricacies of cross-border transactions, transfer pricing, and foreign tax credits. We help you navigate the nuances of international tax law to ensure your global operations are tax-efficient.",
          "Transfer Pricing: Transfer pricing involves the valuation of goods and services traded between related entities in different countries. Our specialists ensure your policies comply with international tax regulations,mitigating risks associated with non-compliance and maximizing your tax efficiency on a global scale.",
          "Expatriate Tax: Moving to a new country can be challenging, and tax compliance can be a major source of stress. We guide expatriates through the complexities of Indian tax laws, ensuring a smooth transition and proper tax compliance. We help you understand your tax obligations and ensure you are filing all necessary returns accurately and on time.",
          "Indirect Tax: Indirect taxes, such as the Goods and Services Tax (GST), can significantly impact your business operations. Our experts handle all aspects of indirect taxes, minimizing your indirect tax burden through strategic planning and ensuring accurate filing.",
        ],
      },
    ],
    whyTitle: "Why Choose MRNP & CO LLP for Tax Consultancy?",
    whySubtitle: "Our expertise ensures you achieve maximum tax efficiency",
    whyCards: [
      { title: "Adept Professionals", body: "Our team comprises highly qualified Chartered Accountants and tax consultants who stay abreast of the latest tax laws and regulations. We are passionate about helping our clients achieve their financial goals." },
      { title: "Tailored Solutions", body: "We understand that every client has unique financial circumstances. We take the time to understand your specific needs and tailor our services to deliver the most effective solutions." },
      { title: "Cost-Effective Approach", body: "We offer competitive fees and work diligently to minimize your tax liability. You can be confident that you are receiving exceptional value for your investment." },
      { title: "Client-Centric Focus", body: "We are committed to providing exceptional client service, building long-term relationships based on trust, open communication, and a genuine desire to see you succeed." },
    ],
  },
};

// Default content for services without custom rich content
function getDefaultContent(title: string): ServiceContent {
  return {
    pageTitle: title,
    intro: "",
    sections: [],
    whyTitle: `Why Choose MRNP & CO LLP for ${title}?`,
    whySubtitle: "We understand the unique needs of businesses and offer a personalized approach",
    whyCards: [
      { title: "Expert Team", body: "Highly skilled professionals committed to delivering exceptional results." },
      { title: "Industry Knowledge", body: "Deep expertise across a wide range of industries and business sectors." },
      { title: "Modern Approach", body: "Leveraging the latest tools and methodologies for efficient, accurate service." },
      { title: "Client-First Focus", body: "Personalized solutions and transparent communication at every step." },
    ],
  };
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const content = serviceContent[service.slug] ?? getDefaultContent(service.title);

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-primaryBlue pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl">
            <h1 className="font-forum text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] text-white leading-tight mb-3 md:mb-5">
              {service.title}
            </h1>
            <p className="font-instrument text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="mt-20 pb-16 md:pb-20 lg:pb-24 flex-grow">
        <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-3">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <nav className="border border-gray-300">
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`block px-6 py-5 font-instrument text-lg md:text-xl transition-colors border-b border-gray-300 last:border-b-0 ${s.slug === service.slug
                        ? "bg-primaryBlue text-white"
                        : "bg-white text-primaryBlue hover:bg-gray-50"
                        }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-3 lg:pl-6 xl:pl-12">
              {/* Page title */}
              <h2 className="font-forum text-3xl md:text-4xl lg:text-5xl text-[#061143] mb-6 leading-tight">
                {content.pageTitle}
              </h2>

              {/* Intro */}
              {content.intro && (
                <p className="font-instrument text-[#191919] text-base md:text-lg leading-relaxed mb-8">
                  {content.intro}
                </p>
              )}

              {/* Banner image */}
              <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                  priority
                />
              </div>

              {/* Sections */}
              {content.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  {section.heading && (
                    <h3 className="font-forum text-2xl md:text-3xl text-[#061143] mb-5">
                      {section.heading}
                    </h3>
                  )}
                  {section.description && (
                    <p className="font-instrument text-[#191919] text-base md:text-lg leading-relaxed mb-4">
                      {section.description}
                    </p>
                  )}
                  {Array.isArray(section.body) ? (
                    <ul className="space-y-3 pl-6 list-disc marker:text-black font-instrument text-[#191919] text-base md:text-lg leading-relaxed">
                      {section.body.map((item, j) => {
                        const colonIdx = item.indexOf(":");
                        const bold = colonIdx > -1 ? item.substring(0, colonIdx) : null;
                        const rest = colonIdx > -1 ? item.substring(colonIdx + 1).trim() : item;
                        return (
                          <li key={j}>
                            {bold && <strong>{bold}:</strong>} {rest}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="font-instrument text-[#191919] text-base md:text-lg leading-relaxed">
                      {section.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE MRNP ── */}
      <section className="bg-[#F5F5F0] py-10 md:py-14 lg:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center space-y-10">
          <div className="text-center lg:max-w-[80%] flex flex-col items-center space-y-3">
            <p className="font-forum text-primaryBlue text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] leading-tight text-center">
              {content.whyTitle}
            </p>
            {content.whySubtitle && (
              <p className="font-instrument text-sm md:text-xl lg:text-2xl font-medium text-[#191919] md:max-w-[80%] lg:max-w-[60%] text-center">
                {content.whySubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {content.whyCards.map((card, i) => (
              <div key={i} className="bg-white p-6 shadow-sm">
                <h4 className="font-forum text-2xl text-primaryBlue mb-3">{card.title}</h4>
                <p className="font-instrument text-[#191919] text-sm md:text-base leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HereToHelp />
      <Footer />
    </main>
  );
}
