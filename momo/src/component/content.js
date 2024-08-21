export default function Content(){
    return(<div className="Content">
        <div className="Table">
            <th>S.no</th>
            <th>Name</th>
            <th>College Name</th>
            <th>Department</th>
            <th>Year of Passed Out</th>
            <tr>
                <td>1</td>
                <td>Sakthi</td>
                <td>HICET</td>
                <td>CSE</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Vishnu</td>
                <td>HICET</td>
                <td>CSE</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Surya</td>
                <td>HICET</td>
                <td>CSE</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Kumar</td>
                <td>HICET</td>
                <td>CSE</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Meeran</td>
                <td>HICET</td>
                <td>CSE</td>
                <td>2025</td>
            </tr>
        </div>
        <div classname="form-group">
            <div classname="form">
            <form>
                <label>Name :</label>
                <input type="text" placeholder="Enter the name"></input><br></br>
                <label>College Name :</label>
                <input type="text" placeholder="Enter the college name"></input><br></br>
                <label>Department :</label>
                <input type="text" placeholder="Enter the department"></input><br></br>
                <label>Year :</label>
                <input type="text" placeholder="Enter the Passed out year"></input><br></br>
            </form>
            </div>
        </div>
    </div>)
}