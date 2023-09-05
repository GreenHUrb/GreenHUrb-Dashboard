import BackButton from "../../../components/BackButton/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";
import FaqItem from "../components/FaqItem/FaqItem";
// import "../styles/settings_styles.scss";

const faqLists = [
  {
    title: "What if I face technical issues on the dashboard?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
  {
    title: "How do i become a vendor",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
  {
    title: "What if I face technical issues on the dashboard?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
  {
    title: "How do i become a vendor",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
  {
    title: "What if I face technical issues on the dashboard?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
  {
    title: "How do i become a vendor",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos voluptatibus non quo quod harum placeat. Perferendis tenetur blanditiis assumenda!"
  },
];



export const Faq = () => {
  return (
    <main className="settings_faq animate__animated animate__fadeIn">
      <BackButton locationName="Back to Settings" locationRoute={AllRouteConstants.settings.index} />

      <div>
        <div>
          <h3>Frequently Asked Questions</h3>
          <p className="settings_faq_title">
            Get quick and convenient answers to frequent questions
          </p>
        </div>

        <div className="settings_faq_container">
          {faqLists.map((list, index) => (
            <FaqItem key={index} list={list} />

          ))}
        </div>
      </div>
    </main>
  );
};
