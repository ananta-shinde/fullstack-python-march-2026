function HomePage(){
    return(
        <>
        <div className="bg-dark text-white d-flex justify-content-between py-2 " style={{padding:"0 5%"}}>
            <div className="d-flex ">
                 <p className="me-2 mb-0">+91 45545454454</p>
                <p className="mb-0">contact@shopkart.com</p>
            </div>
            <div className="d-flex">
                <p className="me-2 mb-0">sign in</p>
                <p className="mb-0">my account</p>
            </div>
        </div>
        <nav className="border-bottom border-3 d-flex justify-content-between align-items-center" style={{height:"80px",padding: "0 5%"}}>
            <div className="d-flex w-75">
                <h3 className="me-5">Shopkart</h3>
                    <div className="dropdown">
                        <a className="btn btn-dark dropdown-toggle me-2" data-bs-toggle="dropdown" >Categories</a>
                       
                            <ul class="dropdown-menu px-4">
                                <li className="my-1">Mobiles</li>
                                <li className="my-1">Laptops</li>
                                <li className="my-1">Smartwatches</li>
                            </ul>
                        
                    </div>
                    <input className="form-control border-dark" placeholder="search for product here"></input>
            </div>
            <a><i class="bi bi-cart fs-2"></i></a>
        </nav>
        <section>
            <div id="main-banner" className="carousel slide">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://demo.fieldthemes.com/havana/home1/modules/fieldslideshow/images/slider-222.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://demo.fieldthemes.com/havana/home1/modules/fieldslideshow/images/slider-222.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://demo.fieldthemes.com/havana/home1/modules/fieldslideshow/images/slider-222.jpg" class="d-block w-100" alt="..."/>
                </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#main-banner" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                </button>
                <button className="carousel-control-next" data-bs-target="#main-banner" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
                </button>
            </div>
        </section>
        </>
    )
}

export default HomePage;