class Refresh {
    constructor(options) {
        this.page = 0;
        this.options = options;
    }

    /**
     * @author 初心
     * @desc 列表请求
     */
    getList(params = {}) {
        return async (request) => {
            // 网络请求兜底
            try {
                // 每次请求 page++
                this.page = this.page + 1;
                // 列表请求
                const res = await request({...params, page: this.page});
                // 返回值
                return {
                    res, page: this.page
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    /**
     * @author 初心
     * @desc 请求重置
     */
    reset() {
        this.page = 0;
    }

    /**
     * @author 初心
     * @desc 下拉刷新
     */
    refresh() {
        this.reset();
    }
}


export default Refresh;