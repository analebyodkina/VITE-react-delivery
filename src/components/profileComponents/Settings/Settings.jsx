import SettingsItem from "../SettingsItem/SettingsItem";
import "./Settings.scss";
const Settings = () => {
  return ( 
     <div className="settings">
        <div className="title settings__title">Settings</div>
        <div className="settings__list">
          <SettingsItem title="Account" desc="Personal information" />


          <SettingsItem title="Address" desc="Shippings addresses" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.3442 3.29018 4.43655 4.6967 3.03003C6.10322 1.6235 8.01088 0.833328 10 0.833328C11.9891 0.833328 13.8968 1.6235 15.3033 3.03003C16.7098 4.43655 17.5 6.3442 17.5 8.33333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>}/>


          <SettingsItem title="Payment method" desc="Connected credit cards" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 3.33334H2.49998C1.5795 3.33334 0.833313 4.07953 0.833313 5V15C0.833313 15.9205 1.5795 16.6667 2.49998 16.6667H17.5C18.4205 16.6667 19.1666 15.9205 19.1666 15V5C19.1666 4.07953 18.4205 3.33334 17.5 3.33334Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M0.833313 8.33334H19.1666" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}/>


          <SettingsItem title="Security" desc="Password, 2FA" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99998 18.3333C9.99998 18.3333 16.6666 15 16.6666 10V4.16667L9.99998 1.66667L3.33331 4.16667V10C3.33331 15 9.99998 18.3333 9.99998 18.3333Z" stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}/>
        </div>
    </div>
  )
}

export default Settings