import React, { useState } from "react"
import './style.scss'
import { useSelector } from "react-redux"
import CompanyProfileBanner from "../../assets/images/companyBanner.png"
import BorderButton from "../../components/borderButton"
import EditIcon from "../../assets/svg/editIcon.svg"
import MediumModal from "../../components/mediumModal"
import ModalInput from "../../components/modalInput"
import UploadButton from "../../components/uploadButton"
import { apis } from "../../apis"
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "../../redux/actions/types"

interface UserInfo {
  _id?: string,
  addressOne?: string,
  addressTwo?: string,
  avatar?: string,
  city?: string,
  companyName?: string,
  email?: string,
  firstName?: string,
  lastName?: string,
  level?: string,
  mobileNumber?: string,
  phoneNumber?: string,
  role?: string,
  state?: string,
  status?: string,
  website?: string,
  zipcode?: string,
}

export default function CompanyProfile() {
  const user = useSelector((state: any) => state.auth.user)
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("general")
  const [editModal, setEditModal] = useState(false)
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null)

  const handleEditProfile = () => {
    setEditModal(true)
    setCurrentUser(user)
  }

  const handleUploadAvatar = () => {
    console.log("Upload Avatar...")
  }

  const saveProfile = async () => {
    await apis.updateProfile({newProfile: currentUser})
    .then(async (res) => {
      enqueueSnackbar({
        variant: "success",
        message: res.data.msg
      })
      setEditModal(false)
      await localStorage.setItem('token', res.data.token)
      dispatch({ type: SET_CURRENT_USER, payload: currentUser })
    })
    .catch((err: any) => {
      enqueueSnackbar({
        variant: "error",
        message: err.data.msg
      })
    }) 
  }

  const handleCompanyNameChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, companyName: event.target.value
    }))
  }

  const handleEmailChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, email: event.target.value
    }))
  }

  const handleMobileNumberChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, mobileNumber: event.target.value
    }))
  }

  const handlePhoneNumberChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, phoneNumber: event.target.value
    }))
  }

  const handleAddressOneChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, addressOne: event.target.value
    }))
  }

  const handleAddressTwoChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, addressTwo: event.target.value
    }))
  }

  const handleStateChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, state: event.target.value
    }))
  }

  const handleCityChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, city: event.target.value
    }))
  }

  const handleZipCodeChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, zipcode: event.target.value
    }))
  }

  const handleWebsiteChange = (event: any) => {
    setCurrentUser((prev: any) => ({
      ...prev, website: event.target.value
    }))
  }

  return (
    <div className='page'>
      <div className="title">Company Profile</div>
      <div className="companyProfile-container">
        <div className="banner">
          <img src={CompanyProfileBanner} alt="Banner" />
        </div>
        <div className="tabBox">
          <div className={`tab ${activeTab === "general" && "active"}`} onClick={() => setActiveTab('general')}>General Information</div>
          <div className={`tab ${activeTab === "departments" && "active"}`} onClick={() => setActiveTab('departments')}>Departments</div>
          <div className={`tab ${activeTab === "users" && "active"}`} onClick={() => setActiveTab('users')}>Users</div>
        </div>
        <div className="tabContentbox">
          {
            activeTab === "general" && <div className="generalTab">
              <div className="generalTitle">
                <div className="companyName">{user.companyName}</div>
                <div>
                  <BorderButton title="Edit" icon={EditIcon} onClick={() => handleEditProfile()} />
                </div>
              </div>
              <div className="generalContent">
                <div className="address">
                  <div className="addressTitle">Address</div>
                  <div className="addressContent">
                    <div className="realAddress">
                      <div>{user.addressOne},</div>
                      <div>{user.addressTwo}</div>
                    </div>
                    <div className="otherAddress">
                      <div>{user.city}</div>
                      <div>{user.state}</div>
                      <div>{user.zipcode}</div>
                    </div>
                  </div>
                </div>
                <div className="otherInfo">
                  <div className="individualInfo">
                    <div className="infoTitle">Phone Number</div>
                    <div className="content">{user.phoneNumber}</div>
                  </div>
                  <div className="individualInfo">
                    <div className="infoTitle">Mobile</div>
                    <div className="content">{user.mobileNumber}</div>
                  </div>
                  <div className="individualInfo">
                    <div className="infoTitle">Email</div>
                    <div className="content">{user.email}</div>
                  </div>
                  <div className="individualInfo">
                    <div className="infoTitle">Website</div>
                    <div className="content">{user.website}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <MediumModal 
        isOpen={editModal}
        closeModal={() => setEditModal(false)}
        handleMainTitle="Save"
        handleMain={() => saveProfile()}
      >
        <div className="modal-container">
          <UploadButton 
            onClick={() => handleUploadAvatar()}
          />
          <div className="subRow">
            <div className="inputBox">
              <div className="inputTitle">Company Name</div>
              <ModalInput value={currentUser?.companyName} onChange={handleCompanyNameChange} />
            </div>
            <div className="inputBox">
              <div className="inputTitle">Email</div>
              <ModalInput value={currentUser?.email} onChange={handleEmailChange} />
            </div>
          </div>

          <div className="subRow">
            <div className="inputBox">
              <div className="inputTitle">Mobile Number</div>
              <ModalInput value={currentUser?.mobileNumber} onChange={handleMobileNumberChange} />
            </div>
            <div className="inputBox">
              <div className="inputTitle">Phone Number</div>
              <ModalInput value={currentUser?.phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
          </div>

          <div className="subRow">
            <div className="inputBox">
              <div className="inputTitle">Address 1</div>
              <ModalInput value={currentUser?.addressOne} onChange={handleAddressOneChange} />
            </div>
            <div className="inputBox">
              <div className="inputTitle">Address 2</div>
              <ModalInput value={currentUser?.addressTwo} onChange={handleAddressTwoChange} />
            </div>
          </div>

          <div className="subRow">
            <div className="inputBox">
              <div className="inputTitle">State</div>
              <ModalInput value={currentUser?.state} onChange={handleStateChange} />
            </div>
            <div className="inputBox">
              <div className="inputTitle">City</div>
              <ModalInput value={currentUser?.city} onChange={handleCityChange} />
            </div>
          </div>

          <div className="subRow">
            <div className="inputBox">
              <div className="inputTitle">Zip Code</div>
              <ModalInput value={currentUser?.zipcode} onChange={handleZipCodeChange} />
            </div>
            <div className="inputBox">
              <div className="inputTitle">Website</div>
              <ModalInput value={currentUser?.website} onChange={handleWebsiteChange} />
            </div>
          </div>
        </div>
      </MediumModal>
    </div>
  )
}
