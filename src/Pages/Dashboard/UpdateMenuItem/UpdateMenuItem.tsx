import { useParams } from "react-router-dom";

const UpdateMenuItem = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>this {id} menu item will be update</h2>
    </div>
  );
};

export default UpdateMenuItem;
