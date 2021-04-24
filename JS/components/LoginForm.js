const $template = document.createElement("template");
$template.innerHTML = `
<form class="login-form">
<h2>Login to your account</h2>
<div class="sub-title">Bleh Bleh Bleh Bleh</div>
<input-wrapper class="email" placeholder="Your email" type="email" error=""></input-wrapper>
<input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
<button class="Login-btn">Login</button>
</form>
`;

export default class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$loginForm = this.querySelector(".login-form");
    this.$email = this.querySelector(".email");
    this.$password = this.querySelector(".password");
  }

  connectedCallback() {
    this.$loginForm.onsubmit = (event) => {
      event.preventDefault();
      alert("Logged in successfully");

      this.$email.validate((value) => {
        return value != "";
      }, "Invalid email");

      this.$password.validate((value) => {
        return value != "";
      }, "Invalid password");
    };
  }
}

window.customElements.define("login-form", LoginForm);

/*  FIREBASE AUTHENTICATION

- Firebase là một nền tảng sở hữu bởi google giúp chúng ta phát triển các ứng dụng di động và web. 
Họ cung cấp rất nhiều công cụ và dịch vụ tiện ích để phát triển ứng dụng nên một ứng dụng chất lượng. 
Điều đó rút ngắn thời gian phát triển và giúp ứng dụng sớm ra mắt với người dùng.

Firebase cung cấp cho người dùng các dịch vụ cơ sở dữ liệu hoạt động trên nền tảng đám mây với hệ thống máy chủ cực kỳ mạnh mẽ của Google. 
Chức năng chính của firebase là giúp người dùng lập trình ứng dụng, phần mềm trên các nền tảng web, di động bằng cách đơn giản hóa các thao tác với cơ sở dữ liệu. 

- Firebase Authentication là chức năng xác thực người dùng.
Sử dụng Firebase Authentication user sẽ xác thực tài khoản bằng nhiều cách, email, Facebook, Twitter, Google hay Github.
Firebase Authentication cho phép tạo một user mới lưu xác thực của user xuống Firebase Database, không còn cực khổ đi config ở phía server

*/
