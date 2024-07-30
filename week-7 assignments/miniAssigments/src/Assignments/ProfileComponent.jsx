import React from 'react'
import './index.css'

function ProfileComponent() {
  return (
    <div className="card-full">
    <div className="card">
        <div className="backgroundColor">Bg color</div>
        <div className="profile">
            <img src="../../public/pro_pic_girl.jpg" alt="" className='profilePicture'/>
            <div className="basicDetails">
                <p className='boldText'>Rita Correia</p>
                <p className='lightText'>32</p>
            </div>
            <p className='lightText'>Location</p>
        </div>
        <hr />
        <div className="social">
            <div className="followers">
                <p className='boldText'>80K</p>
                <p className='lightText smallText'>Followers</p>
            </div>
            <div className="likes">
                <p className='boldText'>803K</p>
                <p className='lightText smallText'>Likes</p>
            </div>
            <div className="photos">
                <p className='boldText'>1.4K</p>
                <p className='lightText smallText'>Photos</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ProfileComponent