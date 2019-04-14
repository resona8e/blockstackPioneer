import { AppConfig } from 'blockstack'

/*store allows user to have write privelages & publish data allows 
data that you are writing to be viewable by other users*/
export const appConfig = new AppConfig(['store_wrote', 'publish_data'])
