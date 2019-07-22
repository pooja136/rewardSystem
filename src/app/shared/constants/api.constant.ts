import { environment } from 'src/environments/environment.prod';

const basePath = environment.BASE_URL;
export const APIConstant = {
    registrationSecondStep: `${basePath}register/secondstep`,
}