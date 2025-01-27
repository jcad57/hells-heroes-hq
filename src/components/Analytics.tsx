import { AnalyticsProps } from "../data/types";

export default function AnalyticsSidebar({ currentPost }: AnalyticsProps) {
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
