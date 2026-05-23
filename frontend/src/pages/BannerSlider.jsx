





function BannerSlider(){

    const urls = [
        "https://t3.ftcdn.net/jpg/04/67/96/14/360_F_467961418_UnS1ZAwAqbvVVMKExxqUNi0MUFTEJI83.jpg",
        "https://media.geeksforgeeks.org/wp-content/uploads/20240429125422/what-is-banner-copy.webp",
        "https://t3.ftcdn.net/jpg/04/67/96/14/360_F_467961418_UnS1ZAwAqbvVVMKExxqUNi0MUFTEJI83.jpg"

    ]
    // var url = "https://t3.ftcdn.net/jpg/04/67/96/14/360_F_467961418_UnS1ZAwAqbvVVMKExxqUNi0MUFTEJI83.jpg"
    // var url = "https://media.geeksforgeeks.org/wp-content/uploads/20240429125422/what-is-banner-copy.webp"
    return ( <>
        <div id="MainBannerSlider" className="carousel slide">
            <div className="carousel-inner">
               { 
                 urls.map((value,key)=>(<div className="carousel-item active" key={key} >
                     <img className="w-100" src={value}/>
                </div>))
               }
               
                {/* <div className="carousel-item">
                     <img className="w-100" src={urls[1]}/>
                </div>
                <div className="carousel-item">
                     <img className="w-100" src={urls[1]} />
                </div> */}
            </div>
            <button class="carousel-control-prev" data-bs-target="#MainBannerSlider" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#MainBannerSlider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </> );
}
 
export default BannerSlider;