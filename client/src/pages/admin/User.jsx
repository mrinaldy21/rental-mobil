import React from 'react'

const User = () => {
    return (
        <div className="container" style={{ marginTop: '75px'}}>
            <div className="center">
                <div className="row">
                    <div className="col-10">
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h2>DATA USER</h2>
                                <hr />
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped mt-3">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>BIRTHDATE</th>
                                                <th>GENDER</th>
                                                <th>AVATAR</th>
                                                <th>TYPE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Anna</td>
                                                <td>Pitt</td>
                                                <td>35</td>
                                                <td>New York</td>
                                                <td>USA</td>
                                                <td>Female</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Anna</td>
                                                <td>Pitt</td>
                                                <td>35</td>
                                                <td>New York</td>
                                                <td>USA</td>
                                                <td>Female</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Anna</td>
                                                <td>Pitt</td>
                                                <td>35</td>
                                                <td>New York</td>
                                                <td>USA</td>
                                                <td>Female</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
