<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Login</title>
    <style>
        /* General reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #fafafa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            max-width: 350px;
            width: 100%;
            padding: 20px;
            text-align: center;
            background-color: #fff;
            border: 1px solid #dbdbdb;
            border-radius: 8px;
        }

        .logo {
            margin: 20px 0;
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            font-family: 'Lucida Grande', sans-serif;
        }

        .form-group {
            margin: 10px 0;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #dbdbdb;
            border-radius: 4px;
            background-color: #fafafa;
            font-size: 14px;
        }

        .form-group input:focus {
            outline: none;
            border-color: #a0a0a0;
        }

        .login-button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            background-color: #0095f6;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
        }

        .login-button:disabled {
            background-color: #b2dffc;
        }

        .forgot-password {
            color: #385185;
            font-size: 12px;
            margin-top: 15px;
            display: block;
            text-decoration: none;
        }

        .or-divider {
            display: flex;
            align-items: center;
            text-align: center;
            color: #8e8e8e;
            font-size: 12px;
            margin: 20px 0;
        }

        .or-divider::before, .or-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background-color: #dbdbdb;
        }

        .or-divider::before {
            margin-right: 10px;
        }

        .or-divider::after {
            margin-left: 10px;
        }

        .signup {
            margin-top: 20px;
            font-size: 14px;
            color: #8e8e8e;
        }

        .signup a {
            color: #0095f6;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="logo">Instagram</div>
    <form>
        <div class="form-group">
            <input type="text" placeholder="Phone number, username, or email" required>
        </div>
        <div class="form-group">
            <input type="password" placeholder="Password" required>
        </div>
        <button type="submit" class="login-button">Log In</button>
    </form>

    <a href="#" class="forgot-password">Forgot password?</a>

    <div class="or-divider">OR</div>

    <button class="login-button" style="background-color: #1877f2; color: #fff;">
        Log in with Facebook
    </button>

    <div class="signup">
        Don't have an account? <a href="#">Sign up</a>
    </div>
</div>

</body>
</html>

