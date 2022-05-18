import { Post } from "../Components/Post";
import { presidents } from "../presidents";

export const Dashboard = () => {
  return (
    <div className="App">
      {presidents.map((president) => (
        <Post data={president} key={president?.name + 1} />
      ))}
    </div>
  );
};
