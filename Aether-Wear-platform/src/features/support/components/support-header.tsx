import SupportCards from "./support-cards";

export default function SupportHeader() {
  return (
    <>
      <div className="support-header">
        <h1>Support Center</h1>
        <p>
          We're here to help! Send us a message and we'll get back to you as
          soon as possible.
        </p>
        <h2>How can we help you?</h2>
        <SupportCards/>
      </div>
    </>
  );
}
