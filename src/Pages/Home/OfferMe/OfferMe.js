import React from "react";

const OfferMe = () => {
  return (
    <div className="my-24">
      <h1 className="text-3xl font-bold text-amber-500">What you'll get</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-4">
        <div className="flex my-10 mr-5">
          <img
            className="rounded-lg w-1/2 h-auto mr-3"
            src="https://cdn.images.express.co.uk/img/dynamic/11/590x/Doctor-patient-624211.jpg"
          />
          <div className="mt-2">
            <h3 className="text-xl text-fuchsia-500 mb-2 font-semibold">
              OFFER A SIMPLE SMILE
            </h3>
            <p className="text-justify">
              A smile shows my patients that I am happy to see them.Patients are
              the core of my practice, so express to them that I am very glad
              that they are here. Make them feel welcome and let them know that
              they are appreciated.
            </p>
          </div>
        </div>
        <div className="flex my-10 mr-5">
          <img
            className="rounded-lg w-1/2 h-auto mr-3"
            src="https://cdn.sanity.io/images/0vv8moc6/physpractice/48e7c9e2591e90c0b64cf7a823123f397f34b342-1000x600.png"
          />
          <div className="mt-2">
            <h3 className="text-xl text-fuchsia-500 mb-2 font-semibold">
              BE ON TIME
            </h3>
            <p className="text-justify">
              Most patients will understand an unexpected delay, but they
              appreciate it when you work with them and keep them
              informed.I try to reach my patient on time at any cost. Show my patients I
              respect them and their time by sticking to my schedule.
            </p>
          </div>
        </div>
        <div className="flex my-10 mr-5">
          <img
            className="rounded-lg w-1/2 h-auto mr-3"
            src="https://medcominc.com/wp-content/uploads/2019/12/doctor-patient-interview.jpg"
          />
          <div className="mt-2">
            <h3 className="text-xl text-fuchsia-500 mb-2 font-semibold">
              ADDRESS PATIENTS BY NAME
            </h3>
            <p className="text-justify">
              I always call my patient by his name.I think that making a small effort to remember patients and call them by name
              will make them feel important and acknowledged. This little detail
              makes patients feel appreciated and helps my practice build
              meaningful connections and relationships.
            </p>
          </div>
        </div>
        <div className="flex my-10 mr-5">
          <img
            className="rounded-lg w-1/2 h-auto mr-3"
            src="https://excelmg.excel-medical.com/1664595686793.jpg"
          />
          <div className="mt-2">
            <h3 className="text-xl text-fuchsia-500 mb-2 font-semibold">
              MAKE SOME TIME FOR SMALL TALK
            </h3>
            <p className="text-justify">
              Even though it’s crucial to be on time, it is also essential to
              make sure patients don’t feel rushed.Take the time to chat with
              your patients and make them feel heard. If they have questions or
              are confused about the diagnosis or their health,I actively listen to take a minute and try to answer their questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferMe;
