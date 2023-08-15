import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useForm } from "../../../hooks/useForm";
import { emailValidator } from "../../../utils/validators/emailValidator";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { AllRouteConstants } from "../../../router/RouteConstants";
import AuthService from "../../../services/controllers/AuthService";
import { ILogin } from "../../../interfaces/IApiRequests";
import { IAuthResponse } from "../../../interfaces/IApiResponses";
import authRestApiService from "../../../services/api_services/AuthRestService";

const useLogin = () => {
    const navigate = useNavigate();
    const authService = new AuthService(authRestApiService)
    const loginForm = useForm<ILogin>(
        { email: "", password: "" },
        { email: emailValidator, password: emptyValidator }
    );


    const signin = (data: ILogin) => authService.login(data);

    const loginApiRequest = useApi<IAuthResponse, ILogin>(signin as any);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        loginForm.resetFormErrors();
        loginApiRequest.reset();
        const valid = loginForm.validate();
        if (valid) {
            try {
                const user = await loginApiRequest.request(loginForm.form);
                if (user) {
                    navigate(AllRouteConstants.main.index);
                }
            } catch (error) { }
        }

    };

    return {
        loginForm,
        handleSubmit,
        loading: loginApiRequest.loading,
        error: loginApiRequest.error
    }
}

export default useLogin