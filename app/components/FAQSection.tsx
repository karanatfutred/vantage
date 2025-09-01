'use client';
import { SetStateAction, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FAQCategory =
  | 'General'
  | 'Eligibility'
  | 'Application Queries'
  | 'Entrance and Essays'
  | 'Admission Policies';

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('General');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories: { id: FAQCategory; name: string }[] = [
    { id: 'General', name: 'General' },
    { id: 'Eligibility', name: 'Eligibility' },
    { id: 'Application Queries', name: 'Application Queries' },
    { id: 'Entrance and Essays', name: 'Entrance and Essays' },
    { id: 'Admission Policies', name: 'Admission Policies' }
  ];

  const faqs: Record<FAQCategory, FAQ[]> = {
    General: [
      {
        id: 1,
        question: "Does Futred have a cut-off for MU-BAAT?",
        answer: "Futred evaluates candidates holistically. While there isn't a strict cut-off for MU-BAAT, we consider multiple factors including your test performance, academic background, work experience, and overall profile fit."
      },
      {
        id: 2,
        question: "Do you accept GMAT and GMAT Focus Edition scores?",
        answer: "Yes, we accept both GMAT and GMAT Focus Edition scores. Both versions are considered equally valid for admission purposes, and you can submit whichever version you have taken."
      },
      {
        id: 3,
        question: "Is the same reporting policy applicable to both GMAT and GMAT Focus Edition? Will this impact application?",
        answer: "Yes, the same reporting policy applies to both GMAT versions. This will not impact your application negatively. We understand the differences between the two formats and evaluate them accordingly."
      },
      {
        id: 4,
        question: "Are there more details about the MU-BAAT?",
        answer: "MU-BAAT (Futred Business Aptitude Assessment Test) is our proprietary entrance exam designed to evaluate analytical thinking, problem-solving skills, and business acumen. It consists of multiple sections including quantitative reasoning, logical reasoning, and data interpretation."
      }
    ],
    Eligibility: [
      {
        id: 5,
        question: "What are the minimum eligibility criteria for admission?",
        answer: "Candidates must have a bachelor's degree from a recognized university with at least 50% marks. Work experience is preferred but not mandatory for all programs."
      },
      {
        id: 6,
        question: "Can I apply if I'm in my final year of graduation?",
        answer: "Yes, final year students can apply. However, admission will be provisional and confirmed only upon successful completion of your degree."
      }
    ],
    "Application Queries": [
      {
        id: 7,
        question: "What documents are required for the application?",
        answer: "Required documents include academic transcripts, degree certificates, entrance test scores, essays, recommendation letters, and a current resume."
      },
      {
        id: 8,
        question: "Can I edit my application after submission?",
        answer: "Once submitted, applications cannot be edited. Please review all information carefully before final submission."
      }
    ],
    "Entrance and Essays": [
      {
        id: 9,
        question: "How many essays are required?",
        answer: "Typically, 2-3 essays are required covering topics like career goals, leadership experiences, and why you want to join Futred."
      },
      {
        id: 10,
        question: "What is the word limit for essays?",
        answer: "Essay word limits vary by question, typically ranging from 300-500 words each. Specific limits are mentioned for each essay prompt."
      }
    ],
    "Admission Policies": [
      {
        id: 11,
        question: "What is the refund policy for application fees?",
        answer: "Application fees are generally non-refundable. However, in exceptional circumstances, refunds may be considered on a case-by-case basis."
      },
      {
        id: 12,
        question: "Is there a reservation policy?",
        answer: "Futred follows applicable reservation policies as per government guidelines for various categories."
      }
    ]
  };

  const toggleFAQ = (faqId: SetStateAction<number | null>) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="width-full mx-auto px-60 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Frequently Asked<br />
        Questions
      </h1>
      
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1">
          <div className="space-y-4">
            {faqs[activeCategory]?.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-gray-900 font-medium pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}