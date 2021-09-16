import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env'


const devEnviormentVarialbes = {
    DEV_BACKEND_URL
}


const prodEnviormentVarialbes = {
    PROD_BACKEND_URL
}

export default __DEV__ ? devEnviormentVarialbes : prodEnviormentVarialbes