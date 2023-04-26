<script lang="ts">
    import { themeData } from "../themeStore";

    const nav = document.getElementById("nav");
    let oldValue = 0;

    onscroll = (event) => {
        let newValue = window.pageYOffset || document.documentElement.scrollTop;

        if (oldValue - newValue < 0) {
            nav!.classList.add("top-[-4rem]");
        } else if (oldValue - newValue > 0) {
            setTimeout(() => {
                nav!.classList.remove("top-[-4rem]");
            }, 100);
        }
        oldValue = newValue;
    };
</script>

<nav
    id="nav"
    class="navbar fixed z-10 top-0 shadow-sm transition-all duration-300 bezier bg-base-100"
>
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">HnzBlog</a>
    </div>
    <div class="flex-none">
        <ul class="menu items-center menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <input on:toggle={()=> themeData.set(!$themeData)} type="checkbox" class="toggle" checked />
        </ul>
    </div>
</nav>

<style>
    .bezier {
        transition-timing-function: cubic-bezier(0.17, 0.67, 0.44, 0.92);
    }
</style>
