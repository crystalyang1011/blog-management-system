<template>
  <div class="home">
    <aside>
      <div class="logo">
        <img src="@img/logo.png" alt="logo" />
        <h3>博客管理系统</h3>
      </div>
      <nav>
        <p>菜单</p>
        <ul>
          <li class="active">
            <i class="iconfont icon-fenlei"></i>
            <span>首页</span>
          </li>
          <li>
            <i class="iconfont icon-jinrizixun"></i>
            <span>个人博客</span>
          </li>
          <li>
            <i class="iconfont icon-jifen"></i>
            <span>技术交流</span>
          </li>
          <li>
            <i class="iconfont icon-wodedingyue"></i>
            <span>项目产品</span>
          </li>
          <li>
            <i class="iconfont icon-guanyuwomen"></i>
            <span>关于</span>
          </li>
        </ul>
      </nav>
      <nav class="prods">
        <p>产品</p>
        <ul>
          <li>
            <img src="@img/prod-1.png" alt="" />
            <span>留言墙</span>
          </li>
          <li>
            <img src="@img/prod-2.png" alt="" />
            <span>跳楼机</span>
          </li>
          <li>
            <img src="@img/prod-3.png" alt="" />
            <span>俄罗斯方块</span>
          </li>
        </ul>
      </nav>
      <el-switch
        style="display: block"
        v-model="theme"
        active-color="black"
        inactive-color="gray"
        active-text="深夜模式"
      >
      </el-switch>
      <div class="collapse">collapse</div>
    </aside>
    <main>2</main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: false, // true - 深夜模式
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: space-between;
}

aside {
  width: 200px;
  height: 100vh;
  background-color: white;
  padding: 0 20px;

  .logo {
    text-align: center;
    img {
      transform: scale(0.7);
    }
    h3 {
      margin-top: -10px;
      color: @primary-color;
    }
  }

  nav {
    margin-top: 20px;

    & > p {
      color: #96969c;
      margin-bottom: 20px;
      font-size: 14px;
    }

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 15px;
      border-radius: 10px;
      padding-left: 10px;
      height: 30px;
      transition: all 0.4s;

      &:first-of-type {
        margin-top: 0;
      }

      span {
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
      }

      &.active,
      &:hover {
        background-color: @primary-color;
        color: white;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
      }
    }
  }

  .prods {
    li {
      padding-left: 0;

      &.active,
      &:hover {
        color: @primary-color;
        background-color: unset;
        text-decoration: underline;
      }
    }
  }

  .el-switch {
    // todo: 修改active的颜色
    .el-switch__label.is-active span {
      color: black !important;
    }
  }
}

main {
  flex: 1;
  background-color: #f3f3f3;
}
</style>
