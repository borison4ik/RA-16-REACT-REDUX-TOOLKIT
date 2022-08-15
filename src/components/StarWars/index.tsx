import { Divider, Input, List, Typography } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { inputNumber } from '../../store/reducers/countSlice';

const { Title, Text } = Typography;

export const StarWars: React.FC = () => {
  const { value } = useAppSelector((state) => state.countReducer);
  const dispatch = useAppDispatch();

  const facts = [
    'Прообразом Чубакки стал пес режиссера.',
    'Актерам разрешили подобрать любимый цвет для своих световых мечей.',
    'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
    'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок',
  ];

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputNumber(+evt.target.value));
  };

  return (
    <>
      <Title level={5}>
        <Text>How many facts do you want to know?</Text>
      </Title>
      <Input
        type='number'
        min={0}
        max={5}
        maxLength={1}
        placeholder='enter a number from 1 to 5'
        onChange={onChangeHandler}
      />
      <Divider orientation='left'>StarWars facts</Divider>
      <List
        className='white-bg'
        bordered
        dataSource={facts.slice(0, value)}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
};
