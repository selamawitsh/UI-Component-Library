export default function FormInput({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full flex items-center justify-center">
        <input
          placeholder="Name"
          className="px-2 py-1 rounded border text-sm w-32"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-transparent">
      <div className="space-y-4">
        <div className="flex items-start">
          <label className="w-36 text-sm text-gray-200 pt-2">Name:</label>
          <div className="flex-1">
            <input
              placeholder="your name"
              className="w-full bg-gray border border-gray-200 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="flex items-start">
          <label className="w-36 text-sm text-gray-200 pt-2">
            Email Address:
          </label>
          <div className="flex-1">
            <input
              placeholder="email address"
              className="w-full bg-w border border-gray-200 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="flex items-start">
          <label className="w-36 text-sm text-gray-200 pt-2">
            Mobile Number:
          </label>
          <div className="flex-1">
            <input
              placeholder="phone number"
              className="w-full bg-gray border border-gray-200 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-36 text-sm text-gray-200">Sex:</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="sex"
                className="form-radio h-4 w-4 text-indigo-500"
              />
              <span className="text-sm text-gray-200">Male</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="sex"
                className="form-radio h-4 w-4 text-indigo-500"
              />
              <span className="text-sm text-gray-200">Female</span>
            </label>
          </div>
        </div>

        <div className="flex items-start">
          <label className="w-36 text-sm text-gray-200 pt-1">Country:</label>
          <div className="flex-1 relative">
            <select className="w-full bg-gray border border-gray-200 px-3 py-2 rounded-md shadow-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              <option className="bg-gray-500 cursor-pointer rounded-2xl">United States</option>
              <option className="bg-gray-500 cursor-pointer rounded-2xl">Canada</option>
              <option className="bg-gray-500 cursor-pointer rounded-2xl">United Kingdom</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
