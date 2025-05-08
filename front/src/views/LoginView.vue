<template>
  <div class="login">
    <form action="#" class="login-form">
      <img src="@img/logo.png" alt="" />
      <h2>博客管理系统</h2>
      <input type="text" placeholder="请输入用户名" />
      <input type="text" placeholder="请输入密码" />
      <button>登录</button>
      <a href="#">还没有账号，去注册 →</a>
    </form>
    <footer>
      <a href="https://github.com/crystalyang1011/blog-management-system"
        >© 2025 博客管理系统 - 杨玉婷
        <svg
          t="1746673049951"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2596"
          width="18"
          height="18"
        >
          <path
            d="M512 12.672c-282.88 0-512 229.248-512 512 0 226.261333 146.688 418.133333 350.08 485.76 25.6 4.821333 34.986667-11.008 34.986667-24.618667 0-12.16-0.426667-44.373333-0.64-87.04-142.421333 30.890667-172.458667-68.693333-172.458667-68.693333C188.672 770.986667 155.008 755.2 155.008 755.2c-46.378667-31.744 3.584-31.104 3.584-31.104 51.413333 3.584 78.421333 52.736 78.421333 52.736 45.653333 78.293333 119.850667 55.68 149.12 42.581333 4.608-33.109333 17.792-55.68 32.426667-68.48-113.706667-12.8-233.216-56.832-233.216-253.013333 0-55.893333 19.84-101.546667 52.693333-137.386667-5.76-12.928-23.04-64.981333 4.48-135.509333 0 0 42.88-13.738667 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52 0.256 87.04 5.888 128 17.28 97.28-66.218667 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581333 5.12 135.509333 32.64 35.84 52.48 81.493333 52.48 137.386667 0 196.693333-119.68 240-233.6 252.586667 17.92 15.36 34.56 46.762667 34.56 94.72 0 68.522667-0.64 123.562667-0.64 140.202666 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512"
            fill="#ffffff"
            p-id="2597"
          ></path>
        </svg>
      </a>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@form-bg-color: #fff;
@ipt-bg-color: #eeeeee;

.login {
  width: 100vw;
  height: 100vh;
  background-color: @primary-color;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;
  width: 400px;
  background-color: @form-bg-color;
  border-radius: 20px;

  img {
    zoom: 0.7;
  }

  h2 {
    margin-top: 15px;
    color: @primary-color;
  }

  input[type="text"] {
    display: block;
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: @ipt-bg-color;
    padding: 10px;

    &:first-of-type {
      margin-top: 30px;
    }

    &:last-of-type {
      margin-top: 20px;
    }

    &:focus {
      outline: 2px solid @primary-color;
    }
  }

  button {
    margin-top: 30px;
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: @primary-color;
    color: #fff;
    font-size: 18px;

    // &:hover {
    //   background-color: white;
    //   color: @primary-color;
    //   border: 1px solid @primary-color;
    // }
  }

  a {
    margin-top: 10px;
    font-size: 14px;
    color: gray;

    &:hover {
      color: @primary-color;
    }
  }
}

footer {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
    color: white;

    svg {
      margin-left: 5px;
    }
  }
}
</style>
