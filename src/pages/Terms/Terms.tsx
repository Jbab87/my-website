import './Terms.css'
import {websiteInfo} from "../../../constants.js"

function Terms() {



  return (

    <div className='prvcy-pg'>

      <div className='prvcy-ctr'>
        <p className='prvcy-text'>

          <h1 className='prvcy-title'>Terms of Service</h1>
          <span className='prvcy-upd'>Last Updated: 07/08/2024</span>
          <h2>Introduction</h2>
          Welcome to {websiteInfo.name}. By accessing or using this website, you agree to the following terms and conditions.<br></br>
          <br></br>
          <h2>Use of the Website</h2>
          <h3>1. Acceptable Use</h3>

          You agree not to use this site for any unlawful purpose or any purpose prohibited by these terms.
          <br></br>
          <br></br>
          <h3>2. Content Ownership:</h3>
          All content on this site is owned by {websiteInfo.name} and is protected by copyright laws. You may not use or reproduce any content without permission.    <br></br>
          <br></br>
          <h3>3. Third-Party Links</h3>

          This site may contain links to third-party websites. We are not responsible for the content or practices of these websites.<br></br>
          <br></br>

          <h3>4. Limitation of Liability</h3>

          {websiteInfo.name} is provided "as is" without any warranties of any kind. We are not liable for any damages arising from the use of this site.<br></br>

          <h2>Changes to the Terms</h2>
          We reserve the right to update these terms at any time. Your continued use of the site constitutes acceptance of the new terms.<br></br>

          <h2>Contact</h2>
          If you have any questions about these Terms, please contact us at {websiteInfo.email}.
        </p> </div>



    </div>
  )
}

export default Terms
