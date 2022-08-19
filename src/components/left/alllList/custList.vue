<template>
    <div class="custListContainer">
        <ul>
            <li>
                <div>
                    <div class="itemContainer">
                        <div>
                        <span class="iconfont icon-caidan
 ">
                        </span>
                            <span>
                                text
                            </span>
                        </div>
                        <span class="number">
                            1
                        </span>
                    </div>

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
.itemContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .number {
        display: block;
        height: 15px;
        line-height: 15px;
        background-color: #e5e5e5;
        // border: 1px solid #000;
        border-radius: 50%;
    }
}
</style>