<template>
    <div class="innerListContainer">
        <ul>
            <li>
                <div class="itemContainer">
                    <div class="left">
                        <span class="iconfont icon-taiyang">
                        </span>
                        <span>
                            我的一天
                        </span>
                    </div>
                    <span class="number">
                        1
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.itemContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .number{
        display: block;
        height: 15px;
        line-height: 15px;
        background-color: #e5e5e5;
        // border: 1px solid #000;
        border-radius: 50%;
    }
}
</style>