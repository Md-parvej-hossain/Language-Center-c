import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToiralsCard from './ToiralsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CatacoreData = () => {
  const [tutoras, setTutors] = useState([]);
  useEffect(() => {
    fetchAllJobs();
  }, []);
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/alldata`);
    setTutors(data);
  };
  return (
    <Tabs>
      <div className=" container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl ">
          What We Learn
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-sky-500 ">
          For You to Choose
        </p>
        <div className="flex items-center justify-center ">
          <TabList>
            <Tab> ENGLISH</Tab>
            <Tab> FRENCH</Tab>
            <Tab> ITALIAN</Tab>
            <Tab> GERMAN</Tab>
            <Tab> SPANISH</Tab>
            <Tab> JAPANESE</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'ENGLISH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'FRENCH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'ITALIAN')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'GERMAN')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'SPANISH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.category === 'JAPANESE')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CatacoreData;
