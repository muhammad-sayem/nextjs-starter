import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className='grid grid-cols-12'>
        {/* Dashboard Sidebar */}
        <div className='col-span-3 border-2 border-red-500'>
          <ul>
            <li> User List 1 </li>
            <li> User List 2 </li>
            <li> User List 3 </li>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className='col-span-9 border-2 border-green-500'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;