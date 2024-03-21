import './FooterStyle.css';
const Footer = () =>{
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Travel</h1>
                    <p>Choose your favorite</p>
                </div>
                <div>
                    <a href='/'>
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-google"></i>
                    </a>
                </div>
                
            </div>
            <div className='bottom'>
                <div className='dip'>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div className='dip'>
                    <h4>Community</h4>
                    <a href='/'>GitHub</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div className='dip'>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Troubleshooting</a>
                    
                </div>
                <div className='dip'>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
                
            </div>
            <hr/>
            <h9>© All rights reserved. Thiết kế website MonaMedia Mona Media</h9>
        </div>
    )
}
export default Footer;