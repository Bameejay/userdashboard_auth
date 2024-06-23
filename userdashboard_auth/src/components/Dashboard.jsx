const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="text-lg font-semibold mb-4">Dashboard</div>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-600 hover:text-black">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-black">Product</a>
          <a href="#" className="text-gray-600 hover:text-black">Customers</a>
          <a href="#" className="text-gray-600 hover:text-black">Income</a>
          <a href="#" className="text-gray-600 hover:text-black">Promote</a>
          <a href="#" className="text-gray-600 hover:text-black">Help</a>
        </nav>
        <div className="mt-auto">
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            Upgrade to PRO
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Hello Evano 👋</h1>
          <input type="text" placeholder="Search" className="p-2 border rounded-lg" />
        </header>
        <section className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-2xl">5,423</p>
            <p className="text-sm text-green-500">16% this month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Members</h2>
            <p className="text-2xl">1,893</p>
            <p className="text-sm text-red-500">1% this month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Active Now</h2>
            <p className="text-2xl">189</p>
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">All Customers</h2>
          <div className="mb-4 flex justify-between items-center">
            <input type="text" placeholder="Search" className="p-2 border rounded-lg" />
            <select className="p-2 border rounded-lg">
              <option>Sort by: Newest</option>
            </select>
          </div>
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="p-2">Customer Name</th>
                <th className="p-2">Company</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">Email</th>
                <th className="p-2">Country</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Jane Cooper</td>
                <td className="p-2">Microsoft</td>
                <td className="p-2">(225) 555-0118</td>
                <td className="p-2">jane@microsoft.com</td>
                <td className="p-2">United States</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="p-2">Floyd Miles</td>
                <td className="p-2">Yahoo</td>
                <td className="p-2">(205) 555-0100</td>
                <td className="p-2">floyd@yahoo.com</td>
                <td className="p-2">Kiribati</td>
                <td className="p-2 text-red-500">Inactive</td>
              </tr>
              <tr>
                <td className="p-2">Ronald Richards</td>
                <td className="p-2">Adobe</td>
                <td className="p-2">(302) 555-0107</td>
                <td className="p-2">ronald@adobe.com</td>
                <td className="p-2">Israel</td>
                <td className="p-2 text-red-500">Inactive</td>
              </tr>
              <tr>
                <td className="p-2">Marvin McKinney</td>
                <td className="p-2">Tesla</td>
                <td className="p-2">(252) 555-0126</td>
                <td className="p-2">marvin@tesla.com</td>
                <td className="p-2">Iran</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="p-2">Jerome Bell</td>
                <td className="p-2">Google</td>
                <td className="p-2">(629) 555-0129</td>
                <td className="p-2">jerome@google.com</td>
                <td className="p-2">Réunion</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="p-2">Kathryn Murphy</td>
                <td className="p-2">Microsoft</td>
                <td className="p-2">(406) 555-0120</td>
                <td className="p-2">kathryn@microsoft.com</td>
                <td className="p-2">Curaçao</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="p-2">Jacob Jones</td>
                <td className="p-2">Yahoo</td>
                <td className="p-2">(208) 555-0112</td>
                <td className="p-2">jacob@yahoo.com</td>
                <td className="p-2">Brazil</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="p-2">Kristin Watson</td>
                <td className="p-2">Facebook</td>
                <td className="p-2">(704) 555-0127</td>
                <td className="p-2">kristin@facebook.com</td>
                <td className="p-2">Åland Islands</td>
                <td className="p-2 text-red-500">Inactive</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-500">Showing data 1 to 8 of 256K entries</span>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg">1</button>
              <button className="px-4 py-2 border rounded-lg">2</button>
              <button className="px-4 py-2 border rounded-lg">3</button>
              <button className="px-4 py-2 border rounded-lg">4</button>
              <span className="px-4 py-2">...</span>
              <button className="px-4 py-2 border rounded-lg">40</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
