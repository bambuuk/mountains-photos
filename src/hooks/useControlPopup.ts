import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMountainsListQuery,
  useUpdateMountainMutation,
} from "../api/apiSlice";
import { IData } from "../types/IData";

const useControlPopup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(Boolean(id));
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { data: mountainsList = [] } = useGetMountainsListQuery("");
  const [updateMountain] = useUpdateMountainMutation();

  const photoItem = mountainsList?.filter((item: IData) => item.id === id)[0];

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsActiveModal(false);
      setTimeout(() => {
        navigate("/");
      }, 400);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedMountainObj = {
      ...photoItem,
      comments: [
        ...photoItem.comments,
        {
          date: `${new Date().toLocaleDateString()}`,
          name: name.trim(),
          text: comment.trim(),
        },
      ],
    };
    updateMountain(updatedMountainObj).unwrap();
    setName("");
    setComment("");
  };

  useEffect(() => {
    setIsActiveModal(true);
  }, []);

  return {
    photoItem,
    isActiveModal,
    onClosePopup,
    onSubmit,
    name,
    comment,
    setName,
    setComment,
  };
};

export default useControlPopup;
