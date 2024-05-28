import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const page = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{ title:"Spanish", imageSrc:"/image/es.svg" }} hearts={5} points={100} hasActiveSubscription={false} />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish" />
                <div className="space-y-4">
                    <div className="">
                        
                    </div>
                </div>
            </FeedWrapper>
        </div>
    );
}

export default page;