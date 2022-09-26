import Title from './title';
import { Link } from "react-router-dom";

const Signin = () => {
    Title(" | signin");
    return (
        <>
            <div className='bg_body'>
                <div className='sign_form_shap'></div>
                <div className='sign_box'>
                    <div className='sign_u_head'><h1>Log in to Unify</h1></div>
                    <div className='input_group'>
                        <div className='input_bo'>
                            <div className='input_icoa'>
<svg xmlns="http://www.w3.org/2000/svg" width="16.449" height="18.255" viewBox="0 0 16.449 18.255">
  <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-5 -3.5)">
    <path id="Path_4542" data-name="Path 4542" d="M20.449,27.918V26.112A3.612,3.612,0,0,0,16.837,22.5H9.612A3.612,3.612,0,0,0,6,26.112v1.806" transform="translate(0 -7.163)" fill="none" stroke="#170048" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_4543" data-name="Path 4543" d="M19.225,8.112A3.612,3.612,0,1,1,15.612,4.5,3.612,3.612,0,0,1,19.225,8.112Z" transform="translate(-2.388)" fill="none" stroke="#170048" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>
                            </div>
                            <div className='input_nodxq'><input type='text' placeholder='Username or Email' /></div>
                        </div>
                    </div>
                    
                    <div className='input_group'>
                        <div className='input_bo'>
                            <div className='input_icoa'>
<svg xmlns="http://www.w3.org/2000/svg" width="14.449" height="18.965" viewBox="0 0 14.449 18.965">
  <path id="Icon_material-lock-open" data-name="Icon material-lock-open" d="M13.225,15.949a1.806,1.806,0,1,0-1.806-1.806A1.811,1.811,0,0,0,13.225,15.949Zm5.418-8.128h-.9V6.015a4.515,4.515,0,0,0-9.031,0h1.716a2.8,2.8,0,1,1,5.6,0V7.822H7.806A1.811,1.811,0,0,0,6,9.628v9.031a1.811,1.811,0,0,0,1.806,1.806H18.643a1.811,1.811,0,0,0,1.806-1.806V9.628A1.811,1.811,0,0,0,18.643,7.822Zm0,10.837H7.806V9.628H18.643Z" transform="translate(-6 -1.5)" fill="#170048"/>
</svg>
                            </div>
                            <div className='input_nodxq'><input type='password' placeholder='Create a Password' /></div>
                        </div>
                    </div>
                    <Link to="/dashboard">
                    <div className='sign_form_btn_subm sign_w_full'>
                        <button className='mr_sign_in_n'>CONTINUE WITH EMAIL</button>
                    </div>
                    </Link>
                    <div className='sign_in_or'>or</div>
                    <div className='sign_form_btn_subm sign_in_social_btn mr_sign_in_n'>
                        <button className='apple_btn mr_sign_in_n'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>
                            Continue with Apple
                        </button>
                        <button className='google_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                    <div className='sin_dont_accou'>Don't have an Unify account? <span className='link_don_acc'><Link to="/Signup">Signup</Link></span></div>
                </div>
            </div>
        </>
    )
}
export default Signin