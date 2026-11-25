'use client';
import React from 'react'
import { useRouter } from "next/navigation";
function page() {
    const router = useRouter();
    const handleCancel = () => {
        router.push("/pages/Profile");
    };

    return (
        <div className='vendorpage'>
            <div className='vendorpage-container'>
                <div className='vendorpage-contents'>
                    <div className='vendorpage-head'>
                        <h2>Become a Vendor</h2>
                    </div>
                    <div className='pet-page-contents'>
                        <div className='pet-page-content'>
                            <div className="content1-form">
                                <div className='content1-form-inputs'>
                                    <div className="form2">
                                        <label>Name</label>
                                        <input
                                            className="content-input"
                                            name="heading"
                                            type="text"
                                            placeholder="Write Content"
                                        />
                                    </div>
                                    <div className="form2">
                                        <label>Contact Number</label>
                                        <input
                                            className="content-input"
                                            name="shortDescription"
                                            placeholder="Write Content"
                                        />
                                    </div>
                                </div>
                                <div className='content1-form-inputs'>
                                    <div className="form2">
                                        <label>Mail</label>
                                        <input
                                            className="content-input"
                                            name="heading"
                                            type="text"
                                            placeholder="Write Content"
                                        />
                                    </div>
                                    <div className="form2">
                                        <label>Gender</label>
                                        <input
                                            className="content-input"
                                            name="shortDescription"
                                            placeholder="Write Content"
                                        />
                                    </div>
                                </div>
                                <div className='content1-form-inputs'>
                                    <div className="form1">
                                        <label>Mail</label>
                                        <textarea
                                            className="content-input"
                                            name="heading"
                                            rows={5}
                                            type="text"
                                            placeholder="Write Content"
                                        />
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <div className='content-btn'>
                                        <button className="cancel-btn" onClick={handleCancel} >Cancel</button>
                                        <button className="update-btn" >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
