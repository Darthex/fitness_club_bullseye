import React from "react";

export default function App() {

    const [bool, setBool] = React.useState(true)
    const [userList, setUserList] = React.useState([])
    const [userData, setUserData] = React.useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    function handleOnChange(event) {
        setUserData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userList.push(userData)
        setUserData({
            name: "",
            email: "",
            phone: "",
            address: ""
        })
        alert("User added")
    }

    function viewUser() {
        setBool(prevState => !prevState)
    }

    function goBack() {
        setBool(prevState => !prevState)
    }

    console.log(userList)

    return (
        <div>
            {
                bool ?
                    <div className="main-div">
                        <section className="form-page">
                            <h1>Fitness Club Registration</h1>
                            <input type="text" placeholder="Name" name="name" onChange={handleOnChange}
                                   value={userData.name} className="input"/>
                            <input type="text" placeholder="Email" name="email" onChange={handleOnChange}
                                   value={userData.email} className="input"/>
                            <input type="text" placeholder="Phone Number" name="phone" onChange={handleOnChange}
                                   value={userData.phone} className="input"/>
                            <input type="text" placeholder="Address" name="address" onChange={handleOnChange}
                                   value={userData.address} className="input"/>
                            <button onClick={handleSubmit} className="input">Add Member</button>
                            <button className="input" onClick={viewUser}>View Member List</button>
                        </section>
                    </div>
                    :
                    <div className="main-div">
                        <h1 className="table-header">Member List</h1>
                        <button className="back-button" onClick={goBack}>&#8592; Back</button>
                        <section className="all-user-table">
                            <div className="table-heading">
                                <h2 className="grid-item">Name</h2>
                                <h2 className="grid-item">Email</h2>
                                <h2 className="grid-item">Phone Number</h2>
                                <h2 className="grid-item">Address</h2>
                            </div>
                            {userList.map(value =>
                                <div className="table-heading">
                                    <p className="grid-item">{value.name}</p>
                                    <p className="grid-item">{value.email}</p>
                                    <p className="grid-item">{value.phone}</p>
                                    <p className="grid-item">{value.address}</p>
                                </div>
                            )}

                        </section>
                    </div>
            }
        </div>
    )
}
