import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-12 mx-6 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="w-full md:w-10/12 mx-auto">
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-1"
            checked={activeIndex === 0}
            onChange={() => toggleAccordion(0)}
          />
          <div className="collapse-title text-xl font-medium">
            Can I schedule an appointment online?
          </div>
          {activeIndex === 0 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                Yes, you can schedule an appointment online by visiting our
                website and selecting the 'Book Appointment' option. Follow the
                instructions to choose a convenient date and time for your
                visit.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-2"
            checked={activeIndex === 1}
            onChange={() => toggleAccordion(1)}
          />
          <div className="collapse-title text-xl font-medium">
            What insurance plans do you accept?
          </div>
          {activeIndex === 1 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                We accept a wide range of insurance plans. Please contact our
                office or check our website for a list of accepted insurance
                providers. Our staff can also assist you in verifying your
                coverage.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-3"
            checked={activeIndex === 2}
            onChange={() => toggleAccordion(2)}
          />
          <div className="collapse-title text-xl font-medium">
            How often should I have an eye exam?
          </div>
          {activeIndex === 2 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                It is generally recommended to have an eye exam once a year,
                especially if you wear glasses or contact lenses. Regular eye
                exams help detect any changes in your vision and ensure early
                detection of any eye health issues.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-3"
            checked={activeIndex === 3}
            onChange={() => toggleAccordion(3)}
          />
          <div className="collapse-title text-xl font-medium">
            Do you provide pediatric eye care services?
          </div>
          {activeIndex === 3 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                Yes, we offer comprehensive eye care services for children of
                all ages. Our experienced optometrists are trained to perform
                eye exams for children and address any vision-related concerns.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-3"
            checked={activeIndex === 4}
            onChange={() => toggleAccordion(4)}
          />
          <div className="collapse-title text-xl font-medium">
            What should I bring to my eye appointment?
          </div>
          {activeIndex === 4 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                When coming for your eye appointment, please remember to bring
                your insurance card, a list of medications you are currently
                taking, any previous eye exam records, and your current
                eyeglasses or contact lenses.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2 rounded-xl">
          <input
            type="checkbox"
            id="accordion-3"
            checked={activeIndex === 5}
            onChange={() => toggleAccordion(5)}
          />
          <div className="collapse-title text-xl font-medium">
            How long does an eye exam typically take?
          </div>
          {activeIndex === 5 && (
            <div className="collapse-content">
              <p className="text-[17px]">
                The duration of an eye exam can vary depending on the complexity
                of the examination and individual circumstances. On average, an
                eye exam may take approximately 30 minutes to an hour. However,
                it's best to allocate some extra time in case additional tests
                or discussions are required.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
