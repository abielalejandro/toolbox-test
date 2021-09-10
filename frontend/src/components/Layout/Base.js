import MainNav from "./MainNav";
import Wrapper from "./Wrapper";

const Base = (props) => {
  return (
    <>
      <MainNav />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
};

export default Base;
