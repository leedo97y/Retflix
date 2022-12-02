// LoginForm
import styled from "@emotion/styled";

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .InputID {
        background: #333333;
        color: #fff;
        border-color: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        box-sizing: border-box;
        border-width: 0;
        border-radius: 4px;
        font-size: 16px;
        line-height: 50px;
        width: 314px;
        margin: 28px 68px 19px 68px;
        padding: 0 20px;
    }

    .InputPW {
        background: #333333;
        color: #fff;
        border-color: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        box-sizing: border-box;
        border-width: 0;
        border-radius: 4px;
        font-size: 16px;
        line-height: 50px;
        width: 314px;
        margin: 0px 68px 0 68px;
        padding: 0 20px;
    }

    .InputID:focus,
    .InputPW:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 4px;
        caret-color: #fff;
    }

    .InputID::placeholder,
    .InputPW::placeholder {
        color: #8c8c8c;
        font-weight: 500;
    }

    .placeLabel {
        color: #8c8c8c;
        font-weight: 400;
        font-size: 16px;
    }

    .LoginBtn {
        background: #e50914;
        color: #fff;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.55) 0px 1px 0px 0px;
        padding: 10px auto;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        margin: 40px 68px 10px 68px;
        padding: 16px;
        height: 48px;
        width: 314px;
}
`;