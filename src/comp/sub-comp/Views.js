/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Views = () => {
  const styles = {
    images: css`
      &:nth-of-type(2) {
        margin-left: -20px;
      }
      &:nth-of-type(3) {
        margin-left: -20px;
      }
    `,
  };
  const views = [
    { id: 1, name: "Alice", images: "http://placekitten.com/50/50" },
    { id: 2, name: "Bob", images: "http://placekitten.com/50/50" },
    { id: 3, name: "Carl", images: "http://placekitten.com/50/50" },
    { id: 4, name: "Delilah", images: "http://placekitten.com/50/50" },
    { id: 5, name: "Ethan", images: "http://placekitten.com/50/50" },
  ];
  return (
    <div className="flex items-center">
      {views.slice(0, 3).map((view, index) => {
        return (
          <img
            css={styles.images}
            className="rounded-full"
            key={index}
            src={view.images}
            alt={view.name}
          />
        );
      })}
      <p>Nogle views</p>
    </div>
  );
};

export default Views;
