import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import phone from "./assets/phone.svg"
import sec_1_img from "./assets/Group.svg"
import card_img from "./assets/car_img.svg"
import card_img2 from "./assets/IMAGE (15).svg"
import card_img3 from "./assets/IMAGE (16).svg"
import card_img4 from "./assets/IMAGE (17).svg"
import card_img5 from "./assets/IMAGE (18).svg"
import card_img6 from "./assets/IMAGE (19).svg"
import sec_4_div_img from "./assets/IMAGE (20).svg"
import box_img from "./assets/Frame (5).svg"
import box_data from "./assets/Frame (6).svg"
import box_img2 from "./assets/Frame (7).svg"
import sec_7_imgs from "./assets/Frame (8).svg"

function App() {

    return (
        <>
            <div className="container">
                <Header />
                <section className='sec-1'>
                    <div className="sec-1-text">
                        <h1>Quality cleaning <br /> for your home</h1>
                        <p>Condimentum mauris sit cursus amet id non neque pharetra <br /> nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br /> suscipit aliquet et nulla magna lacus penatibus.</p>
                        <div className="call-btn">
                            <button>Get a free quote</button>
                            <div className="call">
                                <img className='phone' src={phone} alt="" />
                                <div className="call-text">
                                    <p>Call us now</p>
                                    <h3>(414) 567 - 2109</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='sec-1-img' src={sec_1_img} alt="" />
                </section>
                <section className='sec-2'>
                    <div className="sec-2-text">
                        <h1>About Us</h1>
                        <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                        <div className="cards">
                            <div className="card">
                                <img src={card_img} alt="" />
                                <h2>1. Schedule online</h2>
                                <p>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</p>
                            </div>
                            <div className="card">
                                <img src={card_img2} alt="" />
                                <h2>2. Pay online easily</h2>
                                <p>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</p>
                            </div>
                            <div className="card">
                                <img src={card_img3} alt="" />
                                <h2>3. Get your house cleaned</h2>
                                <p>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</p>
                            </div>
                        </div>
                        <div className="btns">
                            <button>Get a free quote</button>
                            <button className='explore'>Explore services</button>
                        </div>
                    </div>
                </section>
                <section className='sec-3'>
                    <div className="sec-3-text">
                        <h1>Our Services</h1>
                        <button className='explore'>Explore services</button>
                    </div>
                    <div className="sec-3-cards">
                        <div className="card">
                            <img src={card_img4} alt="" />
                            <h3>House cleaning</h3>
                            <p>Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.</p>
                        </div>
                        <div className="card">
                            <img src={card_img5} alt="" />
                            <h3>House cleaning</h3>
                            <p>Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.</p>
                        </div>
                        <div className="card">
                            <img src={card_img6} alt="" />
                            <h3>House cleaning</h3>
                            <p>Lorem ipsum dolor sit amet <br /> consecte tur adipiscing elit <br /> semper dalaracc lacus vel <br /> facilisis volutpat est.</p>
                        </div>
                    </div>
                </section>
                <section className='sec-4'>
                    <div className="sec-4-div">
                        <img className='div-img' src={sec_4_div_img} alt="" />
                        <div className="sec-1-text">
                            <h5>Covid-19 sanitization</h5>
                            <h1>We follow guidelines <br /> to keep you safe from <br /> the COVID-19 virus</h1>
                            <p>Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
                            <div className="call-btn">
                                <button>Get a free quote</button>
                                <div className="call">
                                    <img className='phone' src={phone} alt="" />
                                    <div className="call-text">
                                        <p>Call us now</p>
                                        <h3>(414) 567 - 2109</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sec-5'>
                    <div className="sec-5-text">
                        <h1>Articles & resources</h1>
                        <div className="sec-5-btns">
                            <button>Get a free quote</button>
                            <button className='explore'>Browse articles</button>
                        </div>
                    </div>
                    <div className="boxs">
                        <div className="box">
                            <img src={box_img} alt="" />
                            <div className="box-text">
                                <h4>8 best vacuum cleaners to clean any <br /> mess for your home in 2022</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit sit ac port titor sit <br /> males.</p>
                                <div className="data">
                                    <h4>Jan 28, 2022</h4> <img src={box_data} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <img src={box_img2} alt="" />
                            <div className="box-text">
                                <h4>How to properly disinfect your phone <br /> and other electronics</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit sit ac port titor sit <br /> males.</p>
                                <div className="data">
                                    <h4>Feb 1, 2022</h4> <img src={box_data} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sec-6'>
                    <div className="sec-6-texts">
                        <div className="sec-6-text1">
                            <h1>Contact Us</h1>
                            <p>In dignissim euismod pretium amet enim a eu nam <br /> ut urna accumsan pellentesque lacus duis pharetra <br /> eutortor.</p>
                            <div className="call">
                                <img className='phone' src={phone} alt="" />
                                <div className="call-text">
                                    <p>Call us now</p>
                                    <h3>(414) 567 - 2109</h3>
                                </div>
                            </div>
                        </div>
                        <div className="sec-6-text2">
                            <h1>Not convinced yet?</h1>
                            <p>Massa bibendum consectetur maurisid gravida <br /> purus, dolor dui amet morbi non nunc urna <br /> purus diam.</p>
                            <button className='explore'>Browse our packages</button>
                        </div>
                    </div>
                    <div className="sec-6-inputs">
                        <div className="inputs">
                            <input type="text" placeholder='Full name' />
                            <input type="number" placeholder='Phone number' />
                            <input type="text" placeholder='Address' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Requested service' />
                            <input type="text" placeholder='Day of service' />
                            <textarea name="" id="" placeholder='Add a note'></textarea>
                        </div>
                        <button className='submit'>Submit message</button>
                    </div>
                </section>
                <section className='sec-7'>
                    <div className="sec-7-texts">
                        <div className="sec-7-text1">
                            <h2>Quality cleaning for <br /> your home</h2>
                            <p>Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do eiusmo.</p>
                            <img src={sec_7_imgs} alt="" />
                        </div>
                        <div className="sec-7-text2">
                            <h4>Contact us</h4>
                            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                            <p>(414) 567 - 2109</p>
                            <p>contact@cleaning.com</p>
                        </div>
                        <div className="sec-7-text3">
                            <h4>Hours</h4>
                            <h4>Monday to Friday</h4>
                            <p>6:00 AM - 9:00 PM</p>
                            <h4>Saturday & Sunday</h4>
                            <p>8:00 AM - 8:00 PM</p>
                        </div>
                        <div className="sec-7-text4">
                            <h4>Get a free estimate</h4>
                            <h3>(414) 567 - 2109</h3>
                            <p>Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
                            <button>Request a free quote</button>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}

export default App
