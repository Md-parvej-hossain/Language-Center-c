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
      <div className=" container  mx-auto">
        <div className="text-center pb-10">
          <h1 className="text-[#969696] font-bold text-2xl md:text-3xl lg:text-5xl">
            What We Learn
          </h1>
          <p className="text-lg text-[#5BD9B3] font-semibold pt-5">
            For You to Choose
          </p>
        </div>
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
                .filter(tutor => tutor.language === 'ENGLISH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.language === 'FRENCH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.language === 'ITALIAN')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.language === 'GERMAN')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.language === 'SPANISH')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutoras &&
              tutoras
                .filter(tutor => tutor.language === 'JAPANESE')
                .map(data => <ToiralsCard key={data._id} data={data} />)}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CatacoreData;
