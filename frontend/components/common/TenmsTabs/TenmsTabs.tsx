import React, { useState } from 'react';

function TenmsTabs({ tabList = [], tabChildren = [] }) {
  const [activeTabId, setActiveTabId] = useState(1);

  const handleSetTabId = (id) => {
    setActiveTabId(id);
  };

  return (
    <div className="py-5 md:py-0">
      <div className="flex items-center gap-2 md:border-b border-[#E5E7EB] mb-3">
        {tabList?.map((item, idx) => (
          <div key={`${item.name} ${idx}`}>
            <div
              className={`hidden md:block cursor-pointer pb-3 px-6 ${
                activeTabId === item?.id
                  ? 'border-b-2 border-green text-base font-semibold text-[#1CAB55]'
                  : 'text-base font-medium text-[#4B5563]'
              }`}
              onClick={() => handleSetTabId(item?.id)}
            >
              {item?.name}
            </div>
            <div
              className={`flex md:hidden items-center justify-center cursor-pointer py-3 px-3 text-[13px] rounded-md ${
                activeTabId === item?.id
                  ? 'bg-[#F3FFF2] border border-green font-medium text-[#1CAB55]'
                  : 'bg-[#F3F4F6] font-normal text-[#4B5563]'
              }`}
              onClick={() => handleSetTabId(item?.id)}
            >
              {item?.name}
            </div>
          </div>
        ))}
      </div>
      <div>
        {tabChildren?.map((item) => (
          <div key={item?.id}>
            {item?.id === activeTabId ? item?.children : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TenmsTabs;
