import React from 'react'

export const LoginScreen = () => {
    return (
        <div class="login-custom">
            <div class="row no-margin">
                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="reactibook-logo">Reactibook</h1>
                    <h2 style={{ fontWeight: 'lighter' }}>Recent Logins</h2>
                    <h6  style={{ fontWeight: 'lighter' }}>Click your picture or add an account.</h6>
                    <div class="card" style={{ width: '11rem', borderRadius: '9px', cursor: 'pointer'}}>
                        <img class="card-img-top" src="https://scontent.fsap4-1.fna.fbcdn.net/v/t1.0-1/p160x160/87971700_10216995627031457_8324324086314434560_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_ohc=a01Zcr_IXr8AX98PnTy&amp;_nc_ht=scontent.fsap4-1.fna&amp;tp=6&amp;oh=b5868c87ce7bc3734f3f6f0651d24a7c&amp;oe=603F3F92" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Angello Ant...</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <form class="login-form">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
