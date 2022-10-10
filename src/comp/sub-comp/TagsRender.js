import Tag from "./Tag";
import TagContainer from "./TagContainer";
const TagsRender = ({ tagText, containerTag }) => {
  return (
    <div>
      {containerTag ? (
        <TagContainer tagText={tagText} />
      ) : (
        <Tag tagText={tagText} />
      )}
    </div>
  );
};

export default TagsRender;
