import { useState, useEffect } from "react";
import { FaAddressBook, FaArrowLeft, FaBox, FaUnlockAlt, FaUserAlt, FaUserEdit } from "react-icons/fa";
import { FiMail, FiMap, FiPhone, FiUser } from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5"
import {GiPostOffice} from "react-icons/gi"
import { Wrapper } from "./styles";
import {toast} from 'react-toastify';
import axios from 'axios'
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
const ProfilePage = () => {
    const [displayScreen, setdisplayScreen] = useState('overview')
     const [profile, setprofile] = useState({})
     const [address, setaddress] = useState({})
     const [passwords, setpasswords] = useState({
        old_password: '',
		new_password: '',
        confirmNewPassword: ''
     })
     const [isLoading, setisLoading] = useState(false)
     useEffect(() => {
        getProfileDetails()
        getAddress()
        getOrders()
    }, [])
    const user = localStorage.getItem("onibata-user");
    const user_details = JSON.parse(user)
    const {firstname, lastname, email, phone} = profile
    const {country, town, street, postal_code} = address
    const {old_password, new_password, confirmNewPassword} = passwords
    const [orders, setorders] = useState([])
    const onChange = (e) => {
		setprofile((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
    const onChangeAddress = (e) => {
		setaddress((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
    const onChangePassword = (e) => {
		setpasswords((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
    // Get Profile Details
    const getProfileDetails = async () => {
        // e.preventDefault()
        
        const userData = {
           username: user_details.username,
           auth_token: user_details.token,
        }

          try {
            const res = await axios.post('https://loftywebtech.com/onibata/api/profile', userData)
            if(res.data.status === 'success'){
                setprofile(res.data.message)
            } else {
              toast.error("An error occurred", {
            position: "bottom-left",
           });
          }
          } catch (err) {
            toast.error(err.data.message, {
                position: "bottom-left",
               });
          }
      }
      // Update Profile Details
      const  updateProfileDetails = async (e) => {
        e.preventDefault()
        const userData = {
            username: user_details.username,
            auth_token: user_details.token,
            firstname,
           lastname,
           email,
           phone,
           
        }
        setisLoading(true)

          try {
            const res = await axios.put('https://loftywebtech.com/onibata/api/update-profile', userData)
            setisLoading(false)
            if(res.data.status === 'success'){
                toast.success(res.data.message, {
                    position: "bottom-left",
                   });
            } else {
              toast.error(res.data.message, {
            position: "bottom-left",
           });
          }
          } catch (err) {
            setisLoading(false)
          }
      }
      // Get User Address
      const getAddress = async () => {
        // e.preventDefault()
        
        const userData = {
           username: user_details.username,
           auth_token: user_details.token,
        }

          try {
            const res = await axios.post('https://loftywebtech.com/onibata/api/address', userData)
            if(res.data.status === 'success'){
                setaddress(res.data.message)
            } else {
              toast.error("An error occurred", {
            position: "bottom-left",
           });
          }
          } catch (err) {
            toast.error(err.data.message, {
                position: "bottom-left",
               });
          }
      }
      // Update User Address
      const  updateAddress = async (e) => {
        e.preventDefault()
        const userData = {
            username: user_details.username,
            auth_token: user_details.token,
            country,
            town,
            street,
            postal_code 
        }
        setisLoading(true)

          try {
            const res = await axios.put('https://loftywebtech.com/onibata/api/update-address', userData)
            setisLoading(false)
            if(res.data.status === 'success'){
                toast.success(res.data.message, {
                    position: "bottom-left",
                   });
            } else {
              toast.error(res.data.message, {
            position: "bottom-left",
           });
          }
          } catch (err) {
            setisLoading(false)
          }
      }
      
    // Update User Password
    const  updatePassword = async (e) => {
        e.preventDefault()
        const userData = {
            username: user_details.username,
            auth_token: user_details.token,
            old_password,
            new_password,
        }
        setisLoading(true)
        if (new_password === confirmNewPassword) {
            try {
                const res = await axios.patch('https://loftywebtech.com/onibata/api/update-password', userData)
                setisLoading(false)
                if(res.data.status === 'success'){
                    toast.success(res.data.message, {
                        position: "bottom-left",
                       });
                       setpasswords({
                        old_password: '',
		                new_password: '',
                        confirmNewPassword: ''
                       })
                } else {
                  toast.error(res.data.message, {
                position: "bottom-left",
               });
              }
              } catch (err) {
                setisLoading(false)
                toast.error(err.data.message, {
                    position: "bottom-left",
                   });
              }
        } else {
            toast.error("Please confirm new password", {
                position: "bottom-left",
               })
               setisLoading(true)
        }

          
      }

    //   Get orders
    
    const getOrders = async () => {
        const user = localStorage.getItem("onibata-user");
        const user_details = JSON.parse(user)
        const userData = {
           username: user_details.username,
           auth_token: user_details.token,
        }

          try {
            const res = await axios.post('https://loftywebtech.com/onibata/api/get-orders', userData)
            if(res.data.status === 'success'){
                setorders(res.data.message.orders)
            } else {
              toast.error("This shoe is out of Stock", {
            position: "bottom-left",
           });
          }
          } catch (err) {
            toast.error(err.data.message, {
                position: "bottom-left",
               });
          }
      }
      

    return ( 
        <Wrapper>
            <div className="profile">
            <div className="sidebar">
                <ul className="">
                    <li className="">
                        <Link to="/" className="logo">
                    <img src="/assets/logo.png" alt="" />
                </Link>
                </li>
                    <li className="" onClick={() => setdisplayScreen('overview')}> <FaUserAlt/>  <p>My Account</p></li>
                    <li className="" onClick={() => setdisplayScreen('orders')}><FaBox/> <p>Orders</p></li>
                    <li className="" onClick={() => setdisplayScreen('edit-profile')}><FaUserEdit/> <p>Edit Profile</p></li>
                    <li className="" onClick={() => setdisplayScreen('address')}><FaAddressBook/> <p>Address Book</p></li>
                    <li className="" onClick={() => setdisplayScreen('change-password')}><FaUnlockAlt/> <p>Change Password</p></li>
                    
                </ul>
            </div>
                <div className="details">
                {
                    displayScreen === 'overview' && 
                    <div className="account-overview">
                <div className="account">
                    <h3 className="">Account Overview</h3>
                    <div className="account-details">
                    <span><i><FiUser/> </i> <h4 className="">{profile.lastname} {profile.firstname}</h4></span>
                    <span><i><FiMail/> </i> <h4 className=""> {profile.email}</h4></span>
                    <span><i><FiPhone/> </i><h4 className="">{profile.phone}</h4></span>
                    </div>
                </div>
                <div className="account">
                    <h3 className="">Address Details</h3>
                    <div className="account-details">
                    <span><i><IoLocationOutline /> </i>
                    <h4 className="">{address.street}, {address.town}</h4>
                    </span> 
                    <span><i><GiPostOffice /> </i>
                    <h4 className="">{address.postal_code}</h4>
                    </span> 
                    <span><i><FiMap /> </i>
                    <h4 className=""> {address.country}</h4>
                    </span>    
                    </div>
                </div>
                </div>
                }
                {
                    displayScreen === 'orders' && 
                    <div className="orders">
                    <h3 className="">
                        Orders
                    </h3>
                    {
                    orders.length === 0 ? (
                                <div className="cart-empty">
                                    <p>No order has been made..</p>
                                    <div className="start-shopping">
                                        <Link to="/">
                                            <span><FaArrowLeft/> Start Shopping </span>
                                        </Link>
                                    </div>
                                </div>
                            ) : 
                            orders &&
                    orders.map((order, index) => 
                    <ul key={index}>
                        {
                        order.products.map((product, index) => 
                        <li key={index}>
                            <div className="">
                            
                            <div className="order-detail">
                            <div className="">
                            <img src={product.product_image}  alt="" />
                            </div>
                            <div className="order-info">
                            <h4>{product.product_name}</h4>
                            <p>Order-Id: {order.order_id}</p>
                            <h6 className="">
                                Date: 22-12-2022
                            </h6>
                            </div>
                            </div>
                            </div>
                            <span style={{
                            color: order.order_status == 'pending' ? '#9d921e' : '#9E005D'
                            }}>{order.order_status}</span>
                        </li>
)}
                    </ul>
                    )
}
                </div>
                }
                {
                    displayScreen === 'edit-profile' &&
                    <div className="edit-profile">
                    <h3>Edit profile</h3>
                    <form onSubmit={updateProfileDetails}>
                            <input type="text" value={firstname} required  name="firstname" onChange={onChange} id="" placeholder="First name" />
                            <input type="text" value={lastname} required name="lastname" onChange={onChange} id="" placeholder="Last name" />
                            <input type="email" value={email} required name="email" onChange={onChange} id="" placeholder="Email"/>
                        <input type="tel" value={phone} required name="phone" id="" onChange={onChange}  placeholder="Phone number"/>
                        
                        <div className="btn">
                            <button className="btn-primary">
                            {isLoading ? <Spinner />  : "Update Profile"}
                                
                            </button>
                        </div>
                    </form>
                </div>
                }
                {
                    displayScreen === 'address' && 
                    <div className="address-book">
                    <h3>Address Book</h3>
                    <form onSubmit={updateAddress}>
                        <div className="name">
                        <input type="text" value={country} required name="country" id="" onChange={onChangeAddress} placeholder="Country"/>
                        <input type="text" value={town} required name="town" id=""onChange={onChangeAddress}  placeholder="State"/>
                        </div>
                        <div className="city">
                            <input type="text" value={street} required name="street" id="" onChange={onChangeAddress}  placeholder="Street"/>
                            <input type="text" value={postal_code} required name="postal_code" onChange={onChangeAddress}  id="" placeholder="Postal Code"/>
                        </div>
                        <div className="btn">
                            <button className="btn-primary">
                            {isLoading ? <Spinner />  : "Update Address"}
                                
                            </button>
                        </div>
                    </form>
                </div>
                }
                {
                    displayScreen === 'change-password' && 
                    <div className="change-password">
                <h5>Change Password</h5>
                    <form onSubmit={updatePassword}>
                        <input type="password" value={old_password} required name="old_password" id="" onChange={onChangePassword} placeholder="Old Password"/>
                        <input type="password" value={new_password} required name="new_password" id="" onChange={onChangePassword} placeholder="New Password"/>
                        <input type="password" value={confirmNewPassword} required name="confirmNewPassword" id="" onChange={onChangePassword} placeholder="Confirm New Password"/>
                        <div className="btn">
                            <button className="btn-primary">
                            {isLoading ? <Spinner />  : "Change Password"}
                                
                            </button>
                        </div>
                    </form>
                </div>
                }
                </div>
            </div>
        </Wrapper>
     );
}
 
export default ProfilePage;