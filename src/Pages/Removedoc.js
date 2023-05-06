// import axios from "axios";
import React from "react";

export function UserList() {
    return (
        <div>
            <center><h3> Doctor List</h3></center>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>Mobile</th><th>Country</th><th>Hospital Name</th><th>Specialization</th><th>Experience</th><th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>Ramanand Dash</td>
                <td>rananand@gmail.com</td>
                <td>9456738293</td>
                <td>India</td>
                <td>IMS_BHU</td>
                <td>Orthopaedic</td>
                <td>10</td>
                <td>
                    <button className="btn btn-primary" >Remove Doctor</button>
                </td>
            </tr>
            <tr>
                <td>Anand Shyam</td>
                <td>shyamanand@gmail.com</td>
                <td>7834XXXXXX</td>
                <td>India</td>
                <td>AIIMS_Nagpur</td>
                <td>Neuralogist</td>
                <td>4</td>
                <td>
                    <button className="btn btn-primary" >Remove Doctor</button>
                </td>
            </tr>
            <tr>
                <td>Manas Ram</td>
                <td>manasd@gmail.com</td>
                <td>6484XXXXXX</td>
                <td>India</td>
                <td>AIIMS_Delhi</td>
                <td>Laproscopic Surgeon</td>
                <td>7</td>
                <td>
                    <button className="btn btn-primary" >Remove Doctor</button>
                </td>
            </tr>
                </tbody>
            </table>
        </div>
    );
}