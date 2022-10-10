const TagContainer = ({ tagText }) => {
  return (
    <span className="block py-1 px-2 mr-3 bg-primary-100 text-white  rounded-full">
      #{tagText}
    </span>
  );
};

export default TagContainer;
