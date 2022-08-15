import { Avatar, Image } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { chooseFiles } from '../../store/reducers/filesSlice';
import { fileToDataUrl } from '../../utils/fileToDataUrl';

export const UserAvatar: React.FC = () => {
  const { files } = useAppSelector((state) => state.filesReducer);
  const dispatch = useAppDispatch();

  const changeHandler = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const base64 = await fileToDataUrl(evt.target.files[0]);
      dispatch(chooseFiles(base64));
    }
  };

  return (
    <>
      {files.length
        ? files.map((img, i) => (
            <Avatar
              key={i}
              src={<Image src={img} />}
              shape='square'
              size={200}
            />
          ))
        : null}

      <input type='file' onChange={changeHandler} />
    </>
  );
};
