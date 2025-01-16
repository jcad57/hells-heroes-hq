import { CurrentPostProps } from "../types";
// import icon from "../assets/analytics-icon.png";

export default function AnalyticsSidebar({ currentPost }: CurrentPostProps) {
  return (
    <div className="analytics__wrapper dashboard-card">
      {/* <img className="analytics-icon" src={icon} /> */}
      <h2>Analytics</h2>
      {!currentPost && (
        <>
          <i>Select a post to see analytics</i>
        </>
      )}
    </div>
  );
}
