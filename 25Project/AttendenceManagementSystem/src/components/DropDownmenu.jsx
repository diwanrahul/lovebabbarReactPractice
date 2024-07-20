
const DropDownmenu = () => {
  return (
    <div className="flex justify-between border h-screen">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 w-3/12 border border-red-700">
        <ul>
          <li>hjk</li>
          <li>fdfd</li>
          <li>afaf</li>
          <li>fadfd</li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 border border-blue-800 p-5 w-11/12">
        <div className="flex justify-between">
        <h1>Subjective Attendance</h1>
        <button className="bg-green-500 px-3 py-1 rounded-md">Save</button>
        <button className="bg-yellow-500 px-3 py-1 rounded-md">Delete</button>
        <button className="bg-orange-500 px-3 py-1 rounded-md">clear</button>
        </div>
        <div className="flex items-start">
            <h1> &#10004; Apply</h1>
        </div>
        <form>
            <div className="flex justify-around gap-4 mb-3">
                <div>
                    <input type="radio" name="division" id="" />
                    <label htmlFor="">Division</label>
                </div>
                <div>
                <input type="radio" name="attendance-grp" id="" />
                    <label htmlFor="">Attendance Group</label>

                </div>
            </div>
          <div className="flex flex-col border border-red-600 gap-5 p-5">
            <div className="flex justify-between ">
              <div className="flex flex-col items-start">
                <label htmlFor="class">Class</label>
                <select name="class">
                  <option value="">Select</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="division">Divison</label>
                <select name="division"><option value="">Select</option>
                  <option value="9">hkh</option>
                  <option value="10">ffd</option>
                  <option value="11">fesf</option>
                  <option value="12">fefsd</option>
                </select>
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="attendace-date">Attendance Date</label>
                <input type="date" name="attendance-date" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="subject">Subject</label>
                <select name="subject"><option value="">Select</option>
                  <option value="math">math</option>
                  <option value="chemistry">chemistry</option>
                  <option value="physics">physics</option>
                  <option value="bio">bio</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <div className="flex flex-col items-start">
                    <label htmlFor="period-no">Period No.</label>
                <select name="period-no"><option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="flex flex-col items-start">
                <label>Employee code</label>
                <input type="number" />
              </div>
              <div className="flex flex-col items-start">
                <label>Employee Name</label>
                <input type="text" />
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" name="stop-alert" />
                <label>stop auto alert</label>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="bg-blue-300 px-3 py-1 rounded-md mt-3"> &#10004; Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DropDownmenu;
