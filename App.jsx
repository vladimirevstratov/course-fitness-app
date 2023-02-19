import React, {useState} from 'react';
import Activity from './src/screens/activity/activity';
import AddActivity from './src/screens/add-activity/add-activity';
//import Welcome from './src/screens/welcome/welcome';
import {Modal} from 'react-native';

const activities = [
  {
    id: '1',
    name: 'Basketball',
    date: new Date('2023-02-19T12:10:00'),
    imageUrl: '',
    duration: null,
    description: null,
  },
  {
    id: '2',
    name: 'Basketball',
    date: new Date('2023-01-19T12:10:00'),
    imageUrl: '',
    duration: null,
    description: null,
  },
  {
    id: '3',
    name: 'Basketball',
    date: new Date('2023-03-19T12:10:00'),
    imageUrl: '',
    duration: null,
    description: null,
  },
];

export default function App() {
  const [isAddActivityVisible, setIsAddActivityVisible] = useState(false);
  const [activitiesData, setActivitiesData] = useState(activities);

  const addActivity = ({activity}) => {
    setActivitiesData([...activitiesData, activity]);
  };

  const sortedActivitiesData = activitiesData.sort((a, b) => b.date - a.date);

  return (
    <>
      <Activity
        activities={sortedActivitiesData}
        openAddActivity={() => setIsAddActivityVisible(true)}
      />
      <Modal visible={isAddActivityVisible}>
        <AddActivity
          addActivity={addActivity}
          closeAddActivity={() => setIsAddActivityVisible(false)}
        />
      </Modal>
      {/*<Welcome />*/}
    </>
  );
}
