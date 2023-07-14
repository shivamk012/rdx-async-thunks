import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { fetchUser } from "../store/index";

export default function UserList() {
  const dispatch = useDispatch();

  const {loading , data , error} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  } , []);

  return (
    <div>
      data - {data}
      loading - {loading}
      error - {error}
    </div>
  )
}