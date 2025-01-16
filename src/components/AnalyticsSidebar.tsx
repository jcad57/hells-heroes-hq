export default function AnalyticsSidebar({ currentPost }) {
  return (
    <div className="dashboard-card">
      <h2>Analytics</h2>
      {!currentPost && <i>Select a post to see analytics</i>}
    </div>
  );
}
