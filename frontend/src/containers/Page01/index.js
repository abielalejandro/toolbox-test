import { useDispatch, useSelector } from "react-redux";
import FormData from "../Form/FormData";
import ItemResultList from "../ItemResultList/ItemResultList";
import { getTextData } from "../../redux/actions";

const Page01 = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);
  const onSubmit = (data) => {
    dispatch(getTextData(data));
  };

  return (
    <>
      <FormData onSubmitForm={onSubmit} />
      <ItemResultList items={items} />
    </>
  );
};

export default Page01;
