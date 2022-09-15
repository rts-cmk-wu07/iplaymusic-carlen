import Event from "../comp/Event";
import Heading from "../comp/sub-comp/Heading";
import TagsRender from "../comp/sub-comp/TagsRender";

const EventFeed = () => {
  return (
    <div>
      <Heading text="Events Feed" />
      <div className="flex pt-6">
        <TagsRender containerTag={true} tagText="spotify" />
        <TagsRender containerTag={true} tagText="musicworld" />
      </div>
      <Event />
    </div>
  );
};

export default EventFeed;
