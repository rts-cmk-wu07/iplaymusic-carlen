import Heading from "../comp/sub-comp/Heading";
import Tags from "../comp/sub-comp/Tags";

const EventFeed = () => {
  return (
    <div>
      <Heading text="Events Feed" />
      <div className="flex pt-6">
        <Tags tagText="spotify" />
        <Tags tagText="musicworld" />
      </div>
    </div>
  );
};

export default EventFeed;
