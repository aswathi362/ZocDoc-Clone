import React, { useEffect, useState } from 'react';
import { getBrowseSpecialities } from '../axios/axios';
import Accordion from './Accordian';

function BrowseModalContent() {
  const [hoveredText, setHoveredText] = useState("Specialities");
  const [browsingSpecialities, setBrowsingSpecialities] = useState({});

  useEffect(() => {
    getBrowseSpecialities()
      .then((response) => {
        console.log(response);
        setBrowsingSpecialities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching specialities:", error);
      });
  }, []);

  const groupItems = (items, groupSize) => {
    let result = [];
    for (let i = 0; i < items.length; i += groupSize) {
      result.push(items.slice(i, i + groupSize));
    }
    return result;
  };

  const titleGroups = browsingSpecialities.titles ? groupItems(browsingSpecialities.titles, 4) : [];
  const procedureGroups = browsingSpecialities.procedures ? groupItems(browsingSpecialities.procedures, 20) : [];

  return (
    <div className=''>
      <div className='flex gap-2'>
        <div
          className={`p-2 hover:bg-pale-grey rounded-md underline underline-offset-8 ${hoveredText === 'Specialities' ? 'underline' : ''}`}
          onMouseOver={() => setHoveredText("Specialities")}
        >
          Specialities
        </div>
        <div
          className={`p-2 hover:bg-pale-grey rounded-md underline underline-offset-8 ${hoveredText === 'Procedures' ? 'underline' : ''}`}
          onMouseOver={() => setHoveredText("Procedures")}
        >
          Procedures
        </div>
      </div>

      <div className='border-t border-grey border-1 mt-2'></div>

      <h1 className='my-5 text-2xl mx-5'>Browse top specialities</h1>
      <div className='flex flex-col lg:flex-row'>
        {hoveredText === 'Specialities' && (
          titleGroups.map((group, groupIndex) => (
            <div key={groupIndex} className='flex flex-col w-full lg:w-1/4 p-4'>
              {group.map((title, titleIndex) => (
                <Accordion key={titleIndex} title={title} items={browsingSpecialities.cities} titleFontSize={"text-sm font-bold"} />
              ))}
            </div>
          ))
        )}

        {hoveredText === 'Procedures' && (
          procedureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className='flex flex-col w-full lg:w-1/4 p-4'>
              {group.map((procedure, procedureIndex) => (
                <div key={procedureIndex} className='p-2 underline'>
                  {procedure}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseModalContent;