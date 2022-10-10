import TagsRender from "./sub-comp/TagsRender";
import Views from "./sub-comp/Views";

const Event = () => {
  const tagsAry = [
    { id: 1, name: "spotify" },
    { id: 2, name: "blues" },
    { id: 3, name: "jazz" },
    { id: 4, name: "spotify" },
    { id: 5, name: "spotify" },
  ];
  return (
    <article className="rounded-lg bg-primary-300 text-white">
      <img
        className="rounded-t-lg mt-5"
        src="http://placekitten.com/351/200"
        alt=""
      />
      <div className="p-5">
        <div>
          {tagsAry &&
            tagsAry.map((tag, index) => {
              <TagsRender
                key={index}
                containerTag={false}
                tagText={tag.name}
              />;
            })}
        </div>
        <Views />
        <h2>NOget med noget inde i</h2>
      </div>
    </article>
  );
};

export default Event;
