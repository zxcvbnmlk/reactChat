import {useNavigate} from "react-router-dom";
import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {authRequest} from "@src/auth/slices/searchSlice.ts";
import {useForm} from "react-hook-form";
import {authFormValues} from "@src/auth/models/auth.ts";



export default function AuthForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<authFormValues>();

    const onSubmit = (data: authFormValues) => {
        // здесь логика авторизации, например, вызов API
        const credentials = {
            username: data.username,
            token: data.password,
            isLoading: true,
        };
        localStorage.setItem("credentials", JSON.stringify(credentials));
        dispatch(authRequest(credentials));
        navigate("/");

    };

    return  (
        <>
            <h1>Авторизация</h1>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                    <TextField
                        label="Логин"
                        {...register("username", { required: "Введите логин" })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label="Пароль"
                        type="password"
                        {...register("password", { required: "Введите пароль" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button variant="contained" type="submit" >Войти</Button>
            </Box>

        </>
    )

}
