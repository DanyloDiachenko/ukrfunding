import './index.css';

const Header = () => {
    return (
        <section>
            <div className='container header-top'>
                <div className='row header__top'>
                    <div className='col-lg-7 col-md-12 header__top__left px-3'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-4 header__top__left__text'>
                                <div>Welcome to Ukrfunding, Crowdfunding & Charity Agency</div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-3'>
                                <a href="/register">
                                    <button className='text-white header__top__left__button d-flex align-items-center justify-content-center'>
                                        <img src="./image/header_top_singAp.svg" alt='sign-up' />
                                        <div className='mx-2'>Sign Up Now</div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 header__top__right'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                <img src="./image/header_top_phone.svg" alt='phone' />
                                <div className='px-3'>111-222-3334</div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                <img src="./image/header_top_email.svg" alt='email' />
                                <div style={{ marginLeft: '15px' }}>support@ukrfunding.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: '100%', color: 'rgba(0, 0, 0, 0.5)' }} className='mt-4' />
            <div className='container mt-4 header-bottom pb-4'>
                <div className='row d-flex'>
                    <div className='col-lg-3 col-md-12 header-bottom__logo'>
                        <a href='/'>
                            <img src="./image/logo_Akcel.png" />
                        </a>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row text-center d-flex justify-content-center align-items-center'>
                            <div className='col mt-4'>
                                <a href='/' className='header-bottom__ref'>Home</a>
                            </div>
                            <div className='col mt-4'>
                                <a href='/about-us' className='header-bottom__ref'>About</a>
                            </div>
                            <div className='col mt-4'>
                                <div className='d-flex justify-content-center'>
                                    <a href='/projects-4-col' className='header-bottom__ref'>Projects</a>
                                </div>
                            </div>
                            <div className='col mt-4'>
                                <a href='/latest-news' className='header-bottom__ref'>News</a>
                            </div>
                            <div className='col mt-4'>
                                <a href='/contact-us' className='header-bottom__ref'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 mt-2 d-flex header-bottom__button'>
                        <button className='header-bottom__button__button'>
                            <img src='../image/header_bottom_user.svg' />
                            <span className='mx-3'>My Account</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;