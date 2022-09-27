import { userModel } from "@entities/User";
import { useData } from "@shared/helpers/hooks/useData";
import useLocalStorage from "@shared/helpers/hooks/useLocalStore";
import Spinner from "@shared/ui/Spinner";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const PrivatePage: React.FC<Props> = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const [status, setStatus] = useLocalStorage("status", null);

  useEffect(() => {
    dispatch(userModel.actions.getUserById(null));
  }, [dispatch]);

  const userResponse = useSelector(
    (state: { user: userModel.slices.UserState }) => state.user
  );

  useEffect(() => {
    if (status === null) {
      if (userResponse.entity !== null) {
        const fetchData = async () => {
          const req = await userModel.requests.getUserRequestStateByUserId(
            userResponse.entity.id
          );
          setStatus(req.data.status);
          setLoading(false);
        };
        fetchData();
      }
    }
  }, [userResponse.entity, status]);

  if (status === null) {
    return <Spinner />;
  }
  return status === true ? children : <Navigate to="/komus_poll/start" />;
};

export { PrivatePage };
