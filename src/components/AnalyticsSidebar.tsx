import { CurrentPostProps } from "../types";

export default function AnalyticsSidebar({ currentPost }: CurrentPostProps) {
  return (
    <div className="analytics__wrapper dashboard-card">
      <h2>Analytics</h2>
      {!currentPost && (
        <>
          <i>Select a post to see analytics</i>
        </>
      )}
    </div>
  );
}
