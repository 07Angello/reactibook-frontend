import React from 'react';

export const LoginScreen = () => {
    const goToMyLinkedIn = () => {
        console.log('LinkedIn');
        window.open('https://www.linkedin.com/in/gabriel-angello-antonelly-g%C3%A1mez-b1b623195/','AngelloAntonelly');
    }

    return (
        <div class="w-100 h-100 row d-flex justify-content-center align-items-center" style={{ position: 'absolute' }}>
            <div class="row no-margin login-custom">
                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="reactibook-logo">Reactibook</h1>
                    <h2 style={{ fontWeight: 'lighter' }}>Recent logins</h2>
                    <h6  style={{ fontWeight: 'lighter' }}>Click your picture or add an account.</h6>
                    <div class="d-flex flex-row justify-content-around align-items-center">
                        <div class="card login-card" onClick={ goToMyLinkedIn }>
                            <span class="badge bg-linkedIn"><i class="bi bi-linkedin"></i></span>
                            <img class="card-img-top" src="https://scontent.fsap4-1.fna.fbcdn.net/v/t1.0-1/p160x160/87971700_10216995627031457_8324324086314434560_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_ohc=a01Zcr_IXr8AX98PnTy&amp;_nc_ht=scontent.fsap4-1.fna&amp;tp=6&amp;oh=b5868c87ce7bc3734f3f6f0651d24a7c&amp;oe=603F3F92" alt="Card image cap" />
                            <div class="card-body" style={{ padding: '0px' }}>
                                <h5 class="card-title custom-crd-title">Angello Gámez</h5>
                            </div>
                        </div>
                        <div class="card login-card">
                            <div class="d-flex justify-content-center align-items-center login-add-account">
                                <i class="bi bi-plus-circle-fill"></i>
                            </div>
                            <div class="card-body" style={{ padding: '0px' }}>
                                <h5 class="card-title custom-crd-title" style={{ color: '#1877f2', textAlign: 'center' }}>Add Account</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <form class="login-form">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Log In</button>
                        <p class="text-center mt-3 mb-1 text-primary">Forgotten Password?</p>

                        <hr class="separator"></hr>

                        <div class="w-100 d-flex justify-content-center align-items-center">
                            <button type="button" class="btn btn-success btn-lg mt-2 mb-1">Create Account</button>
                        </div>
                    </form>
                    <p><b>Create a Page</b> for a celebrity, band or business.</p>
                </div>
            </div>
        </div>
    )
}
